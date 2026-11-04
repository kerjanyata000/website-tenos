export default function Home() {
  return (
    <div className="flex flex-1 items-center justify-center bg-zinc-50 px-6 py-24 font-sans dark:bg-black">
      <main className="w-full max-w-2xl">
        <p className="text-sm font-medium tracking-wide text-zinc-500 uppercase">
          PT Tenos Data Teknologi
        </p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
          Tenos
        </h1>
        <p className="mt-4 max-w-xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
          AI enablement untuk individu dan organisasi. Kerangka situs ini
          siap diisi — produksi saat ini tayang di{" "}
          <a
            href="https://tenos.id"
            className="font-medium text-zinc-950 underline decoration-zinc-300 underline-offset-4 dark:text-zinc-50"
          >
            tenos.id
          </a>
          .
        </p>
      </main>
    </div>
  );
}
