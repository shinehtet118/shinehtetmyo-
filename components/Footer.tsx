
import React from 'react';
import { Link } from 'react-router-dom';
import { FacebookIcon, InstagramIcon, TwitterIcon, YoutubeIcon } from './icons/SocialIcons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold font-display mb-4">SHM</h3>
            <p className="text-gray-300 text-sm">
              Amplify your social presence. We provide top-tier social media growth services to help you shine online.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold font-display mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="hover:text-accent transition-colors duration-300 text-sm">About Us</Link></li>
              <li><Link to="/services" className="hover:text-accent transition-colors duration-300 text-sm">Services</Link></li>
              <li><Link to="/blog" className="hover:text-accent transition-colors duration-300 text-sm">Blog</Link></li>
              <li><Link to="/contact" className="hover:text-accent transition-colors duration-300 text-sm">Contact</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold font-display mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-accent transition-colors duration-300 text-sm">Terms of Service</a></li>
              <li><a href="#" className="hover:text-accent transition-colors duration-300 text-sm">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold font-display mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" aria-label="Facebook" className="text-gray-300 hover:text-accent transition-colors duration-300"><FacebookIcon className="w-6 h-6" /></a>
              <a href="#" aria-label="Instagram" className="text-gray-300 hover:text-accent transition-colors duration-300"><InstagramIcon className="w-6 h-6" /></a>
              <a href="#" aria-label="Twitter" className="text-gray-300 hover:text-accent transition-colors duration-300"><TwitterIcon className="w-6 h-6" /></a>
              <a href="#" aria-label="YouTube" className="text-gray-300 hover:text-accent transition-colors duration-300"><YoutubeIcon className="w-6 h-6" /></a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-700 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} SHM Social Service Provider. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
