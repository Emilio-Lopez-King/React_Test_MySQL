import React, { useState, useEffect } from "react";
import { createArticle, editArticle } from "../Functions/Articles";
import { useArticleContext } from "./Context/ArticleContext";
import { BsEraserFill } from "react-icons/bs";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddArticle = () => {
  const isOnline = navigator.onLine;

  const { selectedArticle, isEditing, setIsEditing, setHaveNewData } =
    useArticleContext();

  const [articleData, setArticleData] = useState({
    title: "",
    author: "",
    content: "",
  });

  useEffect(() => {
    if (selectedArticle) {
      setArticleData({
        title: selectedArticle.title || "",
        author: selectedArticle.author || "",
        content: selectedArticle.content || "",
      });
    }
  }, [selectedArticle]);

  const cancelEditing = () => {
    setArticleData({
      title: "",
      author: "",
      content: "",
    });
    setIsEditing(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (articleData.title && articleData.author && articleData.content) {
      createArticle(
        articleData,
        (data) => {
          toast.success("El artículo se ha creado con éxito");
          setArticleData({
            title: "",
            author: "",
            content: "",
          });
          setHaveNewData(true);
        },
        (error) => {
          toast.error("Hubo un error al crear el artículo.");
        }
      );
    } else {
      toast.error("Por favor, completa todos los campos requeridos.");
    }
  };

  const handleEditing = (e) => {
    e.preventDefault();
    if (articleData.title && articleData.author && articleData.content) {
      editArticle(
        selectedArticle._id,
        articleData,
        (data) => {
          toast.success("El artículo se ha actualizado con éxito");
          setArticleData({
            title: "",
            author: "",
            content: "",
          });
          setIsEditing(false);
          setHaveNewData(true);
        },
        (error) => {
          toast.error("Hubo un error al actualizar el artículo.");
        }
      );
    } else {
      toast.error("Por favor, completa todos los campos requeridos.");
    }
  };

  return (
    <div className="col-span-12 sm:col-span-4 rounded-lg border p-8">
      <form onSubmit={isEditing ? handleEditing : handleSubmit}>
        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-700 font-bold">
            Título
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={articleData.title}
            onChange={(e) =>
              setArticleData({ ...articleData, title: e.target.value })
            }
            className="w-full border border-gray-300 rounded-md p-2"
            placeholder="Título del artículo"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="author" className="block text-gray-700 font-bold">
            Autor
          </label>
          <input
            type="text"
            id="author"
            name="author"
            value={articleData.author}
            onChange={(e) =>
              setArticleData({ ...articleData, author: e.target.value })
            }
            className="w-full border border-gray-300 rounded-md p-2"
            placeholder="Nombre del autor"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="content" className="block text-gray-700 font-bold">
            Contenido
          </label>
          <textarea
            id="content"
            name="content"
            value={articleData.content}
            onChange={(e) =>
              setArticleData({ ...articleData, content: e.target.value })
            }
            className="w-full border border-gray-300 rounded-md p-2"
            placeholder="Contenido del artículo"
            rows="5"
          />
        </div>
        <div className="flex justify-end gap-4">
          <button title="cancelar" type="button">
            <BsEraserFill
              size={24}
              color="gray"
              onClick={() => cancelEditing()}
            />
          </button>

          {isOnline ? (
            !isEditing ? (
              <button
                type="submit"
                className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 hover:transition-all"
              >
                Agregar Artículo
              </button>
            ) : (
              <button
                type="submit"
                className="bg-yellow-500 text-white py-2 px-4 rounded-md hover:bg-yellow-600 hover:transition-all"
              >
                Editar Artículo
              </button>
            )
          ) : (
            <p>No puedes agregar entradas en modo fuera de línea.</p>
          )}
        </div>
      </form>
    </div>
  );
};

export default AddArticle;
