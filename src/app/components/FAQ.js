export default function FAQ() {
  const faqs = [
    {
      question: 'How long does it take?',
      answer: 'Most images are generated in 60 seconds or less. You\'ll receive an email when your artwork is ready.'
    },
    {
      question: 'What photos work best?',
      answer: 'High-quality photos with good lighting work best. Your pet should be clearly visible and facing the camera. Avoid blurry or dark photos.'
    },
    {
      question: 'Can I use the images commercially?',
      answer: 'The Pro Pack includes commercial license. Starter Pack is for personal use only.'
    },
    {
      question: 'What if I don\'t like the results?',
      answer: 'We offer a 100% satisfaction guarantee. If you\'re not happy with your images, contact us for a full refund.'
    },
    {
      question: 'How do I download my images?',
      answer: 'After purchase, you\'ll receive an email with a download link. Images are high-resolution (2048x2048) and ready to print.'
    },
    {
      question: 'Will you add more styles?',
      answer: 'Yes! Pro Pack customers get all new styles for free. We\'re constantly adding new looks based on customer feedback.'
    }
  ]

  return (
    <section className="py-20 px-4 bg-white" id="faq">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
          Frequently Asked Questions
        </h2>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-xl">
              <h3 className="font-bold text-lg text-gray-900 mb-2">{faq.question}</h3>
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
