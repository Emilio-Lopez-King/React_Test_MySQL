import { createContext, useContext, useState } from 'react';

const ArticleContext = createContext();

export const useArticleContext = () => {
  return useContext(ArticleContext);
};

export const ArticleProvider = ({ children }) => {
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [isEditing,setIsEditing] = useState(false);
  const [haveNewData,setHaveNewData] = useState(false);

  return (
    <ArticleContext.Provider value={{ selectedArticle, setSelectedArticle, setIsEditing,isEditing,haveNewData,setHaveNewData}}>
      {children}
    </ArticleContext.Provider>
  );
};