import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-furniture.jpg';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center hero-section">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8 fade-in animate">
            <h1 className="text-4xl md:text-6xl font-bold text-primary leading-tight">
              Comfort meets
              <span className="text-accent block">Modern Design</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-md leading-relaxed">
              Discover our curated collection of premium furniture designed to transform your space into a haven of comfort and style.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="btn-accent text-lg px-8 py-4">
                Shop Collection
              </Button>
              <Button variant="outline" className="text-lg px-8 py-4 border-2">
                Learn More
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative fade-in animate">
            <div className="relative">
              <img
                src={heroImage}
                alt="Modern living room with comfortable furniture"
                className="w-full h-[600px] object-cover rounded-2xl shadow-[var(--shadow-hover)]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl"></div>
            </div>
            
            {/* Floating cards */}
            <div className="absolute -bottom-6 -left-6 bg-card p-6 rounded-xl shadow-[var(--shadow-soft)] border">
              <div className="text-2xl font-bold text-primary">1000+</div>
              <div className="text-sm text-muted-foreground">Happy Customers</div>
            </div>
            
            <div className="absolute -top-6 -right-6 bg-card p-6 rounded-xl shadow-[var(--shadow-soft)] border">
              <div className="text-2xl font-bold text-accent">Premium</div>
              <div className="text-sm text-muted-foreground">Quality Guaranteed</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;