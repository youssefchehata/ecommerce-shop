![Screenshot-20250324173146-1793x987](https://github.com/user-attachments/assets/b8b11ee6-1276-4b66-a469-e94d1f178d98)
![Screenshot-20250324173841-1788x873](https://github.com/user-attachments/assets/b13e1255-ac44-4d6f-b586-a293088f77ce)
![Screenshot-20250324173458-1648x839](https://github.com/user-attachments/assets/7da65bb2-75b3-480f-bd61-2668269e287b)
![Screenshot-20250324173521-1766x977](https://github.com/user-attachments/assets/729b41b0-3b90-487c-b089-c40e04afe292)
![Screenshot-20250324173555-1380x900](https://github.com/user-attachments/assets/305e1bcf-372f-434b-ae5e-fdc970091ecb)
![Screenshot-20250324173613-1610x977](https://github.com/user-attachments/assets/fbcc3415-88db-4ad9-8ed0-54fe701d05de)
![Screenshot-20250324173628-1648x931](https://github.com/user-attachments/assets/6e16aaeb-229e-4d57-a9a7-88351a6ab8dd)
![Screenshot-20250324173651-1624x953](https://github.com/user-attachments/assets/6aaec880-f757-4d6c-a6f3-9eb151605c1f)
![Screenshot-20250324173713-1619x966](https://github.com/user-attachments/assets/8d518350-7503-4e3b-a121-e443de5ffa60)



![Uploading image.png…]()
![alt text](image.png)

# ecommerce-shop
ecommerce website built with MERN &amp; Redux Toolkit
Un site e-commerce complet développé avec la stack MERN (MongoDB, Express, React, Node.js) et Redux Toolkit pour la gestion d'état globale.

## Table des Matières

1. [Description](#description)
2. [Fonctionnalités](#fonctionnalités)
3. [Technologies Utilisées](#technologies-utilisées)
4. [Installation](#installation)
5. [Scripts](#scripts)
6. [Utilisation](#utilisation)
7. [Seeder Data](#seeder-data)
8. [API](#api)
9. [Contributions](#contributions)
10. [Licence](#licence)

## Description

Ce projet est un site e-commerce complet qui permet aux utilisateurs de :
- Naviguer parmi des produits
- Ajouter des produits au panier
- Passer une commande
- Payer via un système de paiement intégré :(payPal)
- Voir l'historique des commandes

L'administrateur peut également :
- Ajouter, modifier ou supprimer des produits
- Gérer les commandes des clients
- Gérer les utilisateurs

## Fonctionnalités

- [x] Authentification utilisateur (JWT)
- [x] Système de panier d'achat
- [x] Paiement intégré (PayPal)
- [x] Gestion des commandes et des utilisateurs pour l'administrateur
- [x] Gestion du stock des produits
- [x] Système d'évaluation des produits

## Technologies Utilisées

- **Frontend** : React, Redux Toolkit, React Router
- **Backend** : Node.js, Express
- **Base de données** : MongoDB
- **Gestion d'état** : Redux Toolkit
- **Autres** : JWT (JSON Web Token) pour l'authentification, PayPal API pour le paiement

## Installation

### Pré-requis

Assurez-vous d'avoir installé les outils suivants sur votre machine :

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)

### Étapes d'installation

1. Clonez le dépôt :

```bash
git clone https://github.com/youssefchehata/ecommerce-shop.git 
```

2. Accédez au répertoire du projet :

```bash
cd ecommerce-shop
```

3. Installez les dépendances pour le frontend et le backend :

```bash
npm install && cd frontend npm install

```

4. Créez un fichier `.env` dans le répertoire principal et configurez les variables d'environnement comme suit :

```bash
# MongoDB URI
MONGO_URI=""

# JWT Secret
JWT_SECRET=your_jwt_secret

# PayPal Client ID
PAYPAL_CLIENT_ID=your_paypal_client_id

# Mode (development or production)
NODE_ENV=development

# Port
PORT=5000
```

### Seeder Data (Données de démarrage)

Le projet contient des données initiales pour les produits et les utilisateurs, vous pouvez les importer ou les supprimer avec les commandes suivantes :

- Pour importer les données :
  
  ```bash
  npm run data:import
  ```

- Pour supprimer les données :
  
  ```bash
  npm run data:destroy
  ```

## Scripts

Voici la liste des principaux scripts disponibles dans le projet :

- **Démarrer l'application en mode production** :

  ```bash
  npm start
  ```
  - Lance uniquement le serveur backend.

- **Démarrer le serveur backend avec Nodemon** :

  ```bash
  npm run server
  ```
  - Utilise Nodemon pour redémarrer automatiquement le serveur backend lors de changements dans les fichiers.

- **Démarrer le client React** :

  ```bash
  npm run client
  ```
  - Lance le serveur de développement React (frontend).

- **Démarrer le backend et le frontend en même temps (mode développement)** :

  ```bash
  npm run dev
  ```
  - Utilise `concurrently` pour exécuter le backend et le frontend simultanément.

- **Importer les données de démarrage (produits et utilisateurs)** :

  ```bash
  npm run data:import
  ```

- **Détruire les données de démarrage** :

  ```bash
  npm run data:destroy
  ```

## Utilisation

### Démarrage en mode développement

Pour démarrer l'application en mode développement avec le backend et le frontend exécutés simultanément, exécutez :

```bash
npm run dev
```

Le serveur backend s'exécute sur `http://localhost:5000` et le frontend sur `http://localhost:3000`.

### Démarrage en mode production

En mode production, assurez-vous d'abord de créer une version optimisée du frontend en exécutant :

```bash
cd frontend
npm run build
```

Ensuite, démarrez l'application en production avec :

```bash
npm start
```

## API

Le backend expose plusieurs endpoints pour gérer les produits, les commandes, et l'authentification. Voici un exemple d'endpoint pour récupérer les produits :

```bash
GET /api/products
```

- **Réponse** : Une liste des produits disponibles dans la base de données.



## Contributions


## Licence

Ce projet est sous licence [MIT](./LICENSE).
