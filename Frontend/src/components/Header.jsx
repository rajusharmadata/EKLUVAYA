import { Code, Users, Mic, Heart } from 'lucide-react';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50  bg-background/90 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo + Title */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <span className="text-white font-bold text-lg">E</span>
            </div>
            <div>
              <h1 className="text-xl font-bold gradient-text">EKLUVYA CLUB</h1>
              <p className="text-xs text-muted-foreground">Handale College</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#clubs" className="text-foreground hover:text-primary transition-colors">
              Clubs
            </a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors">
              About
            </a>
            <a href="#events" className="text-foreground hover:text-primary transition-colors">
              Events
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">
              Contact
            </a>
          </nav>

          {/* Pure Tailwind Button */}
          <button
            className="
              hidden md:inline-flex
              px-4 py-2
              rounded-lg
              bg-gradient-to-r from-primary to-secondary
              text-white font-semibold
              shadow-md
              hover:opacity-90
              transition
            "
          >
            Join Club
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
