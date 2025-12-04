export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 mt-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <img 
                src="https://cdn.cosmicjs.com/b67de7d0-c810-11ed-b01d-23d7b265c299-logo508x500.svg"
                alt="Cosmic Logo"
                className="w-8 h-8"
                width={32}
                height={32}
              />
              <span className="text-xl font-bold">Cosmic Projects</span>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              Discover and explore the latest websites built with Cosmic CMS. 
              Get inspired by real-world projects and start building your own.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://www.cosmicjs.com/docs" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  Documentation
                </a>
              </li>
              <li>
                <a href="https://www.cosmicjs.com/blog" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="https://www.cosmicjs.com/community" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  Community
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://www.cosmicjs.com/about" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="https://www.cosmicjs.com/pricing" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="https://www.cosmicjs.com/contact" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Cosmic. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}