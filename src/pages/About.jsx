import Logo from '../components/Logo'

function About() {
  const tutors = [
    {
      id: 1,
      name: 'Bishnu Prasad',
      role: 'Lead Instructor - Full Stack',
      expertise: 'React, Node.js, GenAI',
      experience: '5+ years',
      image: '👨‍💻',
      bio: 'Expert in full-stack development with extensive experience in building AI-powered applications.'
    },
    {
      id: 2,
      name: 'Anil Reddy',
      role: 'Senior Instructor - Frontend',
      expertise: 'React, JavaScript, UI/UX',
      experience: '6+ years',
      image: '👨‍💻',
      bio: 'Passionate about creating beautiful and functional user interfaces with modern frameworks.'
    },
    {
      id: 3,
      name: 'Anewsita Patro',
      role: 'Backend Specialist',
      expertise: '.NET, C#, Azure',
      experience: '10+ years',
      image: '👨‍🏫',
      bio: 'Enterprise software architect specializing in .NET and cloud technologies.'
    },
    {
      id: 4,
      name: 'Bishnu Prasad',
      role: 'Database Expert',
      expertise: 'MySQL, PostgreSQL, MongoDB',
      experience: '5+ years',
      image: '👨‍💻',
      bio: 'Database optimization specialist with deep knowledge of relational and NoSQL databases.'
    },
    {
      id: 5,
      name: 'Bishnu Prasad',
      role: 'AI/ML Instructor',
      expertise: 'GenAI, Python, ML',
      experience: '5+ years',
      image: '👨‍💻',
      bio: 'AI researcher and practitioner focused on integrating GenAI into real-world applications.'
    }
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* About Header */}
      <div className="text-center mb-16">
        <div className="flex justify-center mb-6">
          <Logo className="w-20 h-20" />
        </div>
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          About <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Future Tech</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          We are dedicated to training the next generation of developers with cutting-edge skills in modern web development and GenAI integration.
        </p>
      </div>

      {/* Mission & Vision */}
      <div className="grid md:grid-cols-2 gap-8 mb-16">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="text-4xl mb-4">🎯</div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
          <p className="text-gray-600 leading-relaxed">
            To empower students and professionals with practical, industry-relevant skills in modern web development and artificial intelligence. We bridge the gap between academic learning and real-world application through hands-on training and mentorship.
          </p>
        </div>
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="text-4xl mb-4">🚀</div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h2>
          <p className="text-gray-600 leading-relaxed">
            To become the leading platform for technology education in India, creating a community of skilled developers who are ready to tackle the challenges of tomorrow with innovative solutions powered by AI and modern technologies.
          </p>
        </div>
      </div>

      {/* Stats */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 mb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
          <div>
            <div className="text-5xl font-bold mb-2">500+</div>
            <div className="text-lg opacity-90">Students Trained</div>
          </div>
          <div>
            <div className="text-5xl font-bold mb-2">5</div>
            <div className="text-lg opacity-90">Expert Tutors</div>
          </div>
          <div>
            <div className="text-5xl font-bold mb-2">6</div>
            <div className="text-lg opacity-90">Courses</div>
          </div>
          <div>
            <div className="text-5xl font-bold mb-2">95%</div>
            <div className="text-lg opacity-90">Success Rate</div>
          </div>
        </div>
      </div>

      {/* Our Tutors */}
      <div className="mb-16">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">Meet Our Expert Tutors</h2>
        <p className="text-center text-gray-600 mb-12 text-lg">
          Learn from industry professionals with years of real-world experience
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tutors.map((tutor) => (
            <div key={tutor.id} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition">
              <div className="bg-gradient-to-br from-blue-100 to-purple-100 p-8 text-center">
                <div className="text-7xl mb-4">{tutor.image}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">{tutor.name}</h3>
                <p className="text-blue-600 font-semibold mb-2">{tutor.role}</p>
                <div className="inline-block bg-white px-4 py-1 rounded-full text-sm text-gray-700">
                  {tutor.experience}
                </div>
              </div>
              <div className="p-6">
                <div className="mb-4">
                  <div className="text-sm text-gray-500 mb-2">Expertise</div>
                  <div className="flex flex-wrap gap-2">
                    {tutor.expertise.split(', ').map((skill, index) => (
                      <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 text-sm">{tutor.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="bg-white rounded-2xl shadow-xl p-12 mb-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Why Choose Us?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Industry-Relevant Curriculum</h3>
            <p className="text-gray-600">Learn skills that employers are actively seeking</p>
          </div>
          <div className="text-center">
            <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Expert Mentorship</h3>
            <p className="text-gray-600">Get personalized guidance from experienced professionals</p>
          </div>
          <div className="text-center">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Hands-on Projects</h3>
            <p className="text-gray-600">Build real-world applications for your portfolio</p>
          </div>
          <div className="text-center">
            <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">GenAI Integration</h3>
            <p className="text-gray-600">Stay ahead with cutting-edge AI technology</p>
          </div>
          <div className="text-center">
            <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Certification</h3>
            <p className="text-gray-600">Receive recognized certificates upon completion</p>
          </div>
          <div className="text-center">
            <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Career Support</h3>
            <p className="text-gray-600">Job placement assistance and interview prep</p>
          </div>
        </div>
      </div>

      {/* Contact CTA */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-center text-white">
        <h3 className="text-3xl font-bold mb-4">Have Questions?</h3>
        <p className="text-xl mb-6 opacity-90">
          Get in touch with us to learn more about our programs
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="mailto:bishnugantayat141@gmail.com" className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition">
            📧 Email Us
          </a>
          <a href="tel:+919777927507" className="inline-block bg-white bg-opacity-20 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-opacity-30 transition border-2 border-white">
            📱 Call Us
          </a>
        </div>
      </div>
    </div>
  )
}

export default About
