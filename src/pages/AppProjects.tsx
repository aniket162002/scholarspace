import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Smartphone, ShoppingBag, Heart, MapPin, Camera, Music, Gamepad2, Car } from 'lucide-react';
import ProjectCard from '../components/ProjectCard';
import ContactForm from '../components/ContactForm';

const AppProjects: React.FC = () => {
  const projects = [
    {
      title: 'Food Delivery App',
      description: 'Complete food delivery solution with real-time tracking, payment integration, and restaurant management.',
      technologies: ['React Native', 'Node.js', 'MongoDB', 'Socket.io', 'Stripe'],
      features: [
        'Restaurant discovery and menus',
        'Real-time order tracking',
        'Multiple payment options',
        'Rating and review system',
        'Push notifications',
        'Delivery partner app'
      ],
      difficulty: 'Advanced' as const,
      duration: '10-12 weeks',
      icon: <ShoppingBag size={24} className="text-white" />
    },
    {
      title: 'Fitness Tracker App',
      description: 'Personal fitness companion with workout tracking, nutrition monitoring, and social features.',
      technologies: ['Flutter', 'Firebase', 'HealthKit', 'Google Fit', 'ML Kit'],
      features: [
        'Workout tracking and planning',
        'Nutrition and calorie counter',
        'Progress analytics',
        'Social challenges',
        'Wearable device integration',
        'Personal trainer chat'
      ],
      difficulty: 'Intermediate' as const,
      duration: '8-10 weeks',
      icon: <Heart size={24} className="text-white" />
    },
    {
      title: 'Travel Companion App',
      description: 'All-in-one travel app with itinerary planning, local recommendations, and expense tracking.',
      technologies: ['React Native', 'Node.js', 'PostgreSQL', 'Maps API', 'Weather API'],
      features: [
        'Trip planning and itineraries',
        'Local attractions and reviews',
        'Expense tracking and splitting',
        'Offline maps and guides',
        'Weather forecasts',
        'Travel document storage'
      ],
      difficulty: 'Advanced' as const,
      duration: '10-12 weeks',
      icon: <MapPin size={24} className="text-white" />
    },
    {
      title: 'Social Media App',
      description: 'Modern social networking platform with photo sharing, stories, and real-time messaging.',
      technologies: ['React Native', 'Node.js', 'MongoDB', 'Socket.io', 'AWS S3'],
      features: [
        'Photo and video sharing',
        'Stories and highlights',
        'Real-time messaging',
        'Follow and discovery system',
        'Live streaming',
        'Content moderation'
      ],
      difficulty: 'Advanced' as const,
      duration: '12-14 weeks',
      icon: <Camera size={24} className="text-white" />
    },
    {
      title: 'Music Streaming App',
      description: 'Feature-rich music streaming platform with playlists, recommendations, and offline playback.',
      technologies: ['Flutter', 'Node.js', 'MongoDB', 'Audio APIs', 'ML Algorithms'],
      features: [
        'Music streaming and downloads',
        'Personalized playlists',
        'Music discovery and recommendations',
        'Lyrics integration',
        'Social sharing',
        'Artist profiles and concerts'
      ],
      difficulty: 'Advanced' as const,
      duration: '12-14 weeks',
      icon: <Music size={24} className="text-white" />
    },
    {
      title: 'E-Learning Mobile App',
      description: 'Comprehensive learning platform with video courses, quizzes, and progress tracking.',
      technologies: ['React Native', 'Node.js', 'PostgreSQL', 'Video APIs', 'Analytics'],
      features: [
        'Video course streaming',
        'Interactive quizzes and assignments',
        'Progress tracking and certificates',
        'Discussion forums',
        'Offline content download',
        'Live classes and webinars'
      ],
      difficulty: 'Intermediate' as const,
      duration: '8-10 weeks',
      icon: <Smartphone size={24} className="text-white" />
    },
    {
      title: 'Gaming Mobile App',
      description: 'Engaging mobile game with multiplayer features, leaderboards, and in-app purchases.',
      technologies: ['Unity', 'C#', 'Firebase', 'Photon', 'Analytics'],
      features: [
        'Multiplayer gameplay',
        'Leaderboards and achievements',
        'In-app purchases',
        'Social features and chat',
        'Daily challenges',
        'Cross-platform compatibility'
      ],
      difficulty: 'Advanced' as const,
      duration: '10-12 weeks',
      icon: <Gamepad2 size={24} className="text-white" />
    },
    {
      title: 'Ride Sharing App',
      description: 'Complete ride-sharing solution with driver and passenger apps, real-time tracking, and payments.',
      technologies: ['React Native', 'Node.js', 'PostgreSQL', 'Maps API', 'Payment Gateway'],
      features: [
        'Real-time ride matching',
        'GPS tracking and navigation',
        'Multiple payment options',
        'Driver and passenger ratings',
        'Trip history and receipts',
        'Emergency features'
      ],
      difficulty: 'Advanced' as const,
      duration: '12-14 weeks',
      icon: <Car size={24} className="text-white" />
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-20"
    >
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex justify-center mb-8">
              <div className="p-4 bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl">
                <Smartphone size={48} className="text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-poppins font-bold text-white mb-6">
              Mobile App <span className="bg-gradient-primary bg-clip-text text-transparent">Development</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
              Create powerful native and cross-platform mobile applications that engage users and drive business growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://calendly.com/akrix-ai"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-gradient-primary text-white font-semibold rounded-full hover:shadow-lg hover:shadow-primary-500/25 transition-all duration-300"
              >
                Schedule Consultation
              </a>
              <Link
                to="/custom"
                className="px-8 py-3 border-2 border-primary-500 text-primary-500 font-semibold rounded-full hover:bg-primary-500 hover:text-white transition-all duration-300"
              >
                Custom App Project
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-white mb-4">
              Featured Mobile App Projects
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Build engaging mobile applications that users love with our comprehensive project collection
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                {...project}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section className="py-20 bg-dark-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-white mb-4">
              Development Platforms
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              We develop for all major mobile platforms using the latest technologies
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Native iOS',
                description: 'Swift and Objective-C development for optimal iOS performance',
                technologies: ['Swift', 'Objective-C', 'Xcode', 'iOS SDK'],
                icon: <Smartphone size={32} className="text-white" />
              },
              {
                title: 'Native Android',
                description: 'Kotlin and Java development for Android ecosystem',
                technologies: ['Kotlin', 'Java', 'Android Studio', 'Android SDK'],
                icon: <Smartphone size={32} className="text-white" />
              },
              {
                title: 'Cross-Platform',
                description: 'React Native and Flutter for multi-platform deployment',
                technologies: ['React Native', 'Flutter', 'Dart', 'Expo'],
                icon: <Smartphone size={32} className="text-white" />
              }
            ].map((platform, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-dark-700 p-8 rounded-2xl text-center hover:bg-dark-600 transition-colors duration-300"
              >
                <div className="flex justify-center mb-6">
                  <div className="p-4 bg-gradient-primary rounded-xl">
                    {platform.icon}
                  </div>
                </div>
                <h3 className="text-xl font-poppins font-bold text-white mb-4">
                  {platform.title}
                </h3>
                <p className="text-gray-400 mb-6">
                  {platform.description}
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {platform.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-dark-800 text-primary-500 text-sm rounded-full border border-primary-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-white mb-6">
              Ready to Build Your Mobile App?
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
              Transform your app idea into reality with our expert mobile development team.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <ContactForm />
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default AppProjects;