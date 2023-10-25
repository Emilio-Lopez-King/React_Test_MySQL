const express = require("express");
const cors = require("cors");
const config = require("./Conections/config");
const mongoose = require("mongoose");
const articleRoutes = require("./Routes/ArticleRoutes");

require("./Conections/database");

const app = config(express());
app.use(cors());
app.use(express.json());

// Agregar las rutas de los artículos
app.use("/api/Articles", articleRoutes);

// Iniciar el servidor
app.listen(app.get("port"), () => {
  console.log("Server on port", app.get("port"));
});