import { motion } from "framer-motion";
import { Brain, Euro, Clock, Users } from "lucide-react";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: Brain,
      title: "Zéro charge mentale",
      description: "Tout est pensé pour vous. Plus besoin de chercher des idées d'activités ou de vous creuser la tête chaque soir.",
      color: "bg-primary"
    },
    {
      icon: Euro,
      title: "Petit budget, grand impact",
      description: "La plupart des activités ne nécessitent aucun achat. Utilisez ce que vous avez déjà à la maison.",
      color: "bg-secondary"
    },
    {
      icon: Clock,
      title: "15 minutes = lien plus fort",
      description: "Pas besoin d'heures. Un quart d'heure de qualité vaut mieux qu'une journée distraite.",
      color: "bg-accent"
    },
    {
      icon: Users,
      title: "Un rituel attendu",
      description: "Votre enfant comptera les jours. Ce moment deviendra LE rendez-vous privilégié de sa journée.",
      color: "bg-muted"
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
            Pourquoi les mamans{" "}
            <span className="bg-warm-gradient bg-clip-text text-transparent">
              adorent
            </span>{" "}
            ce calendrier ?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Parce qu'il transforme décembre en mois de connexion, 
            sans vous rajouter de stress ni de dépenses.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-background rounded-xl p-8 shadow-card hover:shadow-glow transition-all duration-300"
            >
              <div className={`w-16 h-16 rounded-full ${benefit.color} bg-opacity-20 flex items-center justify-center mb-6`}>
                <benefit.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-foreground">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="bg-accent/30 rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
            <p className="text-xl md:text-2xl text-foreground font-medium leading-relaxed mb-4">
              "Ce n'est pas juste un calendrier de l'avent..."
            </p>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              C'est une opportunité de ralentir, de profiter, et de créer des souvenirs 
              que vos enfants chériront toute leur vie. Et le meilleur ? 
              Vous en profiterez autant qu'eux.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BenefitsSection;
