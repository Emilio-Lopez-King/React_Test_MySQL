import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  Header,
  Footer,
  Welcome,
  Publications,
  AddArticle,
  ArticleProvider,
} from "./Index";

const Home = () => {
  const isOnline = navigator.onLine;

  return (
    <ArticleProvider>
      <div className="min-h-screen flex flex-col">
        {isOnline
          ? null
          : toast.error(
              "No tienes conexión a Internet. La aplicación funciona en modo fuera de línea."
            )}
        <Header />
        <main className="flex-1 p-4">
          <div className="grid grid-cols-1">
            <div className="grid grid-cols-12 gap-4 p-1">
              <div className="col-span-12 rounded-lg bg-white bg-opacity-50 shadow-md p-4 mt-9">
                <Welcome />
              </div>
              <div className="col-span-12 sm:col-span-8 bg-white bg-opacity-50 rounded-lg border p-8 publications-container">
                <h2 className="text-xl font-bold text-gray-400 mb-4">
                  Últimos artículos publicados
                </h2>
                <Publications />
              </div>
              <div className="col-span-12 sm:col-span-4 bg-white bg-opacity-50 rounded-lg border p-8">
                <h2 className="text-xl font-bold text-gray-400 mb-4">
                  Añadir un nuevo artículo
                </h2>
                <AddArticle />
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
      <ToastContainer limit={1} />
    </ArticleProvider>
  );
};

export default Home;
