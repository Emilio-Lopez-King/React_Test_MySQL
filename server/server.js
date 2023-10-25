const express = require("express");
const cors = require("cors");
const mysqlRoutes = require('./Routes/ArticleRoutes');
const config = require("./Conections/config");
const app = config(express());

app.use(express.json());
app.use(cors());
//Routes
app.use('/api/Articles', mysqlRoutes);

// Start Server
app.listen(app.get("port"), () => {
  console.log("Server on port", app.get("port"));
});
