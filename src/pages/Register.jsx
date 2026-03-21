function Register() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-12">
      <div className="max-w-3xl w-full">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Register Now</h2>
            <p className="text-gray-600">Fill out the form below to enroll in a course</p>
          </div>
          <div className="w-full" style={{ minHeight: '600px' }}>
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSd7pBJzvMnYW92ocr9YpSLQMCdn4hQ_uR8MWC-1a-YofNTrnA/viewform?embedded=true"
              width="100%"
              height="700"
              frameBorder="0"
              marginHeight="0"
              marginWidth="0"
              title="Registration Form"
            >
              Loading…
            </iframe>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register
