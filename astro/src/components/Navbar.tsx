import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const navLinks = [
  { title: "About", path: "#about" },
  { title: "Portfolio", path: "#portfolio" },
];

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const toggleNav = () => setNav(!nav);
  const closeNav = () => setNav(false);

  return (
    <header className="pt-6">
      {/* Desktop Menu */}
      <nav className="hidden md:flex justify-center items-center max-w-xs mx-auto">
        <ul className="flex flex-row items-center space-x-8 p-4">
          {navLinks.map((link) => (
            <li key={link.path}>
              <a href={link.path} className="hover:text-[var(--color-accent)] transition-colors">
                {link.title}
              </a>
            </li>
          ))}
          <li>
            <a href="#contact" className="font-bold hover:text-[var(--color-accent)] transition-colors">
              Contact Me
            </a>
          </li>
        </ul>
      </nav>

      {/* Mobile Menu Button */}
      <div className="md:hidden flex justify-end p-4">
          <button onClick={toggleNav} className="absolute top-5 right-5 border rounded border-white/70 p-2 z-50">
            {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
          </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-black/90 z-40 md:hidden ${nav ? 'block' : 'hidden'}`}>
        <nav className="flex flex-col items-center justify-center h-full">
          <ul className="text-4xl font-semibold text-center space-y-8">
            {navLinks.map((link) => (
              <li key={link.path}>
                <a href={link.path} onClick={closeNav}>
                  {link.title}
                </a>
              </li>
            ))}
             <li>
                <a href="#contact" onClick={closeNav}>
                  Contact Me
                </a>
              </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
