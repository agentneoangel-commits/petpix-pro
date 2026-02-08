export default function Styles() {
  const styles = [
    { name: 'Superhero', emoji: '🦸', description: 'Cape, heroic pose, city skyline', image: '/styles/20250207-larry-superhero-v2.png' },
    { name: 'Beach', emoji: '🏖️', description: 'Surfing, sunglasses, tropical', image: '/styles/20250207-larry-beach-v2.png' },
    { name: 'Cozy', emoji: '🏠', description: 'Warm blankets, fairy lights, comfort', image: '/styles/20260207-larry-cozy-rainy-v2.png' },
    { name: 'Camping', emoji: '⛺', description: 'Campfire, wilderness, adventure', image: '/styles/20250207-larry-camping-v2.png' },
    { name: 'Royal', emoji: '👑', description: 'King, crown, throne, palace', image: '/styles/20260207-larry-king-v2.png' },
    { name: 'Astronaut', emoji: '🚀', description: 'Space suit, stars, planets', image: '/styles/astronaut.png' },
    { name: 'Detective', emoji: '🕵️', description: 'Noir style, mystery, investigation', image: '/styles/20250207-larry-detective-v2.png' },
    { name: 'Graduation', emoji: '🎓', description: 'Cap and gown, celebration', image: '/styles/20250207-larry-graduation-v2.png' },
    { name: 'Spa Day', emoji: '💆', description: 'Relaxation, pampering, luxury', image: '/styles/20260207-larry-spa-day-v2.png' },
    { name: 'Shake Off', emoji: '💦', description: 'Action shot, water, dynamic', image: '/styles/20260207-larry-shake-off-v2.png' }
  ]

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white to-pink-50" id="styles">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
          10 Unique Styles
        </h2>
        <p className="text-xl text-gray-600 text-center mb-16 max-w-2xl mx-auto">
          Choose the perfect look for your pet. From superheroes to cozy vibes.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {styles.map((style, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all overflow-hidden group">
              <div className="aspect-square bg-gradient-to-br from-pink-100 to-purple-100 flex items-center justify-center relative overflow-hidden">
                {style.image ? (
                  <img 
                    src={style.image} 
                    alt={`${style.name} style example`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center text-gray-400">
                    <span className="text-5xl mb-2">{style.emoji}</span>
                    <span className="text-xs text-gray-400">Coming soon</span>
                  </div>
                )}
              </div>
              
              <div className="p-4 text-center">
                <h3 className="font-bold text-gray-900 mb-1">{style.name}</h3>
                <p className="text-xs text-gray-500">{style.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
