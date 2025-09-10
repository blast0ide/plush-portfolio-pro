import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="py-16 grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Comfort & Co.</h3>
            <p className="text-primary-foreground/80 leading-relaxed">
              Creating beautiful, comfortable spaces for your home since 1985. Quality furniture that stands the test of time.
            </p>
            <div className="flex space-x-4">
              <Button size="icon" variant="ghost" className="text-primary-foreground hover:text-accent hover:bg-primary-foreground/10">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="ghost" className="text-primary-foreground hover:text-accent hover:bg-primary-foreground/10">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="ghost" className="text-primary-foreground hover:text-accent hover:bg-primary-foreground/10">
                <Twitter className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <nav className="space-y-3">
              {['Home', 'Products', 'About Us', 'Contact', 'Showrooms', 'Delivery Info'].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase().replace(' ', '-')}`}
                  className="block text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  {link}
                </a>
              ))}
            </nav>
          </div>

          {/* Categories */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">Categories</h4>
            <nav className="space-y-3">
              {['Living Room', 'Bedroom', 'Dining Room', 'Office', 'Outdoor', 'Decor'].map((category) => (
                <a
                  key={category}
                  href={`#${category.toLowerCase().replace(' ', '-')}`}
                  className="block text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  {category}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact & Newsletter */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">Stay Connected</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-primary-foreground/80">
                <Phone className="h-4 w-4" />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-primary-foreground/80">
                <Mail className="h-4 w-4" />
                <span>hello@comfortco.com</span>
              </div>
              <div className="flex items-center space-x-3 text-primary-foreground/80">
                <MapPin className="h-4 w-4" />
                <span>123 Design St, NY 10001</span>
              </div>
            </div>
            
            {/* Newsletter */}
            <div className="space-y-3">
              <p className="text-sm text-primary-foreground/80">
                Subscribe for exclusive offers and new arrivals
              </p>
              <div className="flex space-x-2">
                <Input 
                  type="email" 
                  placeholder="Your email"
                  className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60"
                />
                <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center text-primary-foreground/80 text-sm">
            <p>&copy; 2024 Comfort & Co. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#privacy" className="hover:text-accent transition-colors">Privacy Policy</a>
              <a href="#terms" className="hover:text-accent transition-colors">Terms of Service</a>
              <a href="#returns" className="hover:text-accent transition-colors">Returns</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;