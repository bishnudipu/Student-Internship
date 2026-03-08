const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { PrismaClient } = require('@prisma/client');
const { sendWelcomeEmail } = require('../config/email');

const router = express.Router();
const prisma = new PrismaClient();

// Register endpoint
router.post('/register', async (req, res) => {
  try {
    const { fullName, email, phone, password, course } = req.body;

    // Validate input
    if (!fullName || !email || !phone || !password || !course) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return res.status(400).json({ error: 'Email already registered' });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user
    const user = await prisma.user.create({
      data: {
        fullName,
        email,
        phone,
        password: hashedPassword,
        course,
      },
    });

    // Get course name for email
    const courseNames = {
      'react-genai': 'Frontend (React) + GenAI',
      'nodejs-genai': 'Backend (Node.JS) + GenAI',
      'dotnet-genai': 'Backend (DotNET) + GenAI',
      'mysql': 'MySQL Database',
      'fullstack-mern-genai': 'Full Stack (React + Node.JS + MySQL + GenAI)',
      'fullstack-dotnet-genai': 'Full Stack (React + DotNET + MySQL + GenAI)',
    };

    // Send welcome email
    await sendWelcomeEmail(email, fullName, courseNames[course] || course);

    // Generate JWT token
    const token = jwt.sign(
      { userId: user.id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: '7d' }
    );

    res.status(201).json({
      message: 'Registration successful! Check your email for confirmation.',
      user: {
        id: user.id,
        fullName: user.fullName,
        email: user.email,
        course: user.course,
      },
      token,
    });
  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({ error: 'Registration failed. Please try again.' });
  }
});

// Login endpoint
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password are required' });
    }

    // Find user
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // Verify password
    const isValidPassword = await bcrypt.compare(password, user.password);

    if (!isValidPassword) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // Generate JWT token
    const token = jwt.sign(
      { userId: user.id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: '7d' }
    );

    res.json({
      message: 'Login successful',
      user: {
        id: user.id,
        fullName: user.fullName,
        email: user.email,
        course: user.course,
      },
      token,
    });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ error: 'Login failed. Please try again.' });
  }
});

module.exports = router;
