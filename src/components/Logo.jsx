function Logo({ className = "w-10 h-10", textClassName = "" }) {
  return (
    <div className="flex items-center gap-3">
      <svg 
        className={className} 
        viewBox="0 0 100 100" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Outer circle with gradient */}
        <defs>
          <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3B82F6" />
            <stop offset="50%" stopColor="#8B5CF6" />
            <stop offset="100%" stopColor="#EC4899" />
          </linearGradient>
          <linearGradient id="innerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#60A5FA" />
            <stop offset="100%" stopColor="#A78BFA" />
          </linearGradient>
        </defs>
        
        {/* Background circle */}
        <circle cx="50" cy="50" r="48" fill="url(#logoGradient)" opacity="0.1"/>
        
        {/* Main circle border */}
        <circle cx="50" cy="50" r="45" stroke="url(#logoGradient)" strokeWidth="3" fill="none"/>
        
        {/* Brain/Neural network pattern */}
        <circle cx="35" cy="35" r="6" fill="url(#logoGradient)"/>
        <circle cx="65" cy="35" r="6" fill="url(#logoGradient)"/>
        <circle cx="50" cy="50" r="8" fill="url(#logoGradient)"/>
        <circle cx="35" cy="65" r="6" fill="url(#logoGradient)"/>
        <circle cx="65" cy="65" r="6" fill="url(#logoGradient)"/>
        
        {/* Connecting lines */}
        <line x1="35" y1="35" x2="50" y2="50" stroke="url(#innerGradient)" strokeWidth="2"/>
        <line x1="65" y1="35" x2="50" y2="50" stroke="url(#innerGradient)" strokeWidth="2"/>
        <line x1="35" y1="65" x2="50" y2="50" stroke="url(#innerGradient)" strokeWidth="2"/>
        <line x1="65" y1="65" x2="50" y2="50" stroke="url(#innerGradient)" strokeWidth="2"/>
        <line x1="35" y1="35" x2="65" y2="35" stroke="url(#innerGradient)" strokeWidth="1.5" opacity="0.5"/>
        <line x1="35" y1="65" x2="65" y2="65" stroke="url(#innerGradient)" strokeWidth="1.5" opacity="0.5"/>
        
        {/* Tech accent - circuit lines */}
        <path d="M 20 50 L 30 50" stroke="url(#logoGradient)" strokeWidth="2" strokeLinecap="round"/>
        <path d="M 70 50 L 80 50" stroke="url(#logoGradient)" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="20" cy="50" r="2" fill="url(#logoGradient)"/>
        <circle cx="80" cy="50" r="2" fill="url(#logoGradient)"/>
      </svg>
      
      {textClassName && (
        <div className={textClassName}>
          <div className="font-bold text-xl bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Future Tech
          </div>
          <div className="text-xs text-gray-600 -mt-1">Student Internship</div>
        </div>
      )}
    </div>
  )
}

export default Logo
