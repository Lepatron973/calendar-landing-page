import { motion } from "framer-motion";
import { Heart, Sparkles, Clock } from "lucide-react";
import familyMoment from "@/assets/family-moment.jpg";

const EmotionalSection = () => {
  const benefits = [
    {
      icon: Heart,
      title: "Des souvenirs qui durent",
      description: "Pas de jouets oubliés, juste des moments précieux gravés dans leur cœur"
    },
    {
      icon: Sparkles,
      title: "Facile même débordée",
      description: "Tout est prêt, aucune préparation compliquée. Juste ouvrir et profiter"
    },
    {
      icon: Clock,
      title: "15 minutes de magie",
      description: "Un quart d'heure par jour pour créer un lien plus fort avec votre enfant"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
            Et si cette année, vous créiez{" "}
            <span className="bg-warm-gradient bg-clip-text text-transparent">
              de vrais souvenirs
            </span>{" "}
            ?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto font-light leading-relaxed">
            Oubliez le stress des calendriers traditionnels. Avec le Bocal de l'Avent à Moments, 
            chaque jour devient une opportunité de rapprocher votre famille, sans pression, 
            sans budget énorme, sans charge mentale.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 md:order-1"
          >
            <div className="space-y-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/50 flex items-center justify-center">
                    <benefit.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-foreground">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 md:order-2"
          >
            <div className="rounded-2xl overflow-hidden shadow-card">
              <img
                src={familyMoment}
                alt="Maman et enfant partageant un moment chaleureux"
                className="w-full h-auto object-cover"
              />
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-accent/30 rounded-2xl p-8 md:p-12 text-center"
        >
          <p className="text-lg md:text-2xl text-foreground font-light leading-relaxed italic">
            "Parce que les meilleurs cadeaux ne se trouvent pas dans les magasins, 
            mais dans les moments partagés."
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default EmotionalSection;
