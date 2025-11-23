import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Package, Download, Truck, Clock } from "lucide-react";
import { products } from "@/data/Products";
import { Link } from "react-router-dom";

const CTASection = () => {
  // console.log(process.env);
  return (
    <section className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-warm-gradient rounded-3xl p-8 md:p-12 text-center text-primary-foreground shadow-glow">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Prêt(e) à créer des souvenirs inoubliables ?
            </h2>
            <p className="text-lg md:text-xl mb-8 opacity-95 leading-relaxed">
              Ne laissez pas passer cette opportunité de transformer décembre en mois magique. 
              Vos enfants méritent plus que des chocolats, ils méritent votre présence.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-6">
                <Download className="w-10 h-10 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Version PDF</h3>
                <p className="text-2xl font-bold mb-4">4,99€</p>
                <Link to={products.find(p => p.id === 'product_pdf')?.link} target="_blank" rel="noopener noreferrer">
                <Button 
                  variant="secondary" 
                  size="lg" 
                  className="w-full"
                >
                  Télécharger maintenant
                </Button>
                </Link>
              </div>

              <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-6 ring-2 ring-primary-foreground/50">
                <Package className="w-10 h-10 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Pack Complet</h3>
                <p className="text-2xl font-bold mb-4">14,99€</p>
                <Link to={products.find(p => p.id === 'product_pack')?.link} target="_blank" rel="noopener noreferrer">
                <Button 
                  variant="secondary" 
                  size="lg" 
                  className="w-full bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                >
                  Commander le pack
                </Button>
                </Link>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4 text-sm opacity-90">
              <div className="flex items-center justify-center gap-2">
                <Truck className="w-5 h-5" />
                <span>Livraison en 48h pour le pack complet</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Clock className="w-5 h-5" />
                <span>Quantités limitées - Ne tardez pas !</span>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-12 bg-accent/30 rounded-xl p-6 text-center"
          >
            <p className="text-lg text-foreground font-medium mb-2">
              💝 Votre satisfaction est notre priorité
            </p>
            <p className="text-muted-foreground">
              Nous mettons tout en œuvre pour que votre expérience soit magique et mémorable. 
              N'hésitez pas à nous contacter pour toute question ou suggestion.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
