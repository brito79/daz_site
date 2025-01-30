
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin, LinkedinIcon, X, Youtube } from 'lucide-react';
import Logo from '../common/Logo';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About DAZ */}
          <div>
            <div className="flex items-center mb-4">
              <Logo />
            </div>
            <p className="text-gray-400">
              Supporting people affected by dementia in Zimbabwe through awareness, 
              education, and community engagement.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-400 hover:text-daz-green">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/early-signs" className="text-gray-400 hover:text-daz-green">
                  Early Signs
                </Link>
              </li>
              <li>
                <Link to="/caregiver-support" className="text-gray-400 hover:text-daz-green">
                  Caregiver Support
                </Link>
              </li>
              <li>
                <Link to="/get-involved" className="text-gray-400 hover:text-daz-green">
                  Get Involved
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-2 text-daz-green" />
                <span className="text-gray-400">+263 242 776 290</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-2 text-daz-green" />
                <a href="mailto:info@daz.co.zw" className="text-gray-400 hover:text-daz-green">
                  info@daz.co.zw
                </a>
              </li>
              <li className="flex items-center">
                <MapPin className="w-5 h-5 mr-2 text-daz-green" />
                <span className="text-gray-400">Harare, Zimbabwe</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="Dementia Association of Zimbabwe – DAZ" className="text-gray-400 hover:text-daz-green">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="@DementiaAss-Zim" className="text-gray-400 hover:text-daz-green">
                <X className="w-6 h-6" />
              </a>
              <a href="@dementiaassociation-zim" className="text-gray-400 hover:text-daz-green">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="Dementia Association DAZ" className="text-gray-400 hover:text-daz-green">
                <LinkedinIcon className="w-6 h-6" />
              </a>
              <a href="@dementiaassociationofzimba388" className="text-gray-400 hover:text-daz-green">
                <Youtube className="w-6 h-6" />
              </a>
              
              
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Dementia Association of Zimbabwe. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;