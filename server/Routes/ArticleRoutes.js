const express = require("express");
const router = express.Router();
const { createDBConnection } = require("../Conections/database");

// Ruta para crear un artículo
router.post("/InsertArticles", async (req, res) => {
  try {
    const { title, author, content } = req.body;

    if (!title || !author || !content) {
      return res.status(400).json({ error: "Todos los campos son obligatorios." });
    }

    const connection = await createDBConnection();

    const [rows] = await connection.execute("CALL InsertArticle(?, ?, ?)", [title, author, content]);

    await connection.end();

    if (rows[0].message) {
      return res.status(400).json({ error: rows[0].message });
    }

    const newArticle = {
      id: rows[0].insertId,
      title,
      author,
      content,
    };

    res.json(newArticle);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al crear el artículo" });
  }
});

// Ruta para obtener todos los artículos
router.get("/GetArticles", async (req, res) => {
  try {
    const connection = await createDBConnection();

    const [rows] = await connection.execute("CALL GetArticles()");

    await connection.end();

    if (rows[0].message) {
      return res.status(200).json({ message: rows[0].message });
    }

    res.status(200).json(rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener los artículos" });
  }
});

// Ruta para editar un artículo
router.put("/EditArticle/:articleId", async (req, res) => {
  try {
    const { title, author, content } = req.body;
    const { articleId } = req.params;

    if (!title || !author || !content) {
      return res.status(400).json({ error: "Todos los campos son obligatorios." });
    }

    const connection = await createDBConnection();

    const [rows] = await connection.execute("CALL EditArticle(?, ?, ?, ?)", [articleId, title, author, content]);

    await connection.end();

    if (rows[0].message) {
      return res.status(400).json({ error: rows[0].message });
    }

    if (rows[0].affectedRows === 0) {
      return res.status(404).json({ error: "Artículo no encontrado" });
    }

    res.status(200).json({ message: "Artículo actualizado con éxito." });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al editar el artículo" });
  }
});

// Ruta para eliminar un artículo
router.delete("/DeleteArticle/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const connection = await createDBConnection();

    const [rows] = await connection.execute("CALL DeleteArticle(?)", [id]);

    await connection.end();

    if (rows[0].message) {
      return res.status(404).json({ error: rows[0].message });
    }

    res.status(200).json({ message: "El artículo se ha eliminado con éxito." });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al eliminar el artículo" });
  }
});

module.exports = router;