import React, { Fragment, useEffect, useState } from "react";
import { getArticles } from "../Functions/Articles";
import Articles from "./Articles";
import { useArticleContext } from "./Context/ArticleContext";

const Publications = () => {
  const [articles, setArticles] = useState([]);
  const { haveNewData, setHaveNewData } = useArticleContext();
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredArticles, setFilteredArticles] = useState([]);

  useEffect(() => {
    getArticles(
      (data) => {
        setArticles(data);
        setFilteredArticles(data);
        setHaveNewData(false);
      },
      (error) => {
        console.error("Error al obtener los artículos:", error);
      }
    );
  }, [haveNewData]);

  useEffect(() => {
    if (searchQuery) {
      const filtered = articles.filter((article) => {
        const { title, author, content } = article;
        const normalizedQuery = searchQuery.toLowerCase();

        return (
          title.toLowerCase().includes(normalizedQuery) ||
          author.toLowerCase().includes(normalizedQuery) ||
          content.toLowerCase().includes(normalizedQuery)
        );
      });
      setFilteredArticles(filtered);
    } else {
      setFilteredArticles(articles);
    }
  }, [searchQuery, articles]);

  function renderArticles(filteredArticles) {
    if (Array.isArray(filteredArticles) && filteredArticles.length > 0) {
      const articleElements = filteredArticles.map((article) => (
        <Articles key={article.articleid} article={article} />
      ));

      return <div>{articleElements}</div>;
    } else {
      return <div>No se encontraron artículos.</div>;
    }
  }
  return (
    <Fragment>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Buscar por título, autor o contenido"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full border border-gray-300 rounded-md p-2"
        />
      </div>
      <div>{renderArticles(filteredArticles)}</div>
    </Fragment>
  );
};

export default Publications;
