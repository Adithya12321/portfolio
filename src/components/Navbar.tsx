import { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
}

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

const Navbar = ({ activeSection }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);

  // Real hrefs, so these are focusable, announced as links, and deep-linkable.
  // preventDefault keeps the smooth scroll without a jump.
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    history.replaceState(null, '', `#${id}`);
    setIsOpen(false);
  };

  return (
    <nav aria-label="Primary" className="navBar w-full h-16 flex px-6 fixed top-0 left-0 text-foreground bg-background/90 backdrop-blur-md z-50 border-b border-border/10">
      <a href="#about" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:bg-primary focus:text-primary-foreground focus:px-4 focus:py-2 focus:rounded">
        Skip to content
      </a>

      <div className="w-full max-w-6xl mx-auto flex items-center justify-between">
        <a href="#home" onClick={(e) => handleClick(e, 'home')} className="text-xl font-bold gradient-text text-brand md:hidden shrink-0">
          AV
        </a>

        <div className="hidden md:flex items-center justify-center gap-6 text-lg font-medium flex-1">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => handleClick(e, item.id)}
              aria-current={activeSection === item.id ? 'true' : undefined}
              className={`px-3 py-2 rounded-md cursor-pointer transition-all duration-300 hover:text-brand ${activeSection === item.id
                ? 'text-brand dark:drop-shadow-[0_0_15px_var(--brand)]'
                : 'text-muted-foreground'
                }`}
            >
              {item.label}
            </a>
          ))}
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-foreground hover:text-brand transition-colors"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <div
        className={`fixed inset-0 top-16 bg-background/98 backdrop-blur-xl transition-all duration-300 md:hidden ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
        {...(!isOpen && { inert: '' as unknown as boolean })}
      >
        <div className="flex flex-col items-center justify-center h-[calc(100vh-64px)] gap-6 text-2xl font-semibold">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => handleClick(e, item.id)}
              aria-current={activeSection === item.id ? 'true' : undefined}
              className={`px-6 py-3 cursor-pointer transition-all duration-300 hover:scale-110 ${activeSection === item.id ? 'text-brand' : 'text-muted-foreground'
                }`}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
