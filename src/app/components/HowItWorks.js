export default function HowItWorks() {
  const steps = [
    {
      number: '1',
      title: 'Upload Photo',
      description: 'Upload your pet\'s favorite photo. High-quality images work best!',
      icon: '📸'
    },
    {
      number: '2',
      title: 'Pick a Style',
      description: 'Choose from 10 unique styles: superhero, Renaissance, astronaut, and more.',
      icon: '🎨'
    },
    {
      number: '3',
      title: 'Download Art',
      description: 'Get your high-resolution artwork in 60 seconds. Print, share, or frame!',
      icon: '🖼️'
    }
  ]

  return (
    <section className="py-20 px-4 bg-white" id="how-it-works">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
          How It Works
        </h2>
        <p className="text-xl text-gray-600 text-center mb-16 max-w-2xl mx-auto">
          Three simple steps to transform your pet into a masterpiece
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center p-8 rounded-2xl bg-gray-50 hover:shadow-lg transition-shadow">
              <div className="text-6xl mb-6">{step.icon}</div>
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                {step.number}
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
