export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-xl mb-4">PetPix Pro</h3>
            <p className="text-gray-400">
              Transform your pet photos into stunning AI-generated artwork.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Product</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#styles" className="hover:text-white">Styles</a></li>
              <li><a href="#pricing" className="hover:text-white">Pricing</a></li>
              <li><a href="#faq" className="hover:text-white">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Connect</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="https://tiktok.com/@petlarry" className="hover:text-white">TikTok @petlarry</a></li>
              <li><a href="https://instagram.com/larrydavidsworld" className="hover:text-white">Instagram</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Support</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="mailto:hello@petpixpro.com" className="hover:text-white">Contact Us</a></li>
              <li>Refund Policy</li>
              <li>Terms of Service</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>© 2026 PetPix Pro. All rights reserved.</p>
          <p className="text-sm mt-2">Made with ❤️ for pet lovers everywhere</p>
        </div>
      </div>
    </footer>
  )
}
