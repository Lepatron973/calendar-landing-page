import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { XCircle, ArrowLeft, HelpCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Cancel = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-accent/20 flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl w-full"
      >
        <div className="bg-card rounded-3xl shadow-card p-8 md:p-12 text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="w-20 h-20 rounded-full bg-orange-500/20 flex items-center justify-center mx-auto mb-6"
          >
            <XCircle className="w-12 h-12 text-orange-500" />
          </motion.div>

          <h1 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">
            Paiement annulé
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
            Votre paiement a été annulé. Aucun montant n'a été débité de votre compte.
          </p>

          <div className="bg-accent/30 rounded-xl p-6 mb-8 text-left">
            <div className="flex items-start gap-4 mb-4">
              <HelpCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-foreground mb-2">
                  Vous avez rencontré un problème ?
                </h3>
                <p className="text-muted-foreground">
                  Si vous avez des questions ou si quelque chose ne fonctionnait pas
                  correctement, n'hésitez pas à nous contacter. Nous sommes là pour vous
                  aider !
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button
              onClick={() => navigate("/")}
              variant="outline"
              className="px-8 py-6 text-lg"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Retour à l'accueil
            </Button>
            
            <Button
              onClick={() => {
                navigate("/");
                setTimeout(() => {
                  const pricingSection = document.getElementById("pricing");
                  if (pricingSection) {
                    pricingSection.scrollIntoView({ behavior: "smooth" });
                  }
                }, 100);
              }}
              className="bg-warm-gradient hover:opacity-90 text-primary-foreground shadow-glow px-8 py-6 text-lg"
            >
              Réessayer
            </Button>
          </div>

          <p className="text-sm text-muted-foreground mt-8">
            Besoin d'aide ? Contactez-nous à{" "}
            <a
              href="mailto:support@example.com"
              className="text-primary hover:underline"
            >
              support@example.com
            </a>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Cancel;
