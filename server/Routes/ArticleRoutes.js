const express = require("express");
const router = express.Router();
const Article = require("../Models/Articles");
const { check, validationResult } = require("express-validator");

// Crear un artículo
router.post("/InsertArticles", [
  check("title").notEmpty(),
  check("author").notEmpty(),
  check("content").notEmpty(),
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const newArticle = new Article(req.body);
    await newArticle.save();
    res.json(newArticle);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al crear el artículo" });
  }
});

// Obtener todos los artículos
router.get("/GetArticles", async (req, res) => {
  try {
    let message = 'artículos encontrados';
    const articles = await Article.find().exec();
    if(!articles.length) {
      message = 'No existen artículos publicados aun.';
  }
  return res.status(200).json(articles);
  } 
  catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener los artículos: "+ message });
  }
});

router.put("/EditArticle/:articleId", [
  check("title").notEmpty(),
  check("author").notEmpty(),
  check("content").notEmpty(),
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { articleId } = req.params;
    const updatedArticleData = req.body;

    const updatedArticle = await Article.findByIdAndUpdate(
      articleId,
      updatedArticleData,
      { new: true }
    );

    if (!updatedArticle) {
      return res.status(404).json({ error: "Artículo no encontrado" });
    }

    res.json(updatedArticle);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al editar el artículo" });
  }
});

router.delete("/DeleteArticle/:id", async (req, res) => {
  try {
    const articleId = req.params.id;

    const existingArticle = await Article.findById(articleId);

    if (!existingArticle) {
      return res.status(404).json({ error: "El artículo no existe." });
    }

    await Article.findByIdAndDelete(articleId);

    res.json({ message: "El artículo se ha eliminado con éxito." });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al eliminar el artículo." });
  }
});

module.exports = router;