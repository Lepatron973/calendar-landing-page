import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle, Download, Mail } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Success = () => {
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
        <div className="bg-card rounded-3xl shadow-glow p-8 md:p-12 text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-6"
          >
            <CheckCircle className="w-12 h-12 text-green-500" />
          </motion.div>

          <h1 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">
            Paiement réussi ! 🎉
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
            Merci pour votre commande ! Vous allez recevoir un email de confirmation
            dans quelques instants.
          </p>

          <div className="bg-accent/30 rounded-xl p-6 mb-8 text-left">
            <div className="flex items-start gap-4 mb-4">
              <Mail className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-foreground mb-2">
                  Vérifiez votre boîte mail
                </h3>
                <p className="text-muted-foreground">
                  Vous recevrez un email avec tous les détails de votre commande et
                  les instructions pour accéder à votre produit.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Download className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-foreground mb-2">
                  Accès immédiat (Version PDF)
                </h3>
                <p className="text-muted-foreground">
                  Si vous avez commandé la version PDF, le lien de téléchargement
                  est déjà dans votre email de confirmation.
                </p>
              </div>
              
            </div>
          </div>

          <div className="space-y-4 m-4">
            <a href="/vite.svg" download="e-calendar.pdf">
            <Button
              className="w-full md:w-auto bg-warm-gradient hover:opacity-90 text-primary-foreground shadow-glow px-8 py-6 text-lg"
            >
              Télécharger
            </Button>
            </a>
          </div>
          <div className="space-y-4">
            <Button
              onClick={() => navigate("/")}
              className="w-full md:w-auto bg-warm-gradient hover:opacity-90 text-primary-foreground shadow-glow px-8 py-6 text-lg"
            >
              Retour à l'accueil
            </Button>
          </div>

          <p className="text-sm text-muted-foreground mt-8">
            Un problème ? Contactez-nous à{" "}
            <a
              href="mailto:calendrier.avent@outlook.fr"
              className="text-primary hover:underline"
            >
              calendrier.avent@outlook.fr
            </a>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Success;
