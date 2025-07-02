import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Sparkles, Bot, Mic, FileText, Image, Code, Zap, MessageCircle } from 'lucide-react';
import ProjectCard from '../components/ProjectCard';
import ContactForm from '../components/ContactForm';

const GenAIProjects: React.FC = () => {
  const projects = [
    {
      title: 'AI Voice Assistant (Jarvis-like)',
      description: 'Advanced voice assistant with natural language processing, task automation, and smart home integration.',
      technologies: ['Python', 'OpenAI API', 'Speech Recognition', 'pyttsx3', 'Flask'],
      features: [
        'Voice command recognition',
        'Natural language understanding',
        'Task automation and scheduling',
        'Smart home device control',
        'Weather and news updates',
        'Personalized responses'
      ],
      difficulty: 'Advanced' as const,
      duration: '10-12 weeks',
      icon: <Mic size={24} className="text-white" />
    },
    {
      title: 'LLM-based Chatbot',
      description: 'Intelligent chatbot powered by large language models with context awareness and domain expertise.',
      technologies: ['Python', 'OpenAI GPT', 'LangChain', 'Streamlit', 'Vector DB'],
      features: [
        'Context-aware conversations',
        'Domain-specific knowledge base',
        'Multi-turn dialogue support',
        'Sentiment analysis integration',
        'Custom training capabilities',
        'API integration ready'
      ],
      difficulty: 'Advanced' as const,
      duration: '8-10 weeks',
      icon: <Bot size={24} className="text-white" />
    },
    {
      title: 'AI Resume & Cover Letter Generator',
      description: 'Automated resume and cover letter generation system using AI to match job requirements.',
      technologies: ['Python', 'OpenAI API', 'React', 'Node.js', 'PDF Generation'],
      features: [
        'Job description analysis',
        'Skill matching algorithms',
        'ATS-optimized formatting',
        'Multiple template options',
        'Real-time preview',
        'Export to multiple formats'
      ],
      difficulty: 'Intermediate' as const,
      duration: '6-8 weeks',
      icon: <FileText size={24} className="text-white" />
    },
    {
      title: 'AI Content Generator',
      description: 'Multi-purpose content creation platform for blogs, social media, and marketing materials.',
      technologies: ['Python', 'OpenAI API', 'React', 'MongoDB', 'Redis'],
      features: [
        'Blog post generation',
        'Social media content creation',
        'SEO optimization suggestions',
        'Tone and style customization',
        'Plagiarism detection',
        'Content scheduling'
      ],
      difficulty: 'Intermediate' as const,
      duration: '8-10 weeks',
      icon: <FileText size={24} className="text-white" />
    },
    {
      title: 'AI Image Generator & Editor',
      description: 'Advanced image generation and editing platform using DALL-E and Stable Diffusion models.',
      technologies: ['Python', 'Stable Diffusion', 'OpenAI DALL-E', 'React', 'AWS S3'],
      features: [
        'Text-to-image generation',
        'Image-to-image transformation',
        'Style transfer capabilities',
        'Batch processing support',
        'High-resolution outputs',
        'Custom model fine-tuning'
      ],
      difficulty: 'Advanced' as const,
      duration: '10-12 weeks',
      icon: <Image size={24} className="text-white" />
    },
    {
      title: 'AI Code Assistant',
      description: 'Intelligent code generation and review assistant for multiple programming languages.',
      technologies: ['Python', 'OpenAI Codex', 'GitHub API', 'VS Code Extension', 'Docker'],
      features: [
        'Code generation from descriptions',
        'Bug detection and fixes',
        'Code optimization suggestions',
        'Documentation generation',
        'Multi-language support',
        'IDE integration'
      ],
      difficulty: 'Advanced' as const,
      duration: '12-14 weeks',
      icon: <Code size={24} className="text-white" />
    },
    {
      title: 'AI-Powered Learning Assistant',
      description: 'Personalized learning companion that adapts to student needs and provides intelligent tutoring.',
      technologies: ['Python', 'OpenAI API', 'React', 'PostgreSQL', 'ML Models'],
      features: [
        'Personalized learning paths',
        'Intelligent question generation',
        'Progress tracking and analytics',
        'Adaptive difficulty adjustment',
        'Multi-subject support',
        'Performance insights'
      ],
      difficulty: 'Advanced' as const,
      duration: '10-12 weeks',
      icon: <Sparkles size={24} className="text-white" />
    },
    {
      title: 'AI Meeting Assistant',
      description: 'Smart meeting companion that transcribes, summarizes, and extracts action items from meetings.',
      technologies: ['Python', 'Whisper API', 'OpenAI API', 'React', 'WebRTC'],
      features: [
        'Real-time transcription',
        'Meeting summarization',
        'Action item extraction',
        'Speaker identification',
        'Integration with calendars',
        'Multi-language support'
      ],
      difficulty: 'Advanced' as const,
      duration: '8-10 weeks',
      icon: <MessageCircle size={24} className="text-white" />
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
              <div className="p-4 bg-gradient-to-r from-pink-500 to-orange-500 rounded-2xl">
                <Sparkles size={48} className="text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-poppins font-bold text-white mb-6">
              Generative AI <span className="bg-gradient-primary bg-clip-text text-transparent">Projects</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
              Explore the cutting-edge world of Generative AI with projects that leverage the latest LLMs, image generation, and creative AI technologies.
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
                Custom GenAI Project
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
              Featured Generative AI Projects
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Build next-generation AI applications that create, generate, and innovate using the latest generative AI technologies
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

      {/* GenAI Capabilities Section */}
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
              Generative AI Capabilities
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Explore the diverse applications of generative AI across different domains and use cases
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Text Generation',
                description: 'Content creation, copywriting, documentation',
                icon: <FileText size={24} className="text-white" />,
                gradient: 'from-blue-500 to-purple-500'
              },
              {
                title: 'Image Creation',
                description: 'Art generation, design automation, visual content',
                icon: <Image size={24} className="text-white" />,
                gradient: 'from-purple-500 to-pink-500'
              },
              {
                title: 'Code Generation',
                description: 'Automated programming, code completion, debugging',
                icon: <Code size={24} className="text-white" />,
                gradient: 'from-green-500 to-blue-500'
              },
              {
                title: 'Voice & Audio',
                description: 'Speech synthesis, music generation, audio processing',
                icon: <Mic size={24} className="text-white" />,
                gradient: 'from-orange-500 to-red-500'
              }
            ].map((capability, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-dark-700 p-6 rounded-xl text-center hover:scale-105 transition-all duration-300 cursor-pointer group"
              >
                <div className="flex justify-center mb-4">
                  <div className={`p-4 bg-gradient-to-r ${capability.gradient} rounded-xl group-hover:animate-glow`}>
                    {capability.icon}
                  </div>
                </div>
                <h3 className="text-lg font-poppins font-bold text-white mb-2">
                  {capability.title}
                </h3>
                <p className="text-gray-400 text-sm">
                  {capability.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Models & APIs Section */}
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
              AI Models & APIs We Use
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Work with the most advanced AI models and APIs available in the market
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              'OpenAI GPT-4', 'DALL-E 3', 'Stable Diffusion', 'Claude', 'Gemini', 'Whisper',
              'LangChain', 'Hugging Face', 'Midjourney API', 'Anthropic', 'Cohere', 'Replicate'
            ].map((model, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-dark-700 p-4 rounded-xl text-center hover:bg-gradient-primary hover:scale-105 transition-all duration-300 cursor-pointer"
              >
                <span className="text-white font-medium text-sm">{model}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Future of AI Section */}
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
              Shape the Future with AI
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
              Join the AI revolution and build applications that will define the future of technology and human interaction.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              {[
                {
                  title: 'Innovation',
                  description: 'Create groundbreaking solutions that push the boundaries of what\'s possible',
                  icon: <Zap size={32} className="text-white" />
                },
                {
                  title: 'Impact',
                  description: 'Build AI systems that solve real-world problems and improve lives',
                  icon: <Sparkles size={32} className="text-white" />
                },
                {
                  title: 'Future-Ready',
                  description: 'Develop skills that will be essential in the AI-driven future',
                  icon: <Bot size={32} className="text-white" />
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="flex justify-center mb-4">
                    <div className="p-4 bg-gradient-primary rounded-xl">
                      {item.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-poppins font-bold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-400">
                    {item.description}
                  </p>
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
              Ready to Build the Future with AI?
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
              Start your generative AI journey today and create applications that will shape tomorrow's world.
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

export default GenAIProjects;