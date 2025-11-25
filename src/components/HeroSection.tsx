import { motion } from "framer-motion";
import heroJar from "@/assets/hero-jar.jpg";

const HeroSection = () => {
  const phrases = [
    "24 moments qui comptent vraiment",
    "Zéro stress, zéro matériel à acheter",
    "Créatif + chaleureux + petit budget",
    "Un rituel qui rapproche chaque jour",
    "Valable pour 1 ou plusieurs enfants"
  ];

  return (
    <section className="relative overflow-hidden bg-soft-gradient">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
              Bocal de l'Avent à{" "}
              <span className="bg-warm-gradient bg-clip-text text-transparent">
                Moments
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-light">
              Un calendrier de l'avent qui crée de vrais souvenirs
            </p>
            <div className="space-y-3">
              {phrases.map((phrase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <p className="text-foreground font-medium">{phrase}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-glow">
              <img
                src={heroJar}
                alt="Bocal de l'Avent décoré avec étiquettes et ficelle de jute"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
