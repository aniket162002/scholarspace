import React from 'react';
import { motion } from 'framer-motion';
import { Settings, Lightbulb, Rocket, Users, Clock, CheckCircle } from 'lucide-react';
import ContactForm from '../components/ContactForm';

const CustomProject: React.FC = () => {
  const benefits = [
    {
      title: 'Tailored Solutions',
      description: 'Projects designed specifically for your academic requirements and career goals',
      icon: <Settings size={24} className="text-white" />
    },
    {
      title: 'Innovation Focus',
      description: 'Work on cutting-edge technologies and innovative solutions',
      icon: <Lightbulb size={24} className="text-white" />
    },
    {
      title: 'Fast Delivery',
      description: 'Quick turnaround times without compromising on quality',
      icon: <Rocket size={24} className="text-white" />
    },
    {
      title: 'Expert Guidance',
      description: 'One-on-one mentorship from industry professionals',
      icon: <Users size={24} className="text-white" />
    },
    {
      title: '24/7 Support',
      description: 'Round-the-clock support throughout your project journey',
      icon: <Clock size={24} className="text-white" />
    },
    {
      title: 'Quality Assurance',
      description: '100% satisfaction guarantee with unlimited revisions',
      icon: <CheckCircle size={24} className="text-white" />
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Consultation',
      description: 'Discuss your requirements, timeline, and objectives with our experts'
    },
    {
      step: '02',
      title: 'Planning',
      description: 'Create a detailed project plan with milestones and deliverables'
    },
    {
      step: '03',
      title: 'Development',
      description: 'Build your project with regular updates and feedback sessions'
    },
    {
      step: '04',
      title: 'Delivery',
      description: 'Receive your completed project with documentation and support'
    }
  ];

  const projectTypes = [
    'Academic Research Projects',
    'Thesis and Dissertation Support',
    'Industry-Specific Solutions',
    'Startup MVP Development',
    'Portfolio Enhancement Projects',
    'Competition and Hackathon Projects',
    'Certification Project Requirements',
    'Internship Project Assistance'
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
              <div className="p-4 bg-gradient-to-r from-red-500 to-purple-500 rounded-2xl animate-glow">
                <Settings size={48} className="text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-poppins font-bold text-white mb-6">
              Custom <span className="bg-gradient-primary bg-clip-text text-transparent">Projects</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
              Have a unique project idea? We'll bring it to life with our custom development services tailored to your specific needs and requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://calendly.com/akrix-ai"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-gradient-primary text-white font-semibold rounded-full hover:shadow-lg hover:shadow-primary-500/25 transition-all duration-300"
              >
                Schedule Free Consultation
              </a>
              <a
                href="#contact-form"
                className="px-8 py-3 border-2 border-primary-500 text-primary-500 font-semibold rounded-full hover:bg-primary-500 hover:text-white transition-all duration-300"
              >
                Get Quote
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-white mb-4">
              Why Choose Custom Projects?
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Get personalized solutions that perfectly match your academic and professional requirements
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-dark-800 p-6 rounded-2xl border border-dark-700 hover:border-primary-500/50 transition-all duration-300 group"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-3 bg-gradient-primary rounded-lg group-hover:animate-glow">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-poppins font-bold text-white">
                    {benefit.title}
                  </h3>
                </div>
                <p className="text-gray-400 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
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
              Our Development Process
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              A streamlined process that ensures your project is delivered on time and exceeds expectations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative text-center"
              >
                <div className="bg-dark-700 p-8 rounded-2xl hover:bg-dark-600 transition-colors duration-300">
                  <div className="text-4xl font-poppins font-black text-primary-500 mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-poppins font-bold text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    {step.description}
                  </p>
                </div>
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-primary"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Types Section */}
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
              Types of Custom Projects
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              We handle a wide variety of project types across different domains and complexity levels
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {projectTypes.map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-dark-800 p-6 rounded-xl text-center hover:bg-gradient-primary hover:scale-105 transition-all duration-300 cursor-pointer"
              >
                <h3 className="text-white font-medium">{type}</h3>
              </motion.div>
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
              Technologies We Work With
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              From traditional technologies to cutting-edge frameworks, we cover the entire spectrum
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                category: 'Frontend',
                technologies: ['React', 'Vue.js', 'Angular', 'Next.js', 'Svelte', 'TypeScript']
              },
              {
                category: 'Backend',
                technologies: ['Node.js', 'Python', 'Java', 'C#', 'Go', 'PHP']
              },
              {
                category: 'Mobile',
                technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Xamarin', 'Ionic']
              },
              {
                category: 'Database',
                technologies: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis', 'Firebase', 'DynamoDB']
              },
              {
                category: 'AI/ML',
                technologies: ['TensorFlow', 'PyTorch', 'OpenAI', 'Hugging Face', 'Scikit-learn', 'Keras']
              },
              {
                category: 'Cloud & DevOps',
                technologies: ['AWS', 'Azure', 'GCP', 'Docker', 'Kubernetes', 'Terraform']
              }
            ].map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-dark-700 p-6 rounded-xl"
              >
                <h3 className="text-xl font-poppins font-bold text-white mb-4 text-center">
                  {tech.category}
                </h3>
                <div className="flex flex-wrap gap-2 justify-center">
                  {tech.technologies.map((technology, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-dark-800 text-primary-500 text-sm rounded-full border border-primary-500/20"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
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
              What Our Students Say
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Real feedback from students who have successfully completed their custom projects with us
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Priya Sharma',
                course: 'Computer Science, Final Year',
                feedback: 'The custom AI project helped me land my dream job at a top tech company. The mentorship was exceptional!',
                rating: 5
              },
              {
                name: 'Rahul Patel',
                course: 'IT Engineering, 3rd Year',
                feedback: 'Amazing support throughout my full-stack project. The team went above and beyond to ensure quality.',
                rating: 5
              },
              {
                name: 'Ananya Singh',
                course: 'Masters in Data Science',
                feedback: 'The custom ML project for my thesis was exactly what I needed. Professional and timely delivery.',
                rating: 5
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-dark-800 p-6 rounded-xl border border-dark-700"
              >
                <div className="flex space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <div key={i} className="w-5 h-5 bg-yellow-400 rounded-full"></div>
                  ))}
                </div>
                <p className="text-gray-400 mb-4 italic">
                  "{testimonial.feedback}"
                </p>
                <div>
                  <h4 className="text-white font-semibold">{testimonial.name}</h4>
                  <p className="text-gray-500 text-sm">{testimonial.course}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact-form" className="py-20 bg-dark-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-white mb-6">
              Ready to Start Your Custom Project?
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
              Tell us about your project requirements and we'll create a tailored solution just for you.
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

export default CustomProject;