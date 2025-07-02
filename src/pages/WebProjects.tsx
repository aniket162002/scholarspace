import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Globe, Database, Shield, Users, ShoppingCart, GraduationCap, Briefcase, Calendar } from 'lucide-react';
import ProjectCard from '../components/ProjectCard';
import ContactForm from '../components/ContactForm';

const WebProjects: React.FC = () => {
  const projects = [
    {
      title: 'Smart Hostel Management System',
      description: 'Complete hostel management solution with room allocation, fee management, visitor tracking, and student portal.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Socket.io'],
      features: [
        'Room allocation and management',
        'Fee payment integration',
        'Visitor management system',
        'Student complaint portal',
        'Mess menu management',
        'Real-time notifications'
      ],
      difficulty: 'Advanced' as const,
      duration: '8-10 weeks',
      icon: <Users size={24} className="text-white" />
    },
    {
      title: 'Online Job Portal',
      description: 'Professional job portal connecting employers with job seekers, featuring advanced search and matching algorithms.',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Redis', 'AWS S3'],
      features: [
        'Advanced job search filters',
        'Resume builder and parser',
        'Company profiles',
        'Application tracking',
        'Interview scheduling',
        'Salary insights'
      ],
      difficulty: 'Advanced' as const,
      duration: '10-12 weeks',
      icon: <Briefcase size={24} className="text-white" />
    },
    {
      title: 'College Admission Portal',
      description: 'Streamlined admission process management system for educational institutions with document verification.',
      technologies: ['React', 'Node.js', 'MySQL', 'Express', 'Multer'],
      features: [
        'Online application forms',
        'Document upload and verification',
        'Merit list generation',
        'Fee payment gateway',
        'Admission status tracking',
        'Admin dashboard'
      ],
      difficulty: 'Intermediate' as const,
      duration: '6-8 weeks',
      icon: <GraduationCap size={24} className="text-white" />
    },
    {
      title: 'E-Commerce Platform',
      description: 'Full-featured online shopping platform with payment integration, inventory management, and analytics.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Cloudinary'],
      features: [
        'Product catalog management',
        'Shopping cart and wishlist',
        'Payment gateway integration',
        'Order tracking system',
        'Inventory management',
        'Sales analytics dashboard'
      ],
      difficulty: 'Advanced' as const,
      duration: '12-14 weeks',
      icon: <ShoppingCart size={24} className="text-white" />
    },
    {
      title: 'Hospital Management System',
      description: 'Comprehensive healthcare management solution for hospitals and clinics with patient records and appointment scheduling.',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Express', 'JWT'],
      features: [
        'Patient registration and records',
        'Appointment scheduling',
        'Doctor availability management',
        'Prescription management',
        'Billing and insurance',
        'Medical history tracking'
      ],
      difficulty: 'Advanced' as const,
      duration: '10-12 weeks',
      icon: <Calendar size={24} className="text-white" />
    },
    {
      title: 'Library Management System',
      description: 'Digital library solution with book cataloging, member management, and automated fine calculation.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'QR Code'],
      features: [
        'Book catalog and search',
        'Member registration',
        'Issue and return tracking',
        'Fine calculation system',
        'Book reservation',
        'Digital library cards'
      ],
      difficulty: 'Intermediate' as const,
      duration: '6-8 weeks',
      icon: <Database size={24} className="text-white" />
    },
    {
      title: 'Real Estate Platform',
      description: 'Property listing and management platform with virtual tours, mortgage calculator, and agent portal.',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Mapbox', 'AWS'],
      features: [
        'Property listings with photos',
        'Advanced search filters',
        'Virtual tour integration',
        'Mortgage calculator',
        'Agent dashboard',
        'Property comparison tool'
      ],
      difficulty: 'Advanced' as const,
      duration: '10-12 weeks',
      icon: <Globe size={24} className="text-white" />
    },
    {
      title: 'Social Media Dashboard',
      description: 'Social media management tool for businesses to schedule posts, analyze engagement, and manage multiple accounts.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Social APIs', 'Chart.js'],
      features: [
        'Multi-platform posting',
        'Content scheduling',
        'Analytics dashboard',
        'Engagement tracking',
        'Team collaboration',
        'Content calendar'
      ],
      difficulty: 'Intermediate' as const,
      duration: '8-10 weeks',
      icon: <Users size={24} className="text-white" />
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
              <div className="p-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl">
                <Globe size={48} className="text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-poppins font-bold text-white mb-6">
              Web Development <span className="bg-gradient-primary bg-clip-text text-transparent">Projects</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
              Build modern, responsive web applications using cutting-edge technologies. 
              From simple websites to complex enterprise solutions.
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
                Custom Project
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
              Featured Web Projects
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Choose from our curated collection of web development projects designed to enhance your skills and portfolio
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

      {/* Technologies Section */}
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
              Technologies We Use
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Stay ahead with the latest web development technologies and frameworks
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              'React', 'Node.js', 'MongoDB', 'PostgreSQL', 'Express', 'Next.js',
              'TypeScript', 'Tailwind CSS', 'AWS', 'Docker', 'Redis', 'GraphQL'
            ].map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-dark-700 p-4 rounded-xl text-center hover:bg-gradient-primary hover:scale-105 transition-all duration-300 cursor-pointer"
              >
                <span className="text-white font-medium">{tech}</span>
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
              Ready to Build Your Web Project?
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
              Get started with your web development journey today. Our experts are here to guide you every step of the way.
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

export default WebProjects;