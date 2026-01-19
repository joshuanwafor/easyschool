export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#152a47] text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Easy School of Languages</h3>
            <p className="text-blue-200 mb-4">
              Professional Language & Tech Training
            </p>
            <p className="text-sm text-blue-300">
              Recognized by Lagos State Ministry of Education (Since 1992)
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="#services" 
                  className="text-blue-200 hover:text-white transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a 
                  href="#about" 
                  className="text-blue-200 hover:text-white transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  className="text-blue-200 hover:text-white transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <div className="space-y-2 text-blue-200">
              <p>
                <a 
                  href="tel:+2348038374575" 
                  className="hover:text-white transition-colors"
                >
                  📞 +234 803 837 4575
                </a>
              </p>
              <p>
                <a 
                  href="https://www.easyschooloflanguagesnigeria.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors underline"
                >
                  www.easyschooloflanguagesnigeria.com
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-blue-800 pt-8">
          <div className="text-center">
            <p className="text-sm text-blue-300">
              © {currentYear} Easy School of Languages. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

