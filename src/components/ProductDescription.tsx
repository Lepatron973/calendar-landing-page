import { motion } from "framer-motion";
import { Gift, Tag, BookOpen, Smile } from "lucide-react";

const ProductDescription = () => {
  const features = [
    {
      icon: Gift,
      title: "Le Bocal",
      description: "Un bocal décoratif que vous garnissez avec les 24 étiquettes fournies"
    },
    {
      icon: Tag,
      title: "24 Étiquettes",
      description: "Activités, mini-surprises et missions pensées pour créer du lien"
    },
    {
      icon: BookOpen,
      title: "Guide Pratique",
      description: "Conseils et astuces pour personnaliser selon vos enfants et votre emploi du temps"
    },
    {
      icon: Smile,
      title: "Adaptable",
      description: "Pour 1 ou plusieurs enfants, de 3 à 12 ans, ajustable à votre rythme"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
            Qu'est-ce que le{" "}
            <span className="bg-warm-gradient bg-clip-text text-transparent">
              Bocal de l'Avent
            </span>{" "}
            ?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Une alternative créative et chaleureuse au calendrier traditionnel. 
            Au lieu de chocolats, offrez à vos enfants 24 moments privilégiés qui 
            resteront gravés dans leur mémoire.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-xl p-6 shadow-card hover:shadow-glow transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-full bg-warm-gradient flex items-center justify-center mb-4">
                <feature.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 bg-soft-gradient rounded-2xl p-8 md:p-12"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-6 text-foreground text-center">
            Comment ça marche ?
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Préparez votre bocal",
                description: "Placez les 24 étiquettes dans votre bocal décoré"
              },
              {
                step: "2",
                title: "Un moment par jour",
                description: "Chaque jour de décembre, votre enfant tire une étiquette"
              },
              {
                step: "3",
                title: "Créez des souvenirs",
                description: "Réalisez ensemble l'activité ou la mission du jour"
              }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground text-2xl font-bold flex items-center justify-center mx-auto mb-4">
                  {item.step}
                </div>
                <h4 className="text-xl font-semibold mb-2 text-foreground">
                  {item.title}
                </h4>
                <p className="text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductDescription;
