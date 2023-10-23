export default function CadetItems() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-gray-100">
      
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-lg lg:flex">
        <p className="mb-8 text-center border-b border-gray-300 bg-gradient-to-b from-blue-500 to-blue-300 text-white py-6 rounded-xl shadow-lg backdrop-blur-md">
          Explore recently posted Cadet listings
        </p>
      </div>

      {/* Cadet Items Listing */}
      <section className="mb-32 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 max-w-7xl w-full">
        {Array(8).fill(null).map((_, index) => (
          <div key={index} className="rounded-lg border border-gray-200 hover:border-blue-500 hover:bg-blue-100 dark:border-neutral-700 dark:bg-neutral-800/30 p-6 shadow-md hover:shadow-xl transform transition-all duration-300 hover:scale-105">
            <h2 className="mb-3 text-xl font-semibold text-blue-600">Cadets Jacket {index + 1}</h2>
            <p className="text-sm opacity-70 mb-3">
              A lightly used cadets jacket in excellent condition. Suitable for all official events and ceremonies.
            </p>
            <span className="block mt-2 font-bold text-blue-700">$50</span>
          </div>
        ))}
      </section>

    </main>
  )
}
