import Header from './components/Header';
import Footer from './components/Footer';
import CTAStrip from './components/CTAStrip';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <CTAStrip />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-blue-50/50 py-24 lg:py-36 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="mb-8 animate-fade-in">
              <span className="inline-block bg-gradient-to-r from-[#1e3a5f]/10 to-[#2d4f7a]/10 backdrop-blur-sm text-[#1e3a5f] px-6 py-3 rounded-full text-sm font-semibold border border-[#1e3a5f]/20">
                ✓ Approved by Lagos State Ministry of Education (Since 2022)
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#1e3a5f] mb-8 leading-tight tracking-tight">
              <span className="bg-gradient-to-r from-[#1e3a5f] to-[#2d4f7a] bg-clip-text text-transparent">
                EASY SCHOOL
              </span>
              <br />
              <span className="text-[#1e3a5f]">OF LANGUAGES</span>
            </h1>
            <div className="bg-gradient-to-r from-[#1e3a5f] to-[#2d4f7a] text-white py-5 px-10 inline-block rounded-2xl mb-8 transform hover:scale-105 transition-all duration-500">
              <h2 className="text-3xl md:text-4xl font-bold">JOIN US</h2>
            </div>
            <p className="text-2xl md:text-3xl font-bold text-[#1e3a5f] mb-10 tracking-wide">
              SPEAK, READ AND WRITE EASILY
            </p>
            <div className="flex justify-center items-center gap-6 mb-10 flex-wrap">
              <div className="text-5xl md:text-6xl transform hover:scale-110 transition-transform duration-300 cursor-default">🇬🇧</div>
              <div className="text-5xl md:text-6xl transform hover:scale-110 transition-transform duration-300 cursor-default">🇫🇷</div>
              <div className="text-5xl md:text-6xl transform hover:scale-110 transition-transform duration-300 cursor-default">🇪🇸</div>
              <div className="text-5xl md:text-6xl transform hover:scale-110 transition-transform duration-300 cursor-default">🇩🇪</div>
            </div>
            <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto font-medium">
              Professional Language & Tech Training
            </p>
          </div>
        </div>
      </section>
      {/* Services Section */}
      <section id="services" className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1e3a5f] mb-6">
              <span className="bg-gradient-to-r from-[#1e3a5f] to-[#2d4f7a] bg-clip-text text-transparent">
                Our Offers
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive language and tech training programs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Foreign Language Training */}
            <div className="group bg-gradient-to-br from-blue-50/80 via-white to-blue-50/50 p-8 rounded-2xl border border-blue-100/60 hover:border-[#1e3a5f]/30 transition-all duration-500 hover:scale-105 hover:bg-gradient-to-br hover:from-blue-50 hover:via-white hover:to-blue-50/80 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-[#1e3a5f]/0 via-[#1e3a5f]/5 to-[#1e3a5f]/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
              <div className="text-5xl mb-5 transform group-hover:scale-110 transition-transform duration-500">🌍</div>
              <h3 className="text-2xl font-bold text-[#1e3a5f] mb-5 relative z-10">Foreign Language Training</h3>
              <ul className="space-y-3 text-gray-700 relative z-10">
                <li className="flex items-center font-medium">
                  <span className="mr-3 text-green-600 font-bold">✓</span> English
                </li>
                <li className="flex items-center font-medium">
                  <span className="mr-3 text-green-600 font-bold">✓</span> French
                </li>
                <li className="flex items-center font-medium">
                  <span className="mr-3 text-green-600 font-bold">✓</span> German
                </li>
                <li className="flex items-center font-medium">
                  <span className="mr-3 text-green-600 font-bold">✓</span> Spanish
                </li>
              </ul>
            </div>

            {/* International Exam Preparation */}
            <div className="group bg-gradient-to-br from-blue-50/80 via-white to-blue-50/50 p-8 rounded-2xl border border-blue-100/60 hover:border-[#1e3a5f]/30 transition-all duration-500 hover:scale-105 hover:bg-gradient-to-br hover:from-blue-50 hover:via-white hover:to-blue-50/80 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-[#1e3a5f]/0 via-[#1e3a5f]/5 to-[#1e3a5f]/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
              <div className="text-5xl mb-5 transform group-hover:scale-110 transition-transform duration-500">📚</div>
              <h3 className="text-2xl font-bold text-[#1e3a5f] mb-5 relative z-10">International Exam Preparation</h3>
              <ul className="space-y-3 text-gray-700 relative z-10">
                <li className="flex items-center font-medium">
                  <span className="mr-3 text-green-600 font-bold">✓</span> IELTS
                </li>
                <li className="flex items-center font-medium">
                  <span className="mr-3 text-green-600 font-bold">✓</span> TEF
                </li>
                <li className="flex items-center font-medium">
                  <span className="mr-3 text-green-600 font-bold">✓</span> TCF
                </li>
                <li className="flex items-center font-medium">
                  <span className="mr-3 text-green-600 font-bold">✓</span> DELF / DALF
                </li>
                <li className="flex items-center font-medium">
                  <span className="mr-3 text-green-600 font-bold">✓</span> Goethe
                </li>
                <li className="flex items-center font-medium">
                  <span className="mr-3 text-green-600 font-bold">✓</span> TELC
                </li>
              </ul>
            </div>

            {/* Canada French Preparation */}
            <div className="group bg-gradient-to-br from-blue-50/80 via-white to-blue-50/50 p-8 rounded-2xl border border-blue-100/60 hover:border-[#1e3a5f]/30 transition-all duration-500 hover:scale-105 hover:bg-gradient-to-br hover:from-blue-50 hover:via-white hover:to-blue-50/80 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-[#1e3a5f]/0 via-[#1e3a5f]/5 to-[#1e3a5f]/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
              <div className="text-5xl mb-5 transform group-hover:scale-110 transition-transform duration-500">🍁</div>
              <h3 className="text-2xl font-bold text-[#1e3a5f] mb-5 relative z-10">Canada French (TEF) Preparation</h3>
              <p className="text-gray-700 leading-relaxed relative z-10 font-medium">
                Specialized training for TEF exam required for Canadian immigration and citizenship applications.
              </p>
            </div>

            {/* JAMB & WAEC Lessons */}
            <div className="group bg-gradient-to-br from-blue-50/80 via-white to-blue-50/50 p-8 rounded-2xl border border-blue-100/60 hover:border-[#1e3a5f]/30 transition-all duration-500 hover:scale-105 hover:bg-gradient-to-br hover:from-blue-50 hover:via-white hover:to-blue-50/80 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-[#1e3a5f]/0 via-[#1e3a5f]/5 to-[#1e3a5f]/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
              <div className="text-5xl mb-5 transform group-hover:scale-110 transition-transform duration-500">🎓</div>
              <h3 className="text-2xl font-bold text-[#1e3a5f] mb-5 relative z-10">JAMB & WAEC Lessons</h3>
              <ul className="space-y-3 text-gray-700 relative z-10">
                <li className="flex items-center font-medium">
                  <span className="mr-3 text-green-600 font-bold">✓</span> JAMB Preparation
                </li>
                <li className="flex items-center font-medium">
                  <span className="mr-3 text-green-600 font-bold">✓</span> WAEC Preparation
                </li>
              </ul>
            </div>

            {/* Tech Courses */}
            <div className="group bg-gradient-to-br from-blue-50/80 via-white to-blue-50/50 p-8 rounded-2xl border border-blue-100/60 hover:border-[#1e3a5f]/30 transition-all duration-500 hover:scale-105 hover:bg-gradient-to-br hover:from-blue-50 hover:via-white hover:to-blue-50/80 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-[#1e3a5f]/0 via-[#1e3a5f]/5 to-[#1e3a5f]/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
              <div className="text-5xl mb-5 transform group-hover:scale-110 transition-transform duration-500">💻</div>
              <h3 className="text-2xl font-bold text-[#1e3a5f] mb-5 relative z-10">Tech Courses</h3>
              <ul className="space-y-3 text-gray-700 relative z-10">
                <li className="flex items-center font-medium">
                  <span className="mr-3 text-green-600 font-bold">✓</span> Cybersecurity
                </li>
                <li className="flex items-center font-medium">
                  <span className="mr-3 text-green-600 font-bold">✓</span> AI (Artificial Intelligence)
                </li>
                <li className="flex items-center font-medium">
                  <span className="mr-3 text-green-600 font-bold">✓</span> Machine Learning
                </li>
              </ul>
            </div>

            {/* Learning Options */}
            <div className="group bg-gradient-to-br from-blue-50/80 via-white to-blue-50/50 p-8 rounded-2xl border border-blue-100/60 hover:border-[#1e3a5f]/30 transition-all duration-500 hover:scale-105 hover:bg-gradient-to-br hover:from-blue-50 hover:via-white hover:to-blue-50/80 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-[#1e3a5f]/0 via-[#1e3a5f]/5 to-[#1e3a5f]/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
              <div className="text-5xl mb-5 transform group-hover:scale-110 transition-transform duration-500">📱</div>
              <h3 className="text-2xl font-bold text-[#1e3a5f] mb-5 relative z-10">Online & Offline Classes</h3>
              <p className="text-gray-700 mb-4 leading-relaxed relative z-10 font-medium">
                Flexible learning options to suit your schedule and preferences.
              </p>
              <ul className="space-y-3 text-gray-700 relative z-10">
                <li className="flex items-center font-medium">
                  <span className="mr-3 text-green-600 font-bold">✓</span> Online Classes
                </li>
                <li className="flex items-center font-medium">
                  <span className="mr-3 text-green-600 font-bold">✓</span> Offline Classes
                </li>
              </ul>
            </div>
          </div>

          {/* Additional Features */}
          <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="group text-center p-8 bg-gradient-to-br from-blue-50 to-white rounded-2xl border border-blue-100/60 hover:border-[#1e3a5f]/30 transition-all duration-500 hover:scale-105">
              <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-500">🏆</div>
              <h4 className="font-bold text-[#1e3a5f] text-lg">Internationally Accepted Certificates</h4>
            </div>
            <div className="group text-center p-8 bg-gradient-to-br from-blue-50 to-white rounded-2xl border border-blue-100/60 hover:border-[#1e3a5f]/30 transition-all duration-500 hover:scale-105">
              <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-500">💼</div>
              <h4 className="font-bold text-[#1e3a5f] text-lg">Job & Career Opportunities Support</h4>
            </div>
            <div className="group text-center p-8 bg-gradient-to-br from-blue-50 to-white rounded-2xl border border-blue-100/60 hover:border-[#1e3a5f]/30 transition-all duration-500 hover:scale-105">
              <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-500">👨‍🏫</div>
              <h4 className="font-bold text-[#1e3a5f] text-lg">Professional & Experienced Instructors</h4>
            </div>
            <div className="group text-center p-8 bg-gradient-to-br from-blue-50 to-white rounded-2xl border border-blue-100/60 hover:border-[#1e3a5f]/30 transition-all duration-500 hover:scale-105">
              <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-500">⏰</div>
              <h4 className="font-bold text-[#1e3a5f] text-lg">Flexible Learning Options</h4>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-gradient-to-br from-blue-50 via-white to-blue-50/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1e3a5f] mb-6">
              <span className="bg-gradient-to-r from-[#1e3a5f] to-[#2d4f7a] bg-clip-text text-transparent">
                About Us
              </span>
            </h2>
          </div>
          <div className="max-w-5xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm p-10 md:p-12 rounded-3xl border border-blue-100/60">
              <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed font-medium">
                Easy School of Languages is a recognized educational institution approved by the Lagos State Ministry of Education since 2022. We are committed to providing excellence in language and technology education.
              </p>
              <p className="text-lg md:text-xl text-gray-700 mb-10 leading-relaxed font-medium">
                Our mission is to help students speak, read, and write easily in multiple languages while also providing cutting-edge technology training. With over 22 years of experience, we have helped thousands of students achieve their academic and career goals.
              </p>
              <div className="flex items-center justify-center gap-6 flex-wrap">
                <div className="bg-gradient-to-br from-[#1e3a5f] to-[#2d4f7a] text-white px-8 py-6 rounded-2xl transform hover:scale-105 transition-all duration-500 border border-[#1e3a5f]/20">
                  <div className="text-3xl md:text-4xl font-bold mb-1">22+</div>
                  <div className="text-sm md:text-base font-semibold opacity-90">Years of Excellence</div>
                </div>
                <div className="bg-gradient-to-br from-[#1e3a5f] to-[#2d4f7a] text-white px-8 py-6 rounded-2xl transform hover:scale-105 transition-all duration-500 border border-[#1e3a5f]/20">
                  <div className="text-3xl md:text-4xl font-bold mb-1">1000+</div>
                  <div className="text-sm md:text-base font-semibold opacity-90">Students Trained</div>
                </div>
                <div className="bg-gradient-to-br from-[#1e3a5f] to-[#2d4f7a] text-white px-8 py-6 rounded-2xl transform hover:scale-105 transition-all duration-500 border border-[#1e3a5f]/20">
                  <div className="text-3xl md:text-4xl font-bold mb-1">4</div>
                  <div className="text-sm md:text-base font-semibold opacity-90">Languages</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gradient-to-br from-[#1e3a5f] via-[#2d4f7a] to-[#1e3a5f] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Contact Us</h2>
            <p className="text-xl md:text-2xl text-blue-100/90 font-medium">Get in touch with us today</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Head Office */}
            <div className="group bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 hover:border-white/40 hover:bg-white/15 transition-all duration-500 hover:scale-105">
              <h3 className="text-2xl font-bold mb-5">Head Office</h3>
              <p className="text-blue-100/90 mb-6 leading-relaxed font-medium">
                20 Ikorodu Road<br />
                Jibowu Bus-Stop<br />
                Yaba, Lagos
              </p>
              <a href="tel:+2348038374575" className="text-white hover:text-blue-200 font-semibold flex items-center group-hover:translate-x-2 transition-transform duration-300">
                <span className="mr-3 text-xl">📞</span> +234 803 837 4575
              </a>
            </div>

            {/* Branch Office */}
            <div className="group bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 hover:border-white/40 hover:bg-white/15 transition-all duration-500 hover:scale-105">
              <h3 className="text-2xl font-bold mb-5">Branch Office</h3>
              <p className="text-blue-100/90 mb-6 leading-relaxed font-medium">
                10 Udo Udoma<br />
                Asokoro<br />
                Abuja
              </p>
              <a href="tel:+2348177320689" className="text-white hover:text-blue-200 font-semibold flex items-center group-hover:translate-x-2 transition-transform duration-300">
                <span className="mr-3 text-xl">📞</span> +234 817 732 0689
              </a>
            </div>

            {/* UK Office */}
            <div className="group bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 hover:border-white/40 hover:bg-white/15 transition-all duration-500 hover:scale-105">
              <h3 className="text-2xl font-bold mb-5">UK Office</h3>
              <p className="text-blue-100/90 mb-6 leading-relaxed font-medium">
                Easy School of Languages<br />
                (UK) Ltd.
              </p>
              <a href="tel:+447442486635" className="text-white hover:text-blue-200 font-semibold flex items-center group-hover:translate-x-2 transition-transform duration-300">
                <span className="mr-3 text-xl">📞</span> +44 744 248 6635
              </a>
            </div>
          </div>

          <div className="mt-16 text-center">
            <a 
              href="tel:+2348038374575" 
              className="inline-block bg-white text-[#1e3a5f] px-10 py-5 rounded-2xl font-bold text-lg md:text-xl hover:bg-blue-50 transition-all duration-500 transform hover:scale-105 active:scale-95 border border-white/20"
            >
              📞 Call Us Now: +234 803 837 4575
            </a>
            <p className="mt-8 text-blue-100/90 text-lg">
              Website: <a href="https://www.easyschooloflanguagesnigeria.com" className="underline hover:text-white font-semibold transition-colors duration-300" target="_blank" rel="noopener noreferrer">
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
