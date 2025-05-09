import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: <Github className="h-5 w-5" />, href: "https://github.com/hvandien04/" },
    { icon: <Linkedin className="h-5 w-5" />, href: "#" },
    { icon: <Mail className="h-5 w-5" />, href: "mailto:Hoangvandien051004@gmail.com" },
  ];
  const scrollToId = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto md:px-24">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <a href="#home" className="text-xl font-bold">
              <span className="text-cyan-400">Port</span>folio
            </a>
          </div>
          
          <div className="flex flex-wrap justify-center space-x-4 mb-4 md:mb-0">
            <a href="#home"   className="hover:text-cyan-400 transition-colors">Home</a>
            <a href="#about"  className="hover:text-cyan-400 transition-colors">About</a>
            <a href="#skills" className="hover:text-cyan-400 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a>
            <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
          </div>
          
          <div className="flex space-x-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyan-400 transition-colors"
                
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-6 pt-6 text-center text-sm text-white/60">
          <p>© {currentYear} ZienDev. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;