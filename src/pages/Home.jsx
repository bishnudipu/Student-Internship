import { Link } from 'react-router-dom'
import { coursesData } from '../data/coursesData'
import Logo from '../components/Logo'

function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <div className="flex justify-center mb-6">
            <Logo className="w-24 h-24" />
          </div>
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Master Modern Development with
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              GenAI Integration
            </span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Learn cutting-edge technologies from experienced tutors. Specialize in React, Node.js, .NET, MySQL, and integrate GenAI into your projects.
          </p>
          <div className="flex justify-center gap-4">
            <Link to="/register" className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition shadow-lg">
              Get Started
            </Link>
            <Link to="/about" className="bg-white text-blue-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-50 transition border-2 border-blue-600">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-600">Students Trained</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">6</div>
              <div className="text-gray-600">Courses Available</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">5</div>
              <div className="text-gray-600">Expert Tutors</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-600 mb-2">95%</div>
              <div className="text-gray-600">Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h3 className="text-4xl font-bold text-center text-gray-900 mb-12">
          Available Courses
        </h3>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coursesData.map((course) => (
            <div
              key={course.id}
              className={`bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2 ${
                course.featured ? 'ring-2 ring-purple-500' : ''
              }`}
            >
              {course.featured && (
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white text-center py-2 text-sm font-semibold">
                  ⭐ FEATURED COURSE
                </div>
              )}
              <div className="p-6">
                <div className="text-5xl mb-4">{course.icon}</div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">
                  {course.title}
                </h4>
                <p className="text-gray-600 mb-4">
                  {course.description}
                </p>
                <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
                  <span className="flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" />
                    </svg>
                    {course.duration}
                  </span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-semibold">
                    {course.level}
                  </span>
                </div>
                <div className="text-2xl font-bold text-blue-600 mb-4">{course.price}</div>
                <Link 
                  to={`/course/${course.id}`}
                  className="block w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition font-semibold text-center"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-center text-white">
          <h3 className="text-4xl font-bold mb-4">Ready to Start Your Journey?</h3>
          <p className="text-xl mb-8 opacity-90">
            Join our internship program and transform your career with modern development skills
          </p>
          <Link to="/register" className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition shadow-lg">
            Register Now
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Home
