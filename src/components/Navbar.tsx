import { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
}

const Navbar = ({ activeSection }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <div className="navBar w-full h-16 flex px-6 fixed top-0 left-0 text-foreground bg-background/90 backdrop-blur-md z-50 border-b border-border/10">
      <div className="w-full max-w-6xl mx-auto flex items-center justify-between">
        {/* Logo/Name (Optional, but good for balance) */}
        <div className="text-xl font-bold gradient-text text-primary md:hidden">
          AV
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center justify-center gap-8 text-lg font-medium w-full">
          {navItems.map((item) => (
            <a
              key={item.id}
              onClick={() => handleClick(item.id)}
              className={`cursor-pointer transition-all duration-300 hover:text-primary ${activeSection === item.id
                ? 'text-primary drop-shadow-[0_0_15px_var(--color-primary)]'
                : 'text-muted-foreground'
                }`}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 top-16 bg-background/98 backdrop-blur-xl transition-all duration-300 md:hidden ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
      >
        <div className="flex flex-col items-center justify-center h-[calc(100vh-64px)] gap-8 text-2xl font-semibold">
          {navItems.map((item) => (
            <a
              key={item.id}
              onClick={() => handleClick(item.id)}
              className={`cursor-pointer transition-all duration-300 hover:scale-110 ${activeSection === item.id ? 'text-primary' : 'text-muted-foreground'
                }`}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;