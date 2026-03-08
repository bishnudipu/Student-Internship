# Student Internship Platform

A modern, responsive web application for a student internship program offering courses in React, Node.js, .NET, MySQL, and GenAI integration.

## Features

- 🏠 **Home Page** - Hero section with course overview and statistics
- 🔐 **Login & Registration** - User authentication pages
- 📚 **Course Catalog** - 6 comprehensive courses with detailed information
- 📖 **Course Details** - Week-by-week curriculum breakdown for each course
- 👥 **About Page** - Information about tutors, mission, and program benefits
- 📱 **Responsive Design** - Works seamlessly on all devices
- 🎨 **Modern UI** - Built with Tailwind CSS

## Courses Offered

1. **Frontend (React) + GenAI** - 12 weeks
2. **Backend (Node.JS) + GenAI** - 12 weeks
3. **Backend (DotNET) + GenAI** - 12 weeks
4. **MySQL Database** - 8 weeks
5. **Full Stack (React + Node.JS + MySQL + GenAI)** - 16 weeks ⭐
6. **Full Stack (React + DotNET + MySQL + GenAI)** - 16 weeks ⭐

## Tech Stack

- **Frontend Framework**: React 19
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM
- **Language**: JavaScript

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd student-internship
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit:
```
http://localhost:5173
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
student-internship/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   └── Footer.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Login.jsx
│   │   ├── Register.jsx
│   │   ├── CourseDetail.jsx
│   │   └── About.jsx
│   ├── data/
│   │   └── coursesData.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── public/
├── index.html
├── tailwind.config.js
├── postcss.config.js
└── vite.config.js
```

## Features Details

### Home Page
- Hero section with call-to-action
- Statistics showcase (500+ students, 5 tutors, 6 courses, 95% success rate)
- Course cards with pricing and duration
- Responsive grid layout

### Course Detail Page
- Comprehensive week-by-week curriculum
- Course features and benefits
- What you'll learn section
- Enrollment call-to-action

### About Page
- Mission and vision statements
- 5 expert tutor profiles with expertise areas
- Program statistics
- Why choose us section with 6 key benefits

### Authentication Pages
- Login with email/password
- Registration form with course selection
- Social login options (Google, Facebook)
- Form validation

## Customization

### Adding New Courses
Edit `src/data/coursesData.js` to add or modify courses.

### Styling
Tailwind CSS classes are used throughout. Modify `tailwind.config.js` for theme customization.

### Routes
Add new routes in `src/App.jsx` using React Router.

## Future Enhancements

- Backend API integration
- User dashboard
- Payment gateway integration
- Course progress tracking
- Live chat support
- Video lessons integration
- Assignment submission system

## License

© 2026 Student Internship Program. All rights reserved.

## Contact

- 📧 Email: info@studentinternship.com
- 📱 Phone: +91 98765 43210
- 📍 Location: India
