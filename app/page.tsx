import Header from './components/Header';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-white py-20 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-6">
              <span className="inline-block bg-blue-100 text-[#1e3a5f] px-4 py-2 rounded-full text-sm font-semibold">
                Approved by Lagos State Ministry of Education (Since 2022)
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#1e3a5f] mb-6">
              EASY SCHOOL OF LANGUAGES
            </h1>
            <div className="bg-[#1e3a5f] text-white py-4 px-8 inline-block rounded-lg mb-6">
              <h2 className="text-3xl md:text-4xl font-bold">JOIN US</h2>
            </div>
            <p className="text-2xl md:text-3xl font-semibold text-[#1e3a5f] mb-8">
              SPEAK, READ AND WRITE EASILY
            </p>
            <div className="flex justify-center items-center gap-4 mb-8 flex-wrap">
              <div className="text-4xl">🇬🇧</div>
              <div className="text-4xl">🇫🇷</div>
              <div className="text-4xl">🇪🇸</div>
              <div className="text-4xl">🇩🇪</div>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional Language & Tech Training
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1e3a5f] mb-4">Our Offers</h2>
            <p className="text-xl text-gray-600">Comprehensive language and tech training programs</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Foreign Language Training */}
            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-blue-100">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="text-2xl font-bold text-[#1e3a5f] mb-4">Foreign Language Training</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <span className="mr-2">✓</span> English
                </li>
                <li className="flex items-center">
                  <span className="mr-2">✓</span> French
                </li>
                <li className="flex items-center">
                  <span className="mr-2">✓</span> German
                </li>
                <li className="flex items-center">
                  <span className="mr-2">✓</span> Spanish
                </li>
              </ul>
            </div>

            {/* International Exam Preparation */}
            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-blue-100">
              <div className="text-4xl mb-4">📚</div>
              <h3 className="text-2xl font-bold text-[#1e3a5f] mb-4">International Exam Preparation</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <span className="mr-2">✓</span> IELTS
                </li>
                <li className="flex items-center">
                  <span className="mr-2">✓</span> TEF
                </li>
                <li className="flex items-center">
                  <span className="mr-2">✓</span> TCF
                </li>
                <li className="flex items-center">
                  <span className="mr-2">✓</span> DELF / DALF
                </li>
                <li className="flex items-center">
                  <span className="mr-2">✓</span> Goethe
                </li>
                <li className="flex items-center">
                  <span className="mr-2">✓</span> TELC
                </li>
              </ul>
            </div>

            {/* Canada French Preparation */}
            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-blue-100">
              <div className="text-4xl mb-4">🍁</div>
              <h3 className="text-2xl font-bold text-[#1e3a5f] mb-4">Canada French (TEF) Preparation</h3>
              <p className="text-gray-700">
                Specialized training for TEF exam required for Canadian immigration and citizenship applications.
              </p>
            </div>

            {/* JAMB & WAEC Lessons */}
            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-blue-100">
              <div className="text-4xl mb-4">🎓</div>
              <h3 className="text-2xl font-bold text-[#1e3a5f] mb-4">JAMB & WAEC Lessons</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <span className="mr-2">✓</span> JAMB Preparation
                </li>
                <li className="flex items-center">
                  <span className="mr-2">✓</span> WAEC Preparation
                </li>
              </ul>
            </div>

            {/* Tech Courses */}
            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-blue-100">
              <div className="text-4xl mb-4">💻</div>
              <h3 className="text-2xl font-bold text-[#1e3a5f] mb-4">Tech Courses</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <span className="mr-2">✓</span> Cybersecurity
                </li>
                <li className="flex items-center">
                  <span className="mr-2">✓</span> AI (Artificial Intelligence)
                </li>
                <li className="flex items-center">
                  <span className="mr-2">✓</span> Machine Learning
                </li>
              </ul>
            </div>

            {/* Learning Options */}
            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-blue-100">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-2xl font-bold text-[#1e3a5f] mb-4">Online & Offline Classes</h3>
              <p className="text-gray-700 mb-4">
                Flexible learning options to suit your schedule and preferences.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <span className="mr-2">✓</span> Online Classes
                </li>
                <li className="flex items-center">
                  <span className="mr-2">✓</span> Offline Classes
                </li>
              </ul>
            </div>
          </div>

          {/* Additional Features */}
          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-blue-50 rounded-lg">
              <div className="text-3xl mb-3">🏆</div>
              <h4 className="font-semibold text-[#1e3a5f] mb-2">Internationally Accepted Certificates</h4>
            </div>
            <div className="text-center p-6 bg-blue-50 rounded-lg">
              <div className="text-3xl mb-3">💼</div>
              <h4 className="font-semibold text-[#1e3a5f] mb-2">Job & Career Opportunities Support</h4>
            </div>
            <div className="text-center p-6 bg-blue-50 rounded-lg">
              <div className="text-3xl mb-3">👨‍🏫</div>
              <h4 className="font-semibold text-[#1e3a5f] mb-2">Professional & Experienced Instructors</h4>
            </div>
            <div className="text-center p-6 bg-blue-50 rounded-lg">
              <div className="text-3xl mb-3">⏰</div>
              <h4 className="font-semibold text-[#1e3a5f] mb-2">Flexible Learning Options</h4>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1e3a5f] mb-4">About Us</h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Easy School of Languages is a recognized educational institution approved by the Lagos State Ministry of Education since 2022. We are committed to providing excellence in language and technology education.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Our mission is to help students speak, read, and write easily in multiple languages while also providing cutting-edge technology training. With over 22 years of experience, we have helped thousands of students achieve their academic and career goals.
              </p>
              <div className="flex items-center justify-center gap-4 flex-wrap">
                <div className="bg-[#1e3a5f] text-white px-6 py-3 rounded-lg">
                  <div className="text-2xl font-bold">22+</div>
                  <div className="text-sm">Years of Excellence</div>
                </div>
                <div className="bg-[#1e3a5f] text-white px-6 py-3 rounded-lg">
                  <div className="text-2xl font-bold">1000+</div>
                  <div className="text-sm">Students Trained</div>
                </div>
                <div className="bg-[#1e3a5f] text-white px-6 py-3 rounded-lg">
                  <div className="text-2xl font-bold">4</div>
                  <div className="text-sm">Languages</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-[#1e3a5f] text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h2>
            <p className="text-xl text-blue-100">Get in touch with us today</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Head Office */}
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <h3 className="text-2xl font-bold mb-4">Head Office</h3>
              <p className="text-blue-100 mb-4">
                20 Ikorodu Road<br />
                Jibowu Bus-Stop<br />
                Yaba, Lagos
              </p>
              <a href="tel:+2348038374575" className="text-white hover:text-blue-200 font-semibold flex items-center">
                <span className="mr-2">📞</span> +234 803 837 4575
              </a>
            </div>

            {/* Branch Office */}
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <h3 className="text-2xl font-bold mb-4">Branch Office</h3>
              <p className="text-blue-100 mb-4">
                10 Udo Udoma<br />
                Asokoro<br />
                Abuja
              </p>
              <a href="tel:+2348177320689" className="text-white hover:text-blue-200 font-semibold flex items-center">
                <span className="mr-2">📞</span> +234 817 732 0689
              </a>
            </div>

            {/* UK Office */}
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <h3 className="text-2xl font-bold mb-4">UK Office</h3>
              <p className="text-blue-100 mb-4">
                Easy School of Languages<br />
                (UK) Ltd.
              </p>
              <a href="tel:+447442486635" className="text-white hover:text-blue-200 font-semibold flex items-center">
                <span className="mr-2">📞</span> +44 744 248 6635
              </a>
            </div>
          </div>

          <div className="mt-12 text-center">
            <a 
              href="tel:+2348038374575" 
              className="inline-block bg-white text-[#1e3a5f] px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-colors"
            >
              📞 Call Us Now: +234 803 837 4575
            </a>
            <p className="mt-6 text-blue-100">
              Website: <a href="https://www.easyschooloflanguagesnigeria.com" className="underline hover:text-white" target="_blank" rel="noopener noreferrer">
                www.easyschooloflanguagesnigeria.com
              </a>
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
