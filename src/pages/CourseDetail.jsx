import { useParams, Link } from 'react-router-dom'
import { coursesData } from '../data/coursesData'

function CourseDetail() {
  const { courseId } = useParams()
  const course = coursesData.find(c => c.id === courseId)

  if (!course) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Course Not Found</h2>
        <Link to="/" className="text-blue-600 hover:text-blue-700">
          Back to Home
        </Link>
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Course Header */}
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-8">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 text-white">
          <Link to="/" className="text-white hover:text-gray-200 mb-4 inline-block">
            ← Back to Courses
          </Link>
          <div className="flex items-start justify-between">
            <div>
              <div className="text-6xl mb-4">{course.icon}</div>
              <h1 className="text-4xl font-bold mb-4">{course.title}</h1>
              <p className="text-xl opacity-90 mb-6">{course.description}</p>
              <div className="flex flex-wrap gap-4">
                <div className="bg-white bg-opacity-20 px-4 py-2 rounded-lg">
                  <div className="text-sm opacity-80">Duration</div>
                  <div className="font-semibold">{course.duration}</div>
                </div>
                <div className="bg-white bg-opacity-20 px-4 py-2 rounded-lg">
                  <div className="text-sm opacity-80">Level</div>
                  <div className="font-semibold">{course.level}</div>
                </div>
                <div className="bg-white bg-opacity-20 px-4 py-2 rounded-lg">
                  <div className="text-sm opacity-80">Price</div>
                  <div className="font-semibold">{course.price}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="p-8">
          <div className="flex gap-4">
            <Link 
              to="/register"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Enroll Now
            </Link>
            <button className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition">
              Download Syllabus
            </button>
          </div>
        </div>
      </div>

      {/* Course Curriculum */}
      <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Course Curriculum</h2>
        <p className="text-gray-600 mb-8">
          Detailed week-by-week breakdown of what you'll learn in this course
        </p>
        
        <div className="space-y-4">
          {course.curriculum.map((item, index) => (
            <div 
              key={index}
              className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition"
            >
              <div className="flex items-start">
                <div className="bg-blue-100 text-blue-600 rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg mr-4 flex-shrink-0">
                  {item.week}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {item.topic}
                  </h3>
                  <p className="text-gray-600">
                    {item.details}
                  </p>
                </div>
                <div className="ml-4">
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                    Week {item.week}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* What You'll Learn */}
      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">What You'll Learn</h3>
          <ul className="space-y-3">
            <li className="flex items-start">
              <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-700">Build real-world projects from scratch</span>
            </li>
            <li className="flex items-start">
              <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-700">Master industry-standard tools and practices</span>
            </li>
            <li className="flex items-start">
              <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-700">Integrate cutting-edge GenAI capabilities</span>
            </li>
            <li className="flex items-start">
              <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-700">Get hands-on experience with live projects</span>
            </li>
            <li className="flex items-start">
              <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-700">Build a professional portfolio</span>
            </li>
          </ul>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Course Features</h3>
          <ul className="space-y-4">
            <li className="flex items-center">
              <div className="bg-blue-100 p-2 rounded-lg mr-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <div className="font-semibold text-gray-900">Live Classes</div>
                <div className="text-sm text-gray-600">Interactive sessions with tutors</div>
              </div>
            </li>
            <li className="flex items-center">
              <div className="bg-purple-100 p-2 rounded-lg mr-4">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <div>
                <div className="font-semibold text-gray-900">Study Materials</div>
                <div className="text-sm text-gray-600">Comprehensive resources</div>
              </div>
            </li>
            <li className="flex items-center">
              <div className="bg-green-100 p-2 rounded-lg mr-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <div className="font-semibold text-gray-900">Certification</div>
                <div className="text-sm text-gray-600">Upon course completion</div>
              </div>
            </li>
            <li className="flex items-center">
              <div className="bg-orange-100 p-2 rounded-lg mr-4">
                <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div>
                <div className="font-semibold text-gray-900">Mentorship</div>
                <div className="text-sm text-gray-600">One-on-one guidance</div>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Enroll CTA */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-center text-white">
        <h3 className="text-3xl font-bold mb-4">Ready to Get Started?</h3>
        <p className="text-xl mb-6 opacity-90">
          Enroll now and start your journey to becoming a professional developer
        </p>
        <Link 
          to="/register"
          className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition shadow-lg"
        >
          Enroll in This Course
        </Link>
      </div>
    </div>
  )
}

export default CourseDetail
