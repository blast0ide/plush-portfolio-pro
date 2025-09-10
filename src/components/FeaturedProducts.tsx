import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, ShoppingCart } from 'lucide-react';
import chairImage from '@/assets/chair-oak.jpg';
import sofaImage from '@/assets/sofa-beige.jpg';
import tableImage from '@/assets/table-walnut.jpg';

const products = [
  {
    id: 1,
    name: 'Oak Dining Chair',
    price: 299,
    originalPrice: 399,
    image: chairImage,
    category: 'Chairs',
    isNew: true,
  },
  {
    id: 2,
    name: 'Modern Sectional Sofa',
    price: 1299,
    originalPrice: 1599,
    image: sofaImage,
    category: 'Sofas',
    isNew: false,
  },
  {
    id: 3,
    name: 'Walnut Coffee Table',
    price: 599,
    originalPrice: 799,
    image: tableImage,
    category: 'Tables',
    isNew: true,
  },
];

const FeaturedProducts = () => {
  return (
    <section id="products" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in animate">
          <h2 className="text-3xl md:text-5xl font-bold text-primary mb-4">
            Featured Products
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our handpicked selection of premium furniture pieces that combine style, comfort, and durability.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card key={product.id} className="product-card group overflow-hidden border-0">
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Badges */}
                <div className="absolute top-4 left-4 flex gap-2">
                  {product.isNew && (
                    <span className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-medium">
                      New
                    </span>
                  )}
                  <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                    {Math.round((1 - product.price / product.originalPrice) * 100)}% OFF
                  </span>
                </div>

                {/* Wishlist Button */}
                <Button
                  size="icon"
                  variant="ghost"
                  className="absolute top-4 right-4 bg-background/80 backdrop-blur-sm hover:bg-accent hover:text-accent-foreground opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <Heart className="h-4 w-4" />
                </Button>

                {/* Quick Add Button */}
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Button className="w-full btn-primary">
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Quick Add
                  </Button>
                </div>
              </div>

              <CardContent className="p-6">
                <div className="mb-2">
                  <span className="text-sm text-accent font-medium">{product.category}</span>
                </div>
                <h3 className="text-xl font-semibold text-primary mb-3">{product.name}</h3>
                <div className="flex items-center gap-3">
                  <span className="text-2xl font-bold text-primary">${product.price}</span>
                  <span className="text-lg text-muted-foreground line-through">
                    ${product.originalPrice}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12 fade-in animate">
          <Button className="btn-accent text-lg px-12 py-4">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;