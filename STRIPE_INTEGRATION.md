# Intégration Stripe - Calendrier de l'Avent

## 📋 Vue d'ensemble

Ce projet intègre Stripe Checkout pour gérer les paiements de deux produits :
1. **Version PDF** (4,99€) - ID: `prod_TTe88GQiPdn9KX`
2. **Pack Complet** (14,99€) - ID: `prod_TTe9LrOtJ6JDVB`

## 🔧 Configuration

### Variables d'environnement

Les variables suivantes sont configurées dans `.env.local` :

```env
VITE_STRIPE_PUBLIC_KEY=pk_test_51SWgoZAClnoWYGHRme20STlLerDJIbm4NXe8W02cbIQIcKyFeki1s1So7j0bItbZf8WvNTiT0WqqA6wxJGvRr8Dr00UFBUZwAU
VITE_PRODUCT_1=prod_TTe88GQiPdn9KX
VITE_PRODUCT_2=prod_TTe9LrOtJ6JDVB
```

⚠️ **Important** : Ces clés sont en mode TEST. Pour la production, remplacez par vos clés live.

## 📁 Structure des fichiers

```
src/
├── lib/
│   ├── stripe.ts          # Configuration et initialisation de Stripe
│   └── checkout.ts        # Logique de redirection vers Stripe Checkout
├── components/
│   └── PricingSection.tsx # Section pricing avec boutons de paiement
└── pages/
    ├── Success.tsx        # Page de confirmation après paiement réussi
    └── Cancel.tsx         # Page affichée si l'utilisateur annule
```

## 🚀 Fonctionnement

### 1. Configuration Stripe (`src/lib/stripe.ts`)
- Initialise Stripe avec la clé publique
- Exporte les IDs des produits

### 2. Gestion du Checkout (`src/lib/checkout.ts`)
- Fonction `redirectToCheckout()` qui redirige vers Stripe Checkout
- Gère les erreurs et les callbacks de succès/annulation

### 3. Interface utilisateur (`src/components/PricingSection.tsx`)
- Affiche les deux produits avec leurs caractéristiques
- Boutons de paiement connectés à Stripe
- États de chargement pendant la redirection
- Notifications d'erreur via toast

### 4. Pages de retour
- `/success` : Confirmation de paiement réussi
- `/cancel` : Page d'annulation du paiement

## 🔄 Flux de paiement

1. L'utilisateur clique sur "Télécharger maintenant" ou "Commander le pack complet"
2. Le bouton affiche "Redirection..."
3. Redirection vers Stripe Checkout avec l'ID du produit
4. L'utilisateur complète le paiement sur Stripe
5. Redirection vers `/success` ou `/cancel` selon le résultat

## 🛠️ Installation

```bash
npm install @stripe/stripe-js
```

## 📝 Notes importantes

### Configuration Stripe Dashboard

Pour que l'intégration fonctionne, configurez dans votre Dashboard Stripe :

1. **Products** : Assurez-vous que les produits existent avec les bons IDs
2. **Prices** : Chaque produit doit avoir un Price ID (c'est ce qu'on utilise pour le checkout)
3. **Checkout Settings** :
   - URLs de succès : `https://votre-domaine.com/success`
   - URLs d'annulation : `https://votre-domaine.com/cancel`

### Utilisation des Price IDs vs Product IDs

⚠️ **Attention** : Stripe Checkout nécessite des **Price IDs** (commençant par `price_`), pas des Product IDs (commençant par `prod_`).

Si vous rencontrez une erreur lors du checkout, vous devez :

1. Aller sur votre Dashboard Stripe
2. Trouver vos produits
3. Copier les **Price IDs** au lieu des Product IDs
4. Mettre à jour `.env.local` avec les Price IDs

Exemple :
```env
# ❌ Incorrect (Product IDs)
VITE_PRODUCT_1=prod_TTe88GQiPdn9KX

# ✅ Correct (Price IDs)
VITE_PRODUCT_1=price_xxxxxxxxxxxxx
```

## 🧪 Mode Test

Actuellement en mode test. Utilisez ces cartes de test Stripe :
- **Succès** : 4242 4242 4242 4242
- **Échec** : 4000 0000 0000 0002

## 📦 Déploiement

Avant de déployer en production :

1. Remplacez `VITE_STRIPE_PUBLIC_KEY` par votre clé publique live
2. Vérifiez que les Price IDs correspondent à vos produits live
3. Configurez les webhooks Stripe pour gérer les événements de paiement
4. Testez le parcours complet de paiement

## 🔒 Sécurité

- ✅ Seule la clé publique est exposée côté client
- ✅ Les paiements sont traités par Stripe (PCI-DSS compliant)
- ⚠️ Ne commitez jamais les clés secrètes dans Git
- ⚠️ Ajoutez `.env.local` à `.gitignore`
