 import { Check, Download, Package, Star } from "lucide-react";
 
 export const products = [
    {
      id: "product_pdf",
      name: "Version PDF",
      price: "4,99€",
      description: "Simple et accessible",
      link: import.meta.env.VITE_PRODUCT_1,
      icon: Download,
      features: [
        "24 étiquettes à imprimer",
        "Guide d'utilisation complet",
        "Format PDF haute qualité",
        "Livraison immédiate par email",
        "Imprimez autant que vous voulez"
      ],
      cta: "Télécharger maintenant",
      popular: false
    },
    {
      id: 'product_pack',
      name: "Pack Complet",
      price: "14,99€",
      description: "Prêt à utiliser, zéro effort",
      icon: Package,
      link: import.meta.env.VITE_PRODUCT_2,
      features: [
        "24 étiquettes déjà imprimées",
        "Ficelle de jute naturelle",
        "Sticker décoratif pour le bocal",
        "Guide d'utilisation",
        "E-book BONUS : 50+ idées supplémentaires",
        "Recettes de Noël express",
        "Mini-missions créatives",
        "Astuces pour plusieurs enfants",
        "Activités de 5 minutes",
        "Livraison en 48h",
        "Quantités limitées"
      ],
      cta: "Commander le pack complet",
      popular: true
    }
  ];