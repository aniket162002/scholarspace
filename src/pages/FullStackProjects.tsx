import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Layers, Database, Cloud, Shield, Zap, Globe, Server, Code } from 'lucide-react';
import ProjectCard from '../components/ProjectCard';
import ContactForm from '../components/ContactForm';

const FullStackProjects: React.FC = () => {
  const projects = [
    {
      title: 'Enterprise CRM System',
      description: 'Complete customer relationship management platform with sales pipeline, analytics, and automation.',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Redis', 'AWS', 'Docker'],
      features: [
        'Customer lifecycle management',
        'Sales pipeline automation',
        'Advanced analytics dashboard',
        'Email marketing integration',
        'Multi-tenant architecture',
        'Real-time notifications'
      ],
      difficulty: 'Advanced' as const,
      duration: '14-16 weeks',
      icon: <Database size={24} className="text-white" />
    },
    {
      title: 'Cloud-Native E-Commerce',
      description: 'Scalable e-commerce platform with microservices architecture, payment processing, and inventory management.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Kubernetes', 'Stripe', 'AWS'],
      features: [
        'Microservices architecture',
        'Payment gateway integration',
        'Inventory management system',
        'Order tracking and fulfillment',
        'Admin dashboard and analytics',
        'Mobile-responsive design'
      ],
      difficulty: 'Advanced' as const,
      duration: '16-18 weeks',
      icon: <Cloud size={24} className="text-white" />
    },
    {
      title: 'Learning Management System',
      description: 'Comprehensive LMS with course creation, student progress tracking, and interactive learning tools.',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Socket.io', 'AWS S3', 'FFmpeg'],
      features: [
        'Course creation and management',
        'Video streaming and processing',
        'Interactive quizzes and assignments',
        'Progress tracking and analytics',
        'Discussion forums and chat',
        'Certificate generation'
      ],
      difficulty: 'Advanced' as const,
      duration: '12-14 weeks',
      icon: <Layers size={24} className="text-white" />
    },
    {
      title: 'Project Management Platform',
      description: 'Collaborative project management tool with task tracking, team communication, and resource planning.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Socket.io', 'Redis', 'Docker'],
      features: [
        'Project and task management',
        'Team collaboration tools',
        'Gantt charts and timelines',
        'Resource allocation',
        'Time tracking and reporting',
        'Integration with third-party tools'
      ],
      difficulty: 'Intermediate' as const,
      duration: '10-12 weeks',
      icon: <Zap size={24} className="text-white" />
    },
    {
      title: 'Healthcare Management System',
      description: 'Integrated healthcare platform with patient records, appointment scheduling, and telemedicine features.',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'WebRTC', 'HIPAA Compliance', 'AWS'],
      features: [
        'Electronic health records',
        'Appointment scheduling system',
        'Telemedicine video calls',
        'Prescription management',
        'Insurance and billing',
        'HIPAA compliant security'
      ],
      difficulty: 'Advanced' as const,
      duration: '14-16 weeks',
      icon: <Shield size={24} className="text-white" />
    },
    {
      title: 'Financial Trading Platform',
      description: 'Real-time trading platform with market data, portfolio management, and algorithmic trading capabilities.',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'WebSocket', 'Redis', 'Python'],
      features: [
        'Real-time market data feeds',
        'Portfolio management tools',
        'Algorithmic trading strategies',
        'Risk management systems',
        'Advanced charting and analysis',
        'Compliance and reporting'
      ],
      difficulty: 'Advanced' as const,
      duration: '16-18 weeks',
      icon: <Globe size={24} className="text-white" />
    },
    {
      title: 'Social Media Platform',
      description: 'Complete social networking platform with content sharing, messaging, and community features.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Socket.io', 'AWS S3', 'ElasticSearch'],
      features: [
        'User profiles and connections',
        'Content sharing and feeds',
        'Real-time messaging',
        'Groups and communities',
        'Content moderation',
        'Advanced search and discovery'
      ],
      difficulty: 'Advanced' as const,
      duration: '14-16 weeks',
      icon: <Server size={24} className="text-white" />
    },
    {
      title: 'IoT Dashboard Platform',
      description: 'Comprehensive IoT management platform with device monitoring, data visualization, and automation.',
      technologies: ['React', 'Node.js', 'InfluxDB', 'MQTT', 'Grafana', 'Docker'],
      features: [
        'Device management and monitoring',
        'Real-time data visualization',
        'Alert and notification system',
        'Automation rules engine',
        'Historical data analysis',
        'Multi-protocol support'
      ],
      difficulty: 'Advanced' as const,
      duration: '12-14 weeks',
      icon: <Code size={24} className="text-white" />
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
              <div className="p-4 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl">
                <Layers size={48} className="text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-poppins font-bold text-white mb-6">
              Full Stack <span className="bg-gradient-primary bg-clip-text text-transparent">Development</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
              Master end-to-end application development with comprehensive full-stack projects that cover frontend, backend, databases, and deployment.
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
                Custom Full Stack Project
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
              Featured Full Stack Projects
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Build complete, production-ready applications that demonstrate mastery of the entire development stack
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

      {/* Tech Stack Section */}
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
              Complete Technology Stack
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Master the entire development ecosystem from frontend to deployment
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Frontend',
                description: 'Modern UI frameworks and libraries',
                technologies: ['React', 'Vue.js', 'Angular', 'TypeScript', 'Tailwind CSS', 'Next.js'],
                icon: <Code size={32} className="text-white" />,
                gradient: 'from-blue-500 to-purple-500'
              },
              {
                title: 'Backend',
                description: 'Server-side technologies and APIs',
                technologies: ['Node.js', 'Express', 'Python', 'Django', 'FastAPI', 'GraphQL'],
                icon: <Server size={32} className="text-white" />,
                gradient: 'from-green-500 to-blue-500'
              },
              {
                title: 'Database',
                description: 'Data storage and management solutions',
                technologies: ['PostgreSQL', 'MongoDB', 'Redis', 'MySQL', 'ElasticSearch', 'InfluxDB'],
                icon: <Database size={32} className="text-white" />,
                gradient: 'from-purple-500 to-pink-500'
              },
              {
                title: 'DevOps & Cloud',
                description: 'Deployment and infrastructure management',
                technologies: ['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Nginx', 'Terraform'],
                icon: <Cloud size={32} className="text-white" />,
                gradient: 'from-orange-500 to-red-500'
              }
            ].map((stack, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-dark-700 p-6 rounded-2xl hover:bg-dark-600 transition-colors duration-300"
              >
                <div className="flex justify-center mb-6">
                  <div className={`p-4 bg-gradient-to-r ${stack.gradient} rounded-xl`}>
                    {stack.icon}
                  </div>
                </div>
                <h3 className="text-xl font-poppins font-bold text-white mb-3 text-center">
                  {stack.title}
                </h3>
                <p className="text-gray-400 text-sm text-center mb-4">
                  {stack.description}
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {stack.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-dark-800 text-primary-500 text-xs rounded-full border border-primary-500/20"
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

      {/* Architecture Patterns Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-white mb-4">
              Architecture Patterns & Best Practices
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Learn industry-standard architectural patterns and development practices
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Microservices Architecture',
                description: 'Build scalable, maintainable applications with microservices patterns',
                icon: <Layers size={24} className="text-white" />
              },
              {
                title: 'RESTful API Design',
                description: 'Create robust, well-documented APIs following REST principles',
                icon: <Globe size={24} className="text-white" />
              },
              {
                title: 'Database Design',
                description: 'Design efficient, normalized database schemas and relationships',
                icon: <Database size={24} className="text-white" />
              },
              {
                title: 'Security Best Practices',
                description: 'Implement authentication, authorization, and data protection',
                icon: <Shield size={24} className="text-white" />
              },
              {
                title: 'Performance Optimization',
                description: 'Optimize application performance and scalability',
                icon: <Zap size={24} className="text-white" />
              },
              {
                title: 'Cloud Deployment',
                description: 'Deploy applications to cloud platforms with CI/CD pipelines',
                icon: <Cloud size={24} className="text-white" />
              }
            ].map((pattern, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-dark-800 p-6 rounded-xl border border-dark-700 hover:border-primary-500/50 transition-all duration-300"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-3 bg-gradient-primary rounded-lg">
                    {pattern.icon}
                  </div>
                  <h3 className="text-lg font-poppins font-bold text-white">
                    {pattern.title}
                  </h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {pattern.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Path Section */}
      <section className="py-20 bg-dark-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-white mb-6">
              Your Full Stack Learning Journey
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
              Follow a structured path from beginner to advanced full stack developer
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              {[
                {
                  step: '01',
                  title: 'Foundation',
                  description: 'Master HTML, CSS, JavaScript, and basic backend concepts',
                  duration: '4-6 weeks'
                },
                {
                  step: '02',
                  title: 'Frameworks',
                  description: 'Learn React, Node.js, databases, and API development',
                  duration: '8-10 weeks'
                },
                {
                  step: '03',
                  title: 'Advanced',
                  description: 'Explore microservices, cloud deployment, and DevOps',
                  duration: '6-8 weeks'
                }
              ].map((phase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="bg-dark-700 p-8 rounded-2xl text-center">
                    <div className="text-4xl font-poppins font-black text-primary-500 mb-4">
                      {phase.step}
                    </div>
                    <h3 className="text-xl font-poppins font-bold text-white mb-3">
                      {phase.title}
                    </h3>
                    <p className="text-gray-400 mb-4">
                      {phase.description}
                    </p>
                    <span className="text-primary-500 font-medium">
                      {phase.duration}
                    </span>
                  </div>
                  {index < 2 && (
                    <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-primary"></div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
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
              Ready to Become a Full Stack Developer?
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
              Start your comprehensive full stack development journey and build applications that make a difference.
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

export default FullStackProjects;