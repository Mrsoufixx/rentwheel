// Importer le module mongoose
const mongoose = require("mongoose");

// Charger les variables d'environnement à partir du fichier .env
require('dotenv').config();

// Établir la connexion à MongoDB en utilisant la variable d'environnement DATABASE
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => {
    // Si la connexion est réussie, afficher "connection successful"
    console.log("connection successful");
  })
  .catch((err) => {
    // Si la connexion échoue, afficher "no connection" ainsi que l'erreur associée
    console.log("no connection", err.message);
  });

