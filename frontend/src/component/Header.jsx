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

    const handleNavClick = (href) => {
        setMobileMenuOpen(false);
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth'
            });
        }
    };

    return (
        <header className={`fixed md:px-45 top-0 left-0 right-0 w-full z-50 transition-all bg-white/90 duration-300 ${isScrolled ? 'md:bg-white/90 md:backdrop-blur-sm md:shadow-sm' : 'md:bg-transparent'}`}>
            <div className='container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-4'>
                <a href="#home" className="text-xl font-bold text-black z-50">
                    <span className='text-cyan-400'>Port</span>folio
                </a>
                
                {/* Desktop */}  
                <nav className="hidden md:flex space-x-8 items-center">
                    {navLinks.map((link) => (
                        <a 
                            key={link.name} 
                            href={link.href} 
                            className="text-sm font-medium text-gray-500 hover:text-gray-950 transition duration-300"
                            onClick={(e) => {
                                e.preventDefault();
                                handleNavClick(link.href);
                            }}
                        >
                            {link.name}
                        </a>
                    ))}
                    <Button>Resume</Button>
                </nav>
                
                {/* Hamburger icon */}
                <button 
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
                    className="md:hidden z-50 focus:outline-none"
                    aria-label="Toggle menu"
                >
                    <div className="space-y-1.5">
                        <span className={`block w-6 h-0.5 bg-black transition-all ${mobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
                        <span className={`block w-6 h-0.5 bg-black transition-opacity ${mobileMenuOpen ? 'opacity-0' : 'opacity-100'}`} />
                        <span className={`block w-6 h-0.5 bg-black transition-all ${mobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
                    </div>
                </button>

                {/* Mobile menu */}
                <div className={`fixed top-0 right-0 w-3/4 max-w-xs h-full bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden z-40`}>
                    <div className="flex flex-col items-start p-6 space-y-6 mt-16">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleNavClick(link.href);
                                }}
                                className="text-base font-medium text-gray-700 hover:text-cyan-500 transition duration-300"
                            >
                                {link.name}
                            </a>
                        ))}
                        <Button>Resume</Button>
                    </div>
                </div>

                {/* Overlay */}
                {mobileMenuOpen && (
                    <div
                        className="fixed inset-0 bg-opacity-50 z-30 md:hidden"
                        onClick={() => setMobileMenuOpen(false)}
                    ></div>
                )}
            </div>
      </header>
    );
}    

export default Header;