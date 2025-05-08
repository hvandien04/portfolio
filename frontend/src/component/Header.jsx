import { useState, useEffect } from 'react';
import Button from './ui/Button';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
          if (window.scrollY > 10) {
            setIsScrolled(true);
          } else {
            setIsScrolled(false);
          }
        };
    
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      }, []);

    const navLinks = [
        { name: "Home", href: "#home" },
        { name: "About", href: "#about" },
        { name: "Skills", href: "#skills" },
        { name: "Projects", href: "#projects" },
        { name: "Contact", href: "#contact" },
    ];


    return (
        <header className={`px-45 fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-sm shadow-sm' : 'bg-transparent'}`}>
            <div className='container mx-auto flex justify-between items-center py-4'>
                <a href="#home" className="text-xl font-bold text-black" ><span className='text-cyan-400'>Port</span>folio</a>
                {/* Desktop */}  
                <nav className="hidden md:flex space-x-8">
                    {navLinks.map((link) => (
                        <a key={link.name} href={link.href} className="text-sm font-medium text-gray-500 hover:text-gray-950 transition duration-300 content-center">{link.name}</a>
                    ))}

                    <Button> Resume</Button>
                </nav>
            </div>
        </header>
    );
}    

export default Header;