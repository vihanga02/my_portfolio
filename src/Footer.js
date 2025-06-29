import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="relative py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="glass rounded-3xl p-8 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-6">
            <h3 className="text-2xl font-playfair font-semibold text-slate-800 mb-2">
              Vihanga Muthumala
            </h3>
            <p className="text-slate-600">Full Stack Developer & Computer Science Student</p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-4 mb-6">
            {[
              { name: "Email", url: "mailto:vihagamuthumala@gmail.com", icon: "📧" },
              { name: "GitHub", url: "http://github.com/vihanga02", icon: "🐙" },
              { name: "LinkedIn", url: "https://www.linkedin.com/in/vihanga-muthumala-678451277", icon: "💼" },
              { name: "Instagram", url: "https://www.instagram.com/__vihanga__m__", icon: "📸" }
            ].map((social, index) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 glass-dark rounded-2xl flex items-center justify-center text-lg hover:shadow-lg transition-all duration-300"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                title={social.name}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>

          <div className="border-t border-white/20 pt-6">
            <p className="text-slate-600 text-sm">
              © 2024 Vihanga Muthumala. All rights reserved.
            </p>
            <p className="text-slate-500 text-xs mt-2">
              Built with React & Tailwind CSS
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

export default Footer;