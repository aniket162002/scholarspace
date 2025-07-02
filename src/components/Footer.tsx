import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUp, Mail, Phone, Linkedin, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-dark-800 border-t border-dark-700">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                src="/WhatsApp Image 2025-06-25 at 8.38.00 PM.jpeg" 
                alt="ScholarSpace Logo" 
                className="h-10 w-10 rounded-lg"
              />
              <div>
                <h3 className="text-xl font-poppins font-bold bg-gradient-primary bg-clip-text text-transparent">
                  ScholarSpace
                </h3>
                <p className="text-sm text-gray-400">by Akrix.ai</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Where Tomorrow's Coders Meet Ambition. Premium IT/CS projects for students from 11th grade to PhD.
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-poppins font-semibold text-white">Contact Us</h4>
            <div className="space-y-3">
              <a 
                href="mailto:akrix.ai@gmail.com"
                className="flex items-center space-x-3 text-gray-400 hover:text-primary-500 transition-colors"
              >
                <Mail size={18} />
                <span>akrix.ai@gmail.com</span>
              </a>
              <a 
                href="tel:+919819399470"
                className="flex items-center space-x-3 text-gray-400 hover:text-primary-500 transition-colors"
              >
                <Phone size={18} />
                <span>+91 9819399470</span>
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-poppins font-semibold text-white">Follow Us</h4>
            <div className="flex space-x-4">
              <a 
                href="#"
                className="p-3 bg-dark-700 rounded-full hover:bg-gradient-primary transition-all duration-300 transform hover:scale-110"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="#"
                className="p-3 bg-dark-700 rounded-full hover:bg-gradient-primary transition-all duration-300 transform hover:scale-110"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="mailto:akrix.ai@gmail.com"
                className="p-3 bg-dark-700 rounded-full hover:bg-gradient-primary transition-all duration-300 transform hover:scale-110"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-dark-700 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 ScholarSpace by Akrix.ai. All rights reserved.
          </p>
          
          {/* Back to Top */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="mt-4 md:mt-0 p-3 bg-gradient-primary rounded-full hover:shadow-lg hover:shadow-primary-500/25 transition-all duration-300"
          >
            <ArrowUp size={20} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;