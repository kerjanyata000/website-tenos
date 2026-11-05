/* eslint-disable @typescript-eslint/ban-ts-comment, @typescript-eslint/no-unused-vars, prefer-const */
// @ts-nocheck
/**
 * Tenos Intelligence Prism engine — ported from file-html/Intelligence Prism.html.
 * Scroll-scrubbed only (setProgress). Transparent WebGL clear; no rectangular backdrop plane.
 */
import * as T from "three";

export const TENOS_PRISM_RATIO = 0.6125;

const RATIO=0.6125;           // inner/outer radius measured from official logo PNG (113.5/185.4)
const DEPTH=0.14;              // glass thickness (material necessity, not in the 2D logo)
const sm=(a,b,x)=>{x=Math.min(1,Math.max(0,(x-a)/(b-a)));return x*x*x*(x*(x*6-15)+10)}; // smootherstep
const clamp=(x,a=0,b=1)=>Math.min(b,Math.max(a,x));
function rng(seed){let s=seed>>>0;return()=>{s=(s*1664525+1013904223)>>>0;return s/4294967296}}

// ---- geometry: rounded plan corners + 8-segment bevels + crease-aware smooth normals ----
let BEV_SEG=8, CURVE_K=1; const F_CORNER=0.085, BT=0.05, BSZ=0.065;
function roundedPoly(pts,r){           // closed polygon with quadratic-rounded corners
  const s=new T.Shape(),n=pts.length;
  for(let i=0;i<n;i++){
    const p0=pts[(i+n-1)%n],p1=pts[i],p2=pts[(i+1)%n];
    const d1=p0.clone().sub(p1),d2=p2.clone().sub(p1);const rr=Math.min(r,d1.length()*0.45,d2.length()*0.45);
    const a=p1.clone().add(d1.normalize().multiplyScalar(rr)),c=p1.clone().add(d2.normalize().multiplyScalar(rr));
    if(i===0)s.moveTo(a.x,a.y);else s.lineTo(a.x,a.y);
    s.quadraticCurveTo(p1.x,p1.y,c.x,c.y);
  }
  s.closePath();return s;
}
function smoothNormals(g,creaseDeg){
  const pos=g.attributes.position.array,n=pos.length/9,cosT=Math.cos(creaseDeg*Math.PI/180);
  const fn=new Float32Array(n*3),map=new Map(),key=(i)=>Math.round(pos[i]*2000)+','+Math.round(pos[i+1]*2000)+','+Math.round(pos[i+2]*2000);
  const A=new T.Vector3(),B=new T.Vector3(),Cc=new T.Vector3();
  for(let f=0;f<n;f++){
    A.set(pos[f*9],pos[f*9+1],pos[f*9+2]);B.set(pos[f*9+3],pos[f*9+4],pos[f*9+5]);Cc.set(pos[f*9+6],pos[f*9+7],pos[f*9+8]);
    B.sub(A);Cc.sub(A);B.cross(Cc);const l=B.length()||1; // area-weighted, unnormalised kept in fn
    fn[f*3]=B.x;fn[f*3+1]=B.y;fn[f*3+2]=B.z;
    for(let v=0;v<3;v++){const k=key(f*9+v*3);let a=map.get(k);if(!a){a=[];map.set(k,a)}a.push(f)}
  }
  const out=new Float32Array(n*9);
  for(let f=0;f<n;f++){
    const fx=fn[f*3],fy=fn[f*3+1],fz=fn[f*3+2],fl=Math.hypot(fx,fy,fz)||1;
    for(let v=0;v<3;v++){
      const list=map.get(key(f*9+v*3));let nx=0,ny=0,nz=0;
      for(const g2 of list){const gx=fn[g2*3],gy=fn[g2*3+1],gz=fn[g2*3+2],gl=Math.hypot(gx,gy,gz)||1;
        if((fx*gx+fy*gy+fz*gz)/(fl*gl)>cosT){nx+=gx;ny+=gy;nz+=gz}}
      const nl=Math.hypot(nx,ny,nz)||1;out[f*9+v*3]=nx/nl;out[f*9+v*3+1]=ny/nl;out[f*9+v*3+2]=nz/nl;
    }
  }
  g.setAttribute('normal',new T.BufferAttribute(out,3));return g;
}
function extrude(shape,depth,bevel,curveSeg,bs){
  bs=bs||bevel*0.8;const g=new T.ExtrudeGeometry(shape,{depth,bevelEnabled:true,bevelThickness:bevel,bevelSize:bs,bevelOffset:-bs,bevelSegments:BEV_SEG,curveSegments:Math.max(8,Math.round(curveSeg*CURVE_K))});
  g.translate(0,0,-depth/2);return smoothNormals(g,50);
}
// arcs are sampled on a GLOBAL angular grid so neighbouring (overlapping) fragments share identical rim vertices
function arcTo(s,r,from,to){
  const G=Math.PI*2/(CURVE_K<1?360:720),dir=to>from?1:-1,pts=[];
  if(dir>0){for(let k=Math.floor(from/G)+1;k*G<to-1e-6;k++)pts.push(k*G)}
  else{for(let k=Math.ceil(from/G)-1;k*G>to+1e-6;k--)pts.push(k*G)}
  pts.forEach(a=>s.lineTo(Math.cos(a)*r,Math.sin(a)*r));s.lineTo(Math.cos(to)*r,Math.sin(to)*r);
}
function sectorGeometry(a0,a1,bevel,f,bsz){
  f=f===undefined?F_CORNER:f;const s=new T.Shape(),P=(r,a)=>[Math.cos(a)*r,Math.sin(a)*r];
  const dO=f/1,dI=f/RATIO;
  let p=P(1,a0+dO);s.moveTo(p[0],p[1]);
  arcTo(s,1,a0+dO,a1-dO);
  let c=P(1,a1),e=P(1-f,a1);s.quadraticCurveTo(c[0],c[1],e[0],e[1]);
  e=P(RATIO+f,a1);s.lineTo(e[0],e[1]);
  c=P(RATIO,a1);e=P(RATIO,a1-dI);s.quadraticCurveTo(c[0],c[1],e[0],e[1]);
  arcTo(s,RATIO,a1-dI,a0+dI);
  c=P(RATIO,a0);e=P(RATIO+f,a0);s.quadraticCurveTo(c[0],c[1],e[0],e[1]);
  e=P(1-f,a0);s.lineTo(e[0],e[1]);
  c=P(1,a0);e=P(1,a0+dO);s.quadraticCurveTo(c[0],c[1],e[0],e[1]);
  return extrude(s,DEPTH,bevel,20,bsz||bevel*1.7);
}
function annulusGeometry(bevel){
  const N=Math.max(64,Math.round(176*CURVE_K)),o=[],h=[];
  for(let i=0;i<N;i++){const t=i/N*Math.PI*2+0.0037;o.push(new T.Vector2(Math.cos(t),Math.sin(t)));h.push(new T.Vector2(Math.cos(t)*RATIO,Math.sin(t)*RATIO))}
  const s=new T.Shape(o);const hp=new T.Path(h.reverse());s.holes.push(hp);
  return extrude(s,DEPTH,bevel,12,bevel*1.7);
}
function facetGeometry(w,h,t){
  const V=(x,y)=>new T.Vector2(x,y);
  const s=roundedPoly([V(-w/2,-h/2),V(w/2,-h*0.32),V(w*0.18,h/2),V(-w*0.5,h*0.22)],0.16);
  return extrude(s,t,0.022,12);
}
function envScene(){
  const sc=new T.Scene();sc.background=new T.Color(0x05070b);
  const panel=(c,i,w,h,pos,look)=>{const m=new T.Mesh(new T.PlaneGeometry(w,h),new T.MeshBasicMaterial({color:new T.Color(c).multiplyScalar(i),side:T.DoubleSide}));m.position.set(...pos);m.lookAt(...look);sc.add(m)};
  panel(0x8B5CF6,6.5,8,14,[-9,2,2],[0,0,0]);      // violet wash, left
  panel(0x22D3EE,11,3,12,[-6,-2,6],[0,0,0]);      // cyan strip, front left
  panel(0xE879F9,6,5,10,[9,-1,3],[0,0,0]);       // magenta, right
  panel(0xFFD98A,8,2,6,[7,6,3],[0,0,0]);       // champagne gold accent, small
  panel(0xffffff,8,12,3,[0,10,4],[0,0,0]);       // top softbox
  panel(0xB794FF,5,10,2,[0,-9,5],[0,0,0]);       // low violet fill
  panel(0x22D3EE,7,3,9,[4,0,-9],[0,0,0]);      // cyan rim from behind
  return sc;
}

