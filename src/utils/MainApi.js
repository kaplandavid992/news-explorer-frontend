class MainApi {
    constructor({ baseUrl }) {
      this._baseUrl = baseUrl;
    }
  
    getUserInfo() {
      return fetch(`${this._baseUrl}/users/me`, 
      { headers: this._setHeaders(), }).then(this._checkResponse);
    }

    getSavedArticles() {
      return fetch(`${this._baseUrl}/articles`, 
      { headers: this._setHeaders(), }).then(this._checkResponse);
    }
  
    saveArticle({  keyword, title, text, date, source, link, image }) {
      return fetch(`${this._baseUrl}/articles`, {
        method: 'POST',
        headers: this._setHeaders(),
        body: JSON.stringify({
          keyword, title, text, date, source, link, image 
        }),
      }).then(this._checkResponse);
    }

    deleteArticle(newsCardId) {
      return fetch(`${this._baseUrl}/articles/${newsCardId}`, {
        method: 'DELETE',
        headers: this._setHeaders(),
      }).then(this._checkResponse);
    }

    _checkResponse(res) {
      if (res.ok) {
        return res.json();
      } 
      return Promise.reject(new Error(`Error ${res.status}`));
    }
    _setHeaders() {
      const token = localStorage.getItem('token');
      return {
        authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
      Accept: "application/json",
      };
    }
  }
  
  const mainApi = new MainApi({
    baseUrl: 'https://api.kplnnew.students.nomoredomainssbs.ru',
  });
  
  export default mainApi;


  

