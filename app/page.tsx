
export default function CadetItems() {
  return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
          <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
            Explore recently posted Cadet listings
          </p>
        </div>

        {/* Cadet Items Listing */}
        <section className="mb-32 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl w-full">
          {Array(8).fill(null).map((_, index) => (
              <div key={index} className="rounded-lg border border-gray-200 hover:border-gray-300 hover:bg-gray-100 dark:border-neutral-700 dark:bg-neutral-800/30 p-5">
                <h2 className="mb-3 text-xl font-semibold">Cadets Jacket {index + 1}</h2>
                <p className="text-sm opacity-50">
                  A lightly used cadets jacket in excellent condition. Suitable for all official events and ceremonies.
                </p>
                <span className="inline-block mt-4 font-bold">$50</span>
              </div>
          ))}
        </section>

      </main>
  )
}
