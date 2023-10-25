const Conection = 'http://localhost:5000/';

export const createArticle = (newArticle, successCallback, errorCallback) => {
  fetch(Conection + "api/Articles/InsertArticles", { 
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newArticle),
  })
    .then((response) => response.json())
    .then((data) => {
      successCallback(data);
    })
    .catch((error) => {
      errorCallback(error);
    });
};

export const getArticles = (successCallback, errorCallback) => {
  fetch(Conection + "api/Articles/GetArticles", { 
    method: "GET",
  })
    .then((response) => response.json())
    .then((data) => {
      successCallback(data);
    })
    .catch((error) => {
      errorCallback(error);
    });
};

export const editArticle = (articleId, updatedArticle, successCallback, errorCallback) => {
  fetch(`${Conection}api/Articles/EditArticle/${articleId}`, { 
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedArticle),
  })
    .then((response) => response.json())
    .then((data) => {
      successCallback(data);
    })
    .catch((error) => {
      errorCallback(error);
    });
};

export const deleteArticle = (articleId, successCallback, errorCallback) => {
  fetch(`${Conection}api/Articles/DeleteArticle/${articleId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      successCallback(data);
    })
    .catch((error) => {
      errorCallback(error);
    });
};