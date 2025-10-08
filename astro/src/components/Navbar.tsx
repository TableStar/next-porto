const Navbar = () => {
  return (
    <nav className="border-b border-[var(--color-border)] py-4 px-6">
      <div className="max-w-4xl mx-auto flex justify-between items-center">
        <div className="text-[var(--color-accent)]">~/afra-hanifi</div>
        <div className="flex gap-6 text-sm">
          <a href="#about" className="text-[var(--color-text)] hover:text-[var(--color-accent)] transition-colors">about</a>
          <a href="#projects" className="text-[var(--color-text)] hover:text-[var(--color-accent)] transition-colors">projects</a>
          <a href="#contact" className="text-[var(--color-text)] hover:text-[var(--color-accent)] transition-colors">contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
