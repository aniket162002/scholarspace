import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Code, Star } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  features: string[];
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  duration: string;
  icon: React.ReactNode;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  technologies,
  features,
  difficulty,
  duration,
  icon,
  index
}) => {
  const difficultyColors = {
    Beginner: 'text-green-400 bg-green-400/10',
    Intermediate: 'text-yellow-400 bg-yellow-400/10',
    Advanced: 'text-red-400 bg-red-400/10'
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -10, scale: 1.02 }}
      className="bg-dark-800 rounded-2xl p-6 border border-dark-700 hover:border-primary-500/50 transition-all duration-300 group"
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="p-3 bg-gradient-primary rounded-lg group-hover:animate-glow">
            {icon}
          </div>
          <div>
            <h3 className="text-xl font-poppins font-bold text-white group-hover:text-primary-500 transition-colors">
              {title}
            </h3>
            <div className="flex items-center space-x-2 mt-1">
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${difficultyColors[difficulty]}`}>
                {difficulty}
              </span>
              <span className="text-gray-400 text-sm">{duration}</span>
            </div>
          </div>
        </div>
        <div className="flex space-x-1">
          {[...Array(3)].map((_, i) => (
            <Star key={i} size={16} className="text-yellow-400 fill-current" />
          ))}
        </div>
      </div>

      {/* Description */}
      <p className="text-gray-400 text-sm leading-relaxed mb-4">
        {description}
      </p>

      {/* Technologies */}
      <div className="mb-4">
        <h4 className="text-sm font-semibold text-white mb-2">Technologies:</h4>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, i) => (
            <span
              key={i}
              className="px-3 py-1 bg-dark-700 text-primary-500 text-xs rounded-full border border-primary-500/20"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Features */}
      <div className="mb-6">
        <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
        <ul className="space-y-1">
          {features.slice(0, 3).map((feature, i) => (
            <li key={i} className="text-gray-400 text-xs flex items-center space-x-2">
              <div className="w-1 h-1 bg-primary-500 rounded-full"></div>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Actions */}
      <div className="flex space-x-3">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex-1 py-2 bg-gradient-primary text-white text-sm font-medium rounded-lg hover:shadow-lg hover:shadow-primary-500/25 transition-all duration-300 flex items-center justify-center space-x-2"
        >
          <Code size={16} />
          <span>Get Project</span>
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-4 py-2 border border-primary-500 text-primary-500 text-sm font-medium rounded-lg hover:bg-primary-500 hover:text-white transition-all duration-300"
        >
          <ExternalLink size={16} />
        </motion.button>
      </div>
    </motion.div>
  );
};

export default ProjectCard;