import { Link } from 'react-router-dom'
import { useState } from 'react'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-3xl">🎓</span>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Student Internship
            </h1>
          </Link>
          
          <div className="hidden md:flex space-x-6 items-center">
            <Link to="/" className="text-gray-700 hover:text-blue-600 transition">Home</Link>
            <Link to="/about" className="text-gray-700 hover:text-blue-600 transition">About</Link>
            <Link to="/login" className="text-gray-700 hover:text-blue-600 transition">Login</Link>
            <Link to="/register" className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
              Register
            </Link>
          </div>

          <button 
            className="md:hidden text-gray-700"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden mt-4 space-y-2">
            <Link to="/" className="block text-gray-700 hover:text-blue-600 py-2">Home</Link>
            <Link to="/about" className="block text-gray-700 hover:text-blue-600 py-2">About</Link>
            <Link to="/login" className="block text-gray-700 hover:text-blue-600 py-2">Login</Link>
            <Link to="/register" className="block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 text-center">
              Register
            </Link>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Navbar
