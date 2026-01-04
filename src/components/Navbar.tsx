

interface NavbarProps {
  activeSection: string;
}

const Navbar = ({ activeSection }: NavbarProps) => {

  const handleClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <div className="navBar w-full h-16 flex px-2 fixed top-0 left-0 text-foreground bg-background/90 backdrop-blur-md z-10 border-b border-border/10">
      <div className="navigation w-full h-full flex items-center justify-center gap-8 text-lg font-medium">
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
    </div>
  );
};

export default Navbar;