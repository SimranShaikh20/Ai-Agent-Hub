
import { Bot, Github, Twitter, Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Task Automation', path: '/task-automation' },
    { name: 'Model Selector', path: '/llm-selector' },
    { name: 'Cost Estimator', path: '/cost-estimator' },
    { name: 'ROI Calculator', path: '/roi-calculator' },
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/SimranShaikh20', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/simran-shaikh-39207a23b', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:shaikhsimran20.2003@gmail.com', label: 'Email' },
  ];

  return (
    <footer className="border-t bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="p-2 gradient-primary rounded-xl">
                <Bot className="h-5 w-5 text-white" />
              </div>
              <span className="text-lg font-bold">AI Agent Hubs</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Empowering businesses with intelligent AI agents for automation, 
              analysis, and optimization.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">AI Agents</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

         

          {/* Social */}
          <div>
            <h3 className="font-semibold mb-4">Connect</h3>
            <div className="flex space-x-3">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    className="p-2 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
                    aria-label={social.label}
                  >
                    <IconComponent className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} AI Agent Hubs. All rights reserved. Built for innovation.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
