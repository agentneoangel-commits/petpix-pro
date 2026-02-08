export default function Pricing() {
  const plans = [
    {
      name: 'Free Preview',
      price: '$0',
      description: 'Try before you buy',
      features: [
        '1 watermarked preview',
        '720p resolution',
        '1 style only',
        '30-second delivery'
      ],
      cta: 'Try Free',
      popular: false
    },
    {
      name: 'Starter Pack',
      price: '$4.99',
      description: 'Perfect for trying it out',
      features: [
        '10 high-res images',
        'All 10 styles',
        '1080p, no watermark',
        '30-second delivery',
        'Download instantly'
      ],
      cta: 'Get Started',
      popular: true
    },
    {
      name: 'Popular Pack',
      price: '$9.99',
      description: 'Best value for pet lovers',
      features: [
        '25 high-res images',
        'All 10 styles',
        'New styles (free updates)',
        '4K resolution',
        'Commercial license'
      ],
      cta: 'Go Pro',
      popular: false
    }
  ]

  return (
    <section className="py-20 px-4 bg-white" id="pricing">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
          Simple Pricing
        </h2>
        <p className="text-xl text-gray-600 text-center mb-16 max-w-2xl mx-auto">
          Choose the plan that works for you. No subscriptions, no hidden fees.
        </p>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div key={index} className={`relative p-8 rounded-2xl ${plan.popular ? 'bg-primary text-white shadow-xl scale-105' : 'bg-gray-50 text-gray-900'}`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-accent text-gray-900 px-4 py-1 rounded-full text-sm font-bold">
                  Most Popular
                </div>
              )}
              
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <div className="text-5xl font-bold mb-2">{plan.price}</div>
              <p className={`mb-6 ${plan.popular ? 'text-white/80' : 'text-gray-600'}`}>{plan.description}</p>
              
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <svg className={`w-5 h-5 ${plan.popular ? 'text-white' : 'text-primary'}`} fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <a
                href="#upload"
                className={`block text-center py-4 rounded-full font-bold transition-colors ${
                  plan.popular
                    ? 'bg-white text-primary hover:bg-gray-100'
                    : 'bg-primary text-white hover:bg-red-500'
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
