FROM node:20-alpine3.16

# Définir le répertoire de travail dans le conteneur
WORKDIR /app

# Copier package.json et package-lock.json depuis le dossier parent
COPY ../package.json ./
COPY ../package-lock.json ./

# Installer les dépendances
RUN npm install

# Copier tous les fichiers du dossier backend dans le conteneur
COPY backend/ ./backend/

# Copier le fichier .env dans le conteneur (assurez-vous que ce fichier est dans votre répertoire racine)
COPY ../.env ./

# Définir la variable d'environnement pour le port
ENV PORT=5000

# Exposer le port
EXPOSE 5000

# Lancer l'application
CMD ["npm", "start"]
