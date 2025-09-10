import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Award, Truck, Shield, Users } from 'lucide-react';

const features = [
  {
    icon: Award,
    title: 'Premium Quality',
    description: 'Every piece is crafted from the finest materials with attention to detail.',
  },
  {
    icon: Truck,
    title: 'Free Delivery',
    description: 'Complimentary white-glove delivery and setup service nationwide.',
  },
  {
    icon: Shield,
    title: 'Lifetime Warranty',
    description: 'Comprehensive warranty coverage for all our furniture pieces.',
  },
  {
    icon: Users,
    title: 'Expert Support',
    description: 'Our design consultants help you create the perfect space.',
  },
];

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8 fade-in animate">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6">
                Crafting Comfort Since 1985
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                For nearly four decades, Comfort & Co. has been dedicated to creating furniture that doesn't just fill your space—it transforms it. Our passion for exceptional craftsmanship and timeless design has made us a trusted name in homes across the country.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We believe that great furniture should tell a story, create memories, and stand the test of time. That's why every piece in our collection is thoughtfully designed and meticulously crafted by skilled artisans who share our commitment to excellence.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="btn-accent">
                Our Story
              </Button>
              <Button variant="outline" className="border-2">
                Visit Showroom
              </Button>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="product-card border-0 bg-card">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">
                    <div className="p-3 bg-accent/10 rounded-xl">
                      <feature.icon className="h-8 w-8 text-accent" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 pt-16 border-t border-border">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="fade-in animate">
              <div className="text-4xl font-bold text-accent mb-2">38+</div>
              <div className="text-muted-foreground">Years of Excellence</div>
            </div>
            <div className="fade-in animate">
              <div className="text-4xl font-bold text-accent mb-2">50k+</div>
              <div className="text-muted-foreground">Happy Customers</div>
            </div>
            <div className="fade-in animate">
              <div className="text-4xl font-bold text-accent mb-2">1000+</div>
              <div className="text-muted-foreground">Products Available</div>
            </div>
            <div className="fade-in animate">
              <div className="text-4xl font-bold text-accent mb-2">200+</div>
              <div className="text-muted-foreground">Showrooms Nationwide</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;