export function createTenosPrism(canvas: HTMLCanvasElement, opts: Record<string, unknown> = {}){
  BEV_SEG=opts.lod==='low'?4:6;CURVE_K=opts.lod==='low'?0.6:1;
  const R=new T.WebGLRenderer({canvas,antialias:true,alpha:true,preserveDrawingBuffer:!!opts.preserve,powerPreference:'high-performance'});
  R.setClearColor(0x000000,0);R.outputColorSpace=T.SRGBColorSpace;R.toneMapping=T.ACESFilmicToneMapping;R.toneMappingExposure=1.15;
  const pm=new T.PMREMGenerator(R);const env=pm.fromScene(envScene(),0.03).texture;pm.dispose();
  const scene=new T.Scene();scene.background=null;scene.environment=env;
  const cam=new T.PerspectiveCamera(14,1,0.1,120);
  const root=new T.Group();scene.add(root);
  // refraction backdrop plane omitted for transparent production canvas

  const light={cy:new T.PointLight(0x06C0D0,0,30,1.6),ye:new T.PointLight(0xA06BFF,0,30,1.6),au:new T.PointLight(0xFFD98A,0,30,1.8)};scene.add(light.cy,light.ye,light.au);
  // soft floor glow omitted — kept scene transparent over site background


  const hx=(h)=>new T.Color(h);
  const PAL={cy2:hx(0x2DD4BF),cy:hx(0x22D3EE),lav:hx(0xC4B5FD),vio:hx(0x8B5CF6),mag:hx(0xE879F9),gold:hx(0xFFB52E),yel:hx(0xFFD966),amb:hx(0xFF9F1C),cham:hx(0xFFC857),lil:hx(0xD9CCFF),bl:hx(0x60A5FA),lil2:hx(0xD8B4FE)};
  const START=['cy','lav','gold','vio','cy','mag','lav','cy','vio','gold','lav','mag'];
  const END  =['vio','lav','gold','gold','gold','gold','yel','gold','gold','lav','cy','lav'];
  // ---- continuous iridescent colour field over the ring (angle + a little radial shift), used from 78% to 95% ----
  const STOPS=[[20,PAL.amb],[65,PAL.gold],[105,PAL.yel],[150,PAL.cham],[172,PAL.lil],[196,PAL.cy],[224,PAL.bl],[250,PAL.lav],[276,PAL.vio],[302,PAL.lil2],[330,PAL.cham]];
  const _c=new T.Color(),_w=new T.Color(0xffffff);
  function colorField(x,y){
    const r=Math.hypot(x,y),t=Math.min(1,Math.max(0,(r-RATIO)/(1-RATIO)));
    let ph=Math.atan2(y,x)*57.29578;if(ph<0)ph+=360;ph+=26*t;if(ph>=380)ph-=360;if(ph<20)ph+=360;
    let k=STOPS.length-1;for(let j=0;j<STOPS.length;j++){if(ph<STOPS[j][0]){k=j-1;break}}
    const A=k<0?STOPS[STOPS.length-1]:STOPS[k],B=STOPS[(k+1+STOPS.length)%STOPS.length];
    const a0=k<0?A[0]-360:A[0],b0=(k+1>=STOPS.length)?B[0]+360:B[0];let u=(ph-a0)/(b0-a0);u=u*u*(3-2*u);
    _c.copy(A[1]).lerp(B[1],u);_c.lerp(_w,0.06*(1-t)+0.0);return _c.clone();
  }
  const U={uBlend:{value:0},uGlow:{value:0.20},uFres:{value:0.35}};
  function hookColor(m){
    m.onBeforeCompile=(sh)=>{sh.uniforms.uBlend=U.uBlend;sh.uniforms.uGlow=U.uGlow;sh.uniforms.uFres=U.uFres;
      sh.vertexShader=sh.vertexShader.replace('void main() {','attribute vec3 cSmooth;\nuniform float uBlend;\nvoid main() {')
        .replace('#include <color_vertex>','#ifdef USE_COLOR\nvColor = mix( color.rgb, cSmooth, uBlend );\n#endif');
      sh.fragmentShader=sh.fragmentShader.replace('void main() {','uniform float uGlow;\nuniform float uFres;\nvoid main() {')
        .replace('#include <emissivemap_fragment>','#include <emissivemap_fragment>\n#ifdef USE_COLOR\ntotalEmissiveRadiance += vColor * uGlow;\nfloat fres = pow( 1.0 - clamp( abs( dot( normalize( vViewPosition ), normal ) ), 0.0, 1.0 ), 3.0 );\nfloat wg = smoothstep( 0.35, 0.8, vColor.r - 0.5 * vColor.b );\nvec3 ft = mix( mix( vec3(0.05,0.55,0.65), vec3(0.6,0.25,0.7), smoothstep( 0.3, 0.6, vColor.r ) ), vec3(0.75,0.48,0.1), wg );\ntotalEmissiveRadiance += ft * fres * uFres;\n#endif');};
    m.customProgramCacheKey=()=>'prism-vc';
  }
  const N=opts.fragments||12, NF=opts.facets||6, simple=!!opts.simple;
  const rnd=rng(20261105);
  // materials (shared tints, animated by p)
  const mk=()=>new T.MeshPhysicalMaterial({color:0xffffff,metalness:0,roughness:0.05,iridescence:1,iridescenceIOR:1.55,iridescenceThicknessRange:[260,820],transmission:simple?0:1,thickness:0.9,ior:1.45,
    transparent:simple,opacity:simple?0.55:1,clearcoat:1,clearcoatRoughness:0.04,envMapIntensity:1.4,attenuationColor:0x7C3AED,attenuationDistance:3.0,
    specularIntensity:1,side:T.FrontSide});
  const matShards=[],matFacets=[];
  // arc fragments with uneven angular spans
  let spans=[];for(let i=0;i<N;i++)spans.push(0.65+rnd()*0.7);const tot=spans.reduce((a,b)=>a+b,0);spans=spans.map(s=>s/tot*Math.PI*2);
  const shards=[];let a=-Math.PI/2+0.1;
  for(let i=0;i<N;i++){
    const a0=a,a1=a+spans[i];a=a1;const mid=(a0+a1)/2;
    // centroid radius of an annular sector
    const dth=a1-a0;const rc=(2/3)*(1-Math.pow(RATIO,3))/(1-RATIO*RATIO)*Math.sin(dth/2)/(dth/2);
    // each fragment is extended past its radial edges by DELTA so that, at the end, neighbouring caps overlap
    // and the ring reads as one connected piece (no bevel grooves between fragments). No separate final mesh.
    const DELTA=BSZ/RATIO+0.07, dthx=dth+2*DELTA;
    const rcx=(2/3)*(1-Math.pow(RATIO,3))/(1-RATIO*RATIO)*Math.sin(dthx/2)/(dthx/2);
    const geo=sectorGeometry(a0-DELTA,a1+DELTA,BT,F_CORNER,BSZ);
    const cx=Math.cos(mid)*rcx,cy=Math.sin(mid)*rcx;geo.translate(-cx,-cy,0);
    // two colour attributes: 'color' = per-fragment tint with a soft inner/outer gradient (Stages 01-03),
    // 'cSmooth' = one continuous colour field over the whole ring (Stage 05). A shader uniform blends them with scroll.
    { const pa=geo.attributes.position.array,col=new Float32Array(pa.length),cs=new Float32Array(pa.length),
        base=PAL[END[i%12]],sec=PAL[END[(i+4)%12]],tmp=new T.Color();
      for(let k=0;k<pa.length;k+=3){const X=pa[k]+cx,Y=pa[k+1]+cy,r=Math.hypot(X,Y);const t=Math.min(1,Math.max(0,(r-RATIO)/(1-RATIO)));
        tmp.setRGB(1,1,1).lerp(base,0.6).lerp(sec,0.55*t*t*(3-2*t));col[k]=tmp.r;col[k+1]=tmp.g;col[k+2]=tmp.b;
        const f=colorField(X,Y);cs[k]=f.r;cs[k+1]=f.g;cs[k+2]=f.b}
      geo.setAttribute('color',new T.BufferAttribute(col,3));geo.setAttribute('cSmooth',new T.BufferAttribute(cs,3)); }
    const matS=mk();matS.vertexColors=true;hookColor(matS);matS.polygonOffset=false;matShards.push(matS);
    const mesh=new T.Mesh(geo,matS);root.add(mesh);
    const layer=(i%3)-1;
    const sx=opts.sx||1,sy=opts.sy||1;
    const dir=new T.Vector3(rnd()-.5,rnd()-.5,rnd()-.5).normalize();
    const P0={p:new T.Vector3(Math.cos(mid+rnd()*1.2-0.6)*(1.4+rnd()*0.9)*sx,Math.sin(mid+rnd()*1.2-0.6)*(1.2+rnd()*0.8)*sy,(rnd()-.4)*2.2),
      q:new T.Quaternion().setFromEuler(new T.Euler(rnd()*6.28,rnd()*6.28,rnd()*6.28)),s:0.72+rnd()*0.4};
    const P1={p:new T.Vector3(cx*1.55+(rnd()-.5)*.7,cy*1.55+(rnd()-.5)*.7,(rnd()-.5)*1.1),
      q:new T.Quaternion().setFromEuler(new T.Euler((rnd()-.5)*1.4,(rnd()-.5)*1.4,(rnd()-.5)*1.2)),s:1};
    const P2={p:new T.Vector3(cx*1.14,cy*1.14,layer*0.42),
      q:new T.Quaternion().setFromEuler(new T.Euler(layer*0.42,-layer*0.36+0.1,layer*0.16)),s:1+layer*0.05};
    const P3={p:new T.Vector3(cx*1.07,cy*1.07,layer*0.05),q:new T.Quaternion().setFromEuler(new T.Euler(0.09*layer,-0.07*layer,0.05*layer)),s:1};
    const P4={p:new T.Vector3(cx,cy,0),q:new T.Quaternion(),s:1};
    shards.push({mesh,P:[P0,P1,P2,P3,P4],d:rnd(),drift:dir.multiplyScalar(0.28)});
  }
  // prism facets (disappear into the composition)
  const facets=[];
  for(let j=0;j<NF;j++){
    const g=facetGeometry(1.25,0.78,0.03);const matF=mk();matFacets.push(matF);const m=new T.Mesh(g,matF);root.add(m);
    const ph=j/NF*Math.PI*2+0.3;
    const P0={p:new T.Vector3(Math.cos(ph+1.1)*(1.2+rnd()*1.0)*(opts.sx||1),Math.sin(ph+1.1)*(1.1+rnd()*0.9)*(opts.sy||1),(rnd()-.5)*2.4),
      q:new T.Quaternion().setFromEuler(new T.Euler(rnd()*6.28,rnd()*6.28,rnd()*6.28)),s:0.6+rnd()*0.5};
    const P1={p:new T.Vector3(Math.cos(ph)*1.05,Math.sin(ph)*1.05,(rnd()-.5)*0.9),
      q:new T.Quaternion().setFromEuler(new T.Euler((rnd()-.5)*1.2,(rnd()-.5)*1.2,ph)),s:0.9};
    const P2={p:new T.Vector3(Math.cos(ph)*0.5,Math.sin(ph)*0.5,(j%2?0.2:-0.2)),
      q:new T.Quaternion().setFromEuler(new T.Euler(j%2?0.55:-0.55,0.25,ph)),s:1};
    const rr=(1+RATIO)/2;
    const P3={p:new T.Vector3(Math.cos(ph)*rr,Math.sin(ph)*rr,0),q:new T.Quaternion().setFromEuler(new T.Euler(0,0,ph)),s:0.001};
    facets.push({mesh:m,P:[P0,P1,P2,P3,P3],d:rnd()*0.8});
  }
  const logo={visible:false}; // no separate logo mesh: the same 12 fragments are the final symbol
  // faint edge lines for refraction readability
  const edgeMat=new T.LineBasicMaterial({color:0x06C0D0,transparent:true,opacity:0.0});
  const edges=[];shards.forEach(s=>{const e=new T.LineSegments(new T.EdgesGeometry(s.mesh.geometry,25),edgeMat);s.mesh.add(e);edges.push(e)});

  const KN=[0.15,0.35,0.55,0.80,0.97];
  const tmpQ=new T.Quaternion(),tmpV=new T.Vector3();
  function pose(item,p,sc){
    // item.P[k] is the pose at knot KN[k]; p<KN[0] holds P0 with a small scroll-bound drift
    let k=0;while(k<KN.length-1&&p>KN[k])k++;
    // k = index of the target knot; segment is [KN[k-1],KN[k]]
    const m=item.mesh;
    if(p<=KN[0]){
      const t=p/KN[0];m.position.copy(item.P[0].p);
      if(item.drift)m.position.addScaledVector(item.drift,t);
      m.quaternion.copy(item.P[0].q);m.scale.setScalar(item.P[0].s*sc);return;
    }
    const a=item.P[k-1],b=item.P[k];
    let t=(p-KN[k-1])/(KN[k]-KN[k-1]);
    t=sm(item.d*0.3,1,t);                  // per-fragment stagger, every fragment still lands at t=1
    m.position.lerpVectors(a.p,b.p,t);
    m.quaternion.slerpQuaternions(a.q,b.q,t);
    m.scale.setScalar((a.s+(b.s-a.s)*t)*sc);
  }
  const C={lav:new T.Color(0xE4D9FF),vio:new T.Color(0xB58CFF),deep:new T.Color(0x6A2BD9),cyan:new T.Color(0x06C0D0),vio0:new T.Color(0x8B5CF6),emi0:new T.Color(0x8266F2),emi1:new T.Color(0x5B2BD6)};
  const white=new T.Color(0xffffff),c0=new T.Color(),c1=new T.Color(),cb=new T.Color();
  const lavAtt=new T.Color(0xB9A6FF),warmAtt=new T.Color(0xF2E4D2),attC=new T.Color();
  function setShardMat(m,ct){
    m.color.copy(white);m.attenuationColor.copy(attC.copy(lavAtt).lerp(warmAtt,ct));m.attenuationDistance=5.0-1.6*ct;
    m.emissive.set(0x000000);m.emissiveIntensity=0;
    m.transmission=simple?0:1-0.05*ct;m.opacity=simple?0.55+0.15*ct:1;
    m.roughness=0.05+0.05*ct;m.thickness=1.0+0.7*ct;m.iridescence=0.9+0.1*ct;m.envMapIntensity=3.0;
  }
  function setMat(m,i,ct,p,pane){
    c0.copy(PAL[START[i%12]]);c1.copy(PAL[pane?END[(i+5)%12]:END[i%12]]);cb.copy(c0).lerp(c1,ct);
    m.color.copy(white).lerp(cb,0.55);
    m.attenuationColor.copy(cb);m.attenuationDistance=5.0-1.6*ct;
    m.emissive.copy(cb);m.emissiveIntensity=0.22-0.05*ct;
    m.transmission=simple?0:1-0.05*ct;m.opacity=simple?(pane?0.35:0.55+0.15*ct):1;
    m.roughness=0.05+0.06*ct;m.thickness=0.9+0.5*ct;m.iridescence=0.9+0.1*ct;m.envMapIntensity=3.0;
  }
  let last=-1,W=0,H=0;
  function setProgress(p){
    p=clamp(p);last=p;
    const sc=1;
    shards.forEach(s=>pose(s,p,sc));
    facets.forEach(f=>{pose(f,p,sc);f.mesh.visible=p<0.795});
    // seal: exact annulus replaces the fragments (identical geometry and material)
    U.uBlend.value=sm(0.78,0.95,p);U.uGlow.value=0.20+0.30*U.uBlend.value;
    // material progression: every fragment keeps its own colour pair (cyan, lavender, violet, magenta, gold),
    // so the palette stays distributed instead of one tint over the whole object
    const ct=sm(0.30,0.95,p);
    matShards.forEach(m=>setShardMat(m,ct));
    matFacets.forEach((m,i)=>setMat(m,i+3,ct,p,true));
    edgeMat.opacity=0.09*sm(0.1,0.5,p)*(1-sm(0.55,0.75,p));
    // object turns with scroll only; settles frontal at the end
    const calm=1-sm(0.5,0.90,p);
    root.rotation.y=0.75*Math.sin(p*5.4)*calm+0.25*calm;
    root.rotation.x=-0.22*calm;
    root.rotation.z=0.18*Math.sin(p*3.1)*calm;
    // lights sweep with scroll, settle to a stable key/rim at the end
    const sw=sm(0,1,p);
    light.cy.position.set(-3.4+2.2*sw,1.8-1.2*sw,3.2);light.ye.position.set(3.6-1.4*sw,-1.4+2.6*sw,3.6);light.au.position.set(3.2-0.6*sw,3.4-0.8*sw,3.0);
    light.cy.intensity=30-7*ct;light.ye.intensity=28-8*ct;light.au.intensity=10+16*ct;
    // camera dolly: widest at 0, framed on the ring at 1
    const hh0=opts.hh0||3.0,hh1=opts.hh1||1.36;
    let hh=hh0+(hh1-hh0)*sm(0.1,0.9,p);
    const asp=W/Math.max(1,H);
    hh=Math.max(hh,(hh*1.0)/Math.max(asp,0.001)*Math.min(1,asp)*1); // portrait: widen to keep width
    if(asp<1)hh=hh/asp;
    cam.position.set(0,0,hh/Math.tan(T.MathUtils.degToRad(cam.fov/2)));cam.lookAt(0,0,0);
    R.render(scene,cam);
  }
  function resize(w,h,dpr){
    W=w;H=h;R.setPixelRatio(Math.min(dpr||1,opts.maxDpr||2));R.setSize(w,h,false);cam.aspect=w/h;cam.updateProjectionMatrix();
    if(last>=0)setProgress(last);
  }
  function dispose(){R.dispose();try{R.forceContextLoss()}catch(x){}scene.traverse(o=>{if(o.geometry)o.geometry.dispose()});}
  return {setProgress,resize,dispose,renderer:R,camera:cam,root,logo,shards,RATIO,
    debugFlat(){ // flat white pass for numeric geometry validation
      const bg=scene.background,env0=scene.environment;scene.environment=null;scene.background=new T.Color(0);
      const g0=U.uGlow.value,f0=U.uFres.value;U.uGlow.value=0;U.uFres.value=0;const mats=matShards.concat(matFacets);const saved=mats.map(m=>[m.transmission,m.color.clone(),m.emissive.clone(),m.emissiveIntensity,m.transparent,m.opacity]);
      mats.forEach(m=>{m.transmission=0;m.color.set(0);m.emissive.set(0xffffff);m.emissiveIntensity=1;m.transparent=false;m.opacity=1});
      const li=[light.cy.intensity,light.ye.intensity];light.cy.intensity=light.ye.intensity=0;edgeMat.opacity=0;
      R.toneMapping=T.NoToneMapping;R.render(scene,cam);
      return ()=>{U.uGlow.value=g0;U.uFres.value=f0;scene.background=bg;scene.environment=env0;mats.forEach((m,i)=>{const s=saved[i];m.transmission=s[0];m.color.copy(s[1]);m.emissive.copy(s[2]);m.emissiveIntensity=s[3];m.transparent=s[4];m.opacity=s[5]});light.cy.intensity=li[0];light.ye.intensity=li[1];R.toneMapping=T.ACESFilmicToneMapping;setProgress(last)};
    }};
}

export const TenosPrism = { create: createTenosPrism, RATIO: TENOS_PRISM_RATIO };
