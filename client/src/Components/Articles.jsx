import React, { useState } from "react";
import { format } from "date-fns";
import { BsPencilFill, BsTrash3Fill } from "react-icons/bs";
import { useArticleContext } from "./Context/ArticleContext";
import { deleteArticle } from "../Functions/Articles";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Articles = ({ article }) => {
  const isOnline = navigator.onLine;
  const [showModal, setShowModal] = useState(false);
  const [showFullText, setShowFullText] = useState(false);

  const editButtonStyle = {
    position: "absolute",
    top: "0.5rem",
    right: "0.5rem",
    backgroundColor: "transparent",
    border: "none",
    cursor: "pointer",
  };
  const deleteButtonStyle = {
    position: "absolute",
    top: "0.5rem",
    right: "2.5rem",
    backgroundColor: "transparent",
    border: "none",
    cursor: "pointer",
  };

  const { setSelectedArticle, setIsEditing, setHaveNewData } =
    useArticleContext();

  const handleEditClick = () => {
    setSelectedArticle(article);
    setIsEditing(true);
  };

  const handleDeleteClick = (article) => {
    setShowModal(true);
  };

  const confirmDelete = (article) => {
    deleteArticle(
      article.articleid,
      (data) => {
        toast.success("El artículo se ha eliminado con éxito");
        setShowModal(false);
        setHaveNewData(true);
      },
      (error) => {
        toast.error("Hubo un error al eliminar el artículo.");
        setShowModal(false);
      }
    );
  };

  return (
    <div className="mb-4">
      <div className="w-full bg-white rounded-lg shadow-md overflow-hidden p-4 border relative">
        <div className="bg-blue-50 rounded-lg px-4 py-2">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            {article.title}
          </h2>
          <p className="text-sm text-gray-600">
            Por{" "}
            <span className="font-semibold text-blue-500">
              {article.author}
            </span>{" "}
            - Fecha de publicación:{" "}
            <b>
              {format(new Date(article.publicationDate), "dd/MM/yyyy HH:mm:ss")}
            </b>
          </p>
          <button
            style={{
              ...deleteButtonStyle,
            }}
            title="Eliminar"
            onClick={() => handleDeleteClick(article)}
            disabled={!isOnline}
          >
            <BsTrash3Fill size={20} color="#c60c0c" />
          </button>
          {showModal ? (
            <>
              <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                <div className="relative w-auto my-6 mx-auto max-w-3xl">
                  <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    <div className="flex text-center justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                      <h3 className="text-2xl font-semibold">
                        Eliminar Artículo
                      </h3>
                      <button
                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                        onClick={() => setShowModal(false)}
                      >
                        <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                          ×
                        </span>
                      </button>
                    </div>
                    {/*body*/}
                    <div className="relative p-6 flex-auto">
                      <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                        ¿Estas seguro de que deseas eliminar este Artículo?
                      </p>
                    </div>
                    {/*footer*/}
                    <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                      <button
                        className="text-gray-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => setShowModal(false)}
                      >
                        Cerrar
                      </button>
                      <button
                        className="bg-red-500 text-white active:bg-red-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => confirmDelete(article)}
                      >
                        Si, Eliminar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            </>
          ) : null}
          <button
            style={editButtonStyle}
            title="Editar"
            onClick={() => handleEditClick(article)}
          >
            <BsPencilFill size={20} color="#0d73bc" />
          </button>
        </div>
        <div className="px-4 py-3">
          <p className={`text-gray-700 ${showFullText ? "" : "limit-text"}`}>
            {article.content}
          </p>
        </div>
        <div className="flex justify-end right-4 bottom-4">
          <button
            className="bg-gray-400 text-white py-1 px-3 rounded-lg hover:bg-gray-500"
            onClick={() => setShowFullText(!showFullText)}
          >
            {showFullText ? "Ver menos" : "Ver más"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Articles;
