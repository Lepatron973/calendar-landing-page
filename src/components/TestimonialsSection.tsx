import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sophie, maman de Léa (7 ans) et Tom (4 ans)",
      quote: "Franchement, c'est génial ! Plus besoin de me creuser la tête pour trouver des activités. Les enfants adorent tirer leur étiquette chaque matin. Et moi j'adore voir leurs yeux briller.",
      highlight: "Simplicité et complicité"
    },
    {
      name: "Marion, maman de Jules (6 ans)",
      quote: "J'avais peur que ce soit compliqué ou que ça me rajoute du stress, mais pas du tout ! Tout est déjà pensé. C'est devenu notre moment privilégié de la journée.",
      highlight: "Zéro stress"
    },
    {
      name: "Émilie, maman de Chloé (9 ans) et Noah (5 ans)",
      quote: "Mes enfants ne se disputent plus pour savoir qui aura quoi. Ils font les activités ensemble et ça les rapproche. C'est magique de les voir coopérer comme ça !",
      highlight: "Harmonie familiale"
    },
    {
      name: "Laura, maman de Lucas (8 ans)",
      quote: "Fini les calendriers avec des chocolats qu'il engloutit en 2 secondes. Là, on crée de vrais souvenirs. Il m'a dit : 'Maman, c'est le meilleur calendrier de l'avent que j'ai jamais eu !'",
      highlight: "Des souvenirs inoubliables"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-soft-gradient">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
            Ce que disent les{" "}
            <span className="bg-warm-gradient bg-clip-text text-transparent">
              mamans
            </span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Elles ont testé, elles ont adoré, et leurs enfants aussi !
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-xl p-8 shadow-card hover:shadow-glow transition-all duration-300 relative"
            >
              <Quote className="w-10 h-10 text-primary/20 absolute top-6 right-6" />
              <div className="mb-4">
                <div className="inline-block bg-accent/50 text-accent-foreground px-4 py-1 rounded-full text-sm font-medium mb-4">
                  {testimonial.highlight}
                </div>
              </div>
              <p className="text-foreground text-lg leading-relaxed mb-6 italic">
                "{testimonial.quote}"
              </p>
              <p className="text-muted-foreground font-medium">
                — {testimonial.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
