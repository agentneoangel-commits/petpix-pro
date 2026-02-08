export default function Gallery() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-pink-50 to-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
          Pet Transformations
        </h2>
        <p className="text-xl text-gray-600 text-center mb-16 max-w-2xl mx-auto">
          See what others have created. Your pet could be next!
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
            <div key={item} className="aspect-square bg-gray-200 rounded-xl flex items-center justify-center">
              <span className="text-gray-400 text-sm">Example {item}</span>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600">
            📸 Share your pet\'s transformation with #PetPixPro for a chance to be featured!
          </p>
        </div>
      </div>
    </section>
  )
}
