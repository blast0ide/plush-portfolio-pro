import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, ShoppingCart } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-primary">Comfort & Co.</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-foreground hover:text-accent transition-colors">
              Home
            </a>
            <a href="#products" className="text-foreground hover:text-accent transition-colors">
              Products
            </a>
            <a href="#about" className="text-foreground hover:text-accent transition-colors">
              About
            </a>
            <a href="#contact" className="text-foreground hover:text-accent transition-colors">
              Contact
            </a>
          </nav>

          {/* Cart & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-accent text-accent-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
                0
              </span>
            </Button>
            
            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={toggleMenu}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border">
            <nav className="py-4 space-y-2">
              <a
                href="#home"
                className="block px-4 py-2 text-foreground hover:text-accent hover:bg-secondary/50 rounded-lg transition-colors"
                onClick={toggleMenu}
              >
                Home
              </a>
              <a
                href="#products"
                className="block px-4 py-2 text-foreground hover:text-accent hover:bg-secondary/50 rounded-lg transition-colors"
                onClick={toggleMenu}
              >
                Products
              </a>
              <a
                href="#about"
                className="block px-4 py-2 text-foreground hover:text-accent hover:bg-secondary/50 rounded-lg transition-colors"
                onClick={toggleMenu}
              >
                About
              </a>
              <a
                href="#contact"
                className="block px-4 py-2 text-foreground hover:text-accent hover:bg-secondary/50 rounded-lg transition-colors"
                onClick={toggleMenu}
              >
                Contact
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;