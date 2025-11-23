import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, Download, Package, Star } from "lucide-react";
import { useState } from "react";
import { redirectToCheckout } from "@/lib/checkout";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";
import { products } from "@/data/Products";

const PricingSection = () => {
  const [isLoading, setIsLoading] = useState<string | null>(null);
  const { toast } = useToast();
interface Product {
  id: string;
  name: string;
  price: string;
  description: string;
  link: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  features: string[];
  cta: string;
  popular?: boolean;
}
  const handleCheckout = async (product: Product) => {
    setIsLoading(product.id);
    location.href = product.link 
    // try {
    //   await redirectToCheckout({ priceId: productId });
    // } catch (error) {
    //   console.error('Erreur lors du paiement:', error);
    //   toast({
    //     title: "Erreur",
    //     description: "Une erreur est survenue lors de la redirection vers le paiement. Veuillez réessayer.",
    //     variant: "destructive",
    //   });
    //   setIsLoading(null);
    // }
  };

 

  return (
    <section id="pricing" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
            Choisissez votre{" "}
            <span className="bg-warm-gradient bg-clip-text text-transparent">
              formule
            </span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Deux options pour s'adapter à vos envies et votre budget
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative bg-card rounded-2xl p-8 shadow-card hover:shadow-glow transition-all duration-300 ${
                product.popular ? "ring-2 ring-primary" : ""
              }`}
            >
              {product.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="bg-warm-gradient text-primary-foreground px-6 py-2 rounded-full text-sm font-semibold flex items-center gap-2 shadow-glow">
                    <Star className="w-4 h-4 fill-current" />
                    Le plus populaire
                  </div>
                </div>
              )}

              <div className="text-center mb-6">
                <div className="w-16 h-16 rounded-full bg-warm-gradient flex items-center justify-center mx-auto mb-4">
                  <product.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  {product.name}
                </h3>
                <p className="text-muted-foreground mb-4">{product.description}</p>
                <div className="text-4xl font-bold text-primary mb-2">
                  {product.price}
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {product.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-secondary/20 flex items-center justify-center mt-0.5">
                      <Check className="w-3 h-3 text-secondary" />
                    </div>
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
                <Link to={product.link} target="_blank" rel="noopener noreferrer">
              <Button 
                className={`w-full text-lg py-6 ${
                  product.popular 
                    ? "bg-warm-gradient hover:opacity-90 text-primary-foreground shadow-glow" 
                    : ""
                }`}
                variant={product.popular ? "default" : "outline"}
                size="lg"
                // onClick={() => handleCheckout(product.id, product.name)}
                disabled={isLoading !== null}
              >
                {isLoading === product.id ? "Redirection..." : product.cta}
              </Button>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <div className="bg-accent/30 rounded-xl p-6 max-w-3xl mx-auto">
            <p className="text-lg text-foreground font-medium mb-2">
              🎁 Adaptable pour plusieurs enfants
            </p>
            <p className="text-muted-foreground">
              Pas de jalousie ! Le guide inclut des astuces pour adapter chaque activité 
              à plusieurs enfants d'âges différents.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;
