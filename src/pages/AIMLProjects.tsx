import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Brain, TrendingUp, Shield, Eye, MessageSquare, BarChart3, FileText, Zap } from 'lucide-react';
import ProjectCard from '../components/ProjectCard';
import ContactForm from '../components/ContactForm';

const AIMLProjects: React.FC = () => {
  const projects = [
    {
      title: 'Fake News Detection System',
      description: 'Advanced ML model to identify and classify fake news articles using NLP and deep learning techniques.',
      technologies: ['Python', 'TensorFlow', 'NLTK', 'Scikit-learn', 'Flask'],
      features: [
        'Text preprocessing and feature extraction',
        'Multiple ML algorithms comparison',
        'Real-time news verification',
        'Confidence score calculation',
        'Web interface for testing',
        'API for integration'
      ],
      difficulty: 'Advanced' as const,
      duration: '8-10 weeks',
      icon: <Shield size={24} className="text-white" />
    },
    {
      title: 'AI Resume Parser',
      description: 'Intelligent resume parsing system that extracts and categorizes information from resumes automatically.',
      technologies: ['Python', 'spaCy', 'PyPDF2', 'OpenCV', 'Django'],
      features: [
        'Multi-format resume support',
        'Named entity recognition',
        'Skills extraction and matching',
        'Experience timeline creation',
        'Candidate ranking system',
        'ATS compatibility scoring'
      ],
      difficulty: 'Intermediate' as const,
      duration: '6-8 weeks',
      icon: <FileText size={24} className="text-white" />
    },
    {
      title: 'Stock Price Prediction',
      description: 'ML-based stock market analysis and prediction system using historical data and technical indicators.',
      technologies: ['Python', 'TensorFlow', 'Pandas', 'NumPy', 'Plotly'],
      features: [
        'Historical data analysis',
        'Technical indicator calculation',
        'LSTM neural networks',
        'Risk assessment models',
        'Interactive visualizations',
        'Portfolio optimization'
      ],
      difficulty: 'Advanced' as const,
      duration: '10-12 weeks',
      icon: <TrendingUp size={24} className="text-white" />
    },
    {
      title: 'Image Classification System',
      description: 'Deep learning model for image recognition and classification with custom dataset training capabilities.',
      technologies: ['Python', 'TensorFlow', 'Keras', 'OpenCV', 'FastAPI'],
      features: [
        'Custom dataset training',
        'Transfer learning implementation',
        'Real-time image classification',
        'Batch processing capabilities',
        'Model performance metrics',
        'Web-based interface'
      ],
      difficulty: 'Intermediate' as const,
      duration: '6-8 weeks',
      icon: <Eye size={24} className="text-white" />
    },
    {
      title: 'Sentiment Analysis Tool',
      description: 'NLP-powered sentiment analysis system for social media monitoring and customer feedback analysis.',
      technologies: ['Python', 'NLTK', 'TextBlob', 'Transformers', 'Streamlit'],
      features: [
        'Multi-platform data collection',
        'Real-time sentiment scoring',
        'Emotion detection',
        'Trend analysis and reporting',
        'Custom model training',
        'Dashboard visualization'
      ],
      difficulty: 'Intermediate' as const,
      duration: '6-8 weeks',
      icon: <MessageSquare size={24} className="text-white" />
    },
    {
      title: 'Recommendation Engine',
      description: 'Collaborative filtering and content-based recommendation system for e-commerce and content platforms.',
      technologies: ['Python', 'Scikit-learn', 'Surprise', 'Pandas', 'Redis'],
      features: [
        'Collaborative filtering algorithms',
        'Content-based recommendations',
        'Hybrid recommendation models',
        'Real-time personalization',
        'A/B testing framework',
        'Performance analytics'
      ],
      difficulty: 'Advanced' as const,
      duration: '8-10 weeks',
      icon: <BarChart3 size={24} className="text-white" />
    },
    {
      title: 'Fraud Detection System',
      description: 'Machine learning system to detect fraudulent transactions and activities in real-time.',
      technologies: ['Python', 'Scikit-learn', 'XGBoost', 'Apache Kafka', 'PostgreSQL'],
      features: [
        'Anomaly detection algorithms',
        'Real-time transaction monitoring',
        'Risk scoring models',
        'Alert system integration',
        'Historical pattern analysis',
        'Model interpretability tools'
      ],
      difficulty: 'Advanced' as const,
      duration: '10-12 weeks',
      icon: <Shield size={24} className="text-white" />
    },
    {
      title: 'Predictive Analytics Platform',
      description: 'Comprehensive analytics platform for business forecasting and predictive modeling.',
      technologies: ['Python', 'Prophet', 'Scikit-learn', 'Plotly', 'Docker'],
      features: [
        'Time series forecasting',
        'Automated model selection',
        'Interactive dashboards',
        'Data preprocessing pipelines',
        'Model deployment automation',
        'Performance monitoring'
      ],
      difficulty: 'Advanced' as const,
      duration: '12-14 weeks',
      icon: <Zap size={24} className="text-white" />
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
              <div className="p-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl">
                <Brain size={48} className="text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-poppins font-bold text-white mb-6">
              AI/ML <span className="bg-gradient-primary bg-clip-text text-transparent">Projects</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
              Dive into the world of Artificial Intelligence and Machine Learning with cutting-edge projects that solve real-world problems.
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
                Custom AI Project
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
              Featured AI/ML Projects
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Explore our collection of AI and Machine Learning projects designed to give you hands-on experience with cutting-edge technologies
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

      {/* AI/ML Domains Section */}
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
              AI/ML Domains We Cover
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Comprehensive coverage of all major AI and ML domains with practical implementations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Computer Vision',
                description: 'Image processing, object detection, facial recognition',
                icon: <Eye size={24} className="text-white" />
              },
              {
                title: 'Natural Language Processing',
                description: 'Text analysis, sentiment analysis, language models',
                icon: <MessageSquare size={24} className="text-white" />
              },
              {
                title: 'Predictive Analytics',
                description: 'Forecasting, trend analysis, business intelligence',
                icon: <TrendingUp size={24} className="text-white" />
              },
              {
                title: 'Deep Learning',
                description: 'Neural networks, CNNs, RNNs, transformers',
                icon: <Brain size={24} className="text-white" />
              }
            ].map((domain, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-dark-700 p-6 rounded-xl text-center hover:bg-gradient-primary hover:scale-105 transition-all duration-300 cursor-pointer"
              >
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-dark-600 rounded-lg">
                    {domain.icon}
                  </div>
                </div>
                <h3 className="text-lg font-poppins font-bold text-white mb-2">
                  {domain.title}
                </h3>
                <p className="text-gray-400 text-sm">
                  {domain.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
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
              AI/ML Technologies & Tools
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Master the most popular and powerful AI/ML frameworks and libraries
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              'Python', 'TensorFlow', 'PyTorch', 'Scikit-learn', 'Keras', 'OpenCV',
              'NLTK', 'spaCy', 'Pandas', 'NumPy', 'Matplotlib', 'Jupyter'
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
      <section className="py-20 bg-dark-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-white mb-6">
              Ready to Dive into AI/ML?
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
              Start your journey in Artificial Intelligence and Machine Learning with our expert-guided projects.
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

export default AIMLProjects;