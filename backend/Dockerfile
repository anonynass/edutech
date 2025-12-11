# Image Node légère
FROM node:18-alpine

# Dossier de travail
WORKDIR /app

# Copier les fichiers de dépendances
COPY package*.json ./

# Installer les dépendances
RUN npm install --production

# Copier le reste du code
COPY . .

# Exposer le port du backend
EXPOSE 4000

# Commande de démarrage
CMD ["npm", "start"]
