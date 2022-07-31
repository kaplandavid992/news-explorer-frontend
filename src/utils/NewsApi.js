class NewsApi {
    constructor({ baseUrl }) {
      this._baseUrl = baseUrl;
    }
  
    getNewsCards() {
      return fetch(`${this._baseUrl}/articles`, { headers: this._setHeaders() }).then(
        this._checkResponse,
      );
    }
  
    postNewCard({ name, link }) {
      return fetch(`${this._baseUrl}/cards`, {
        method: 'POST',
        headers: this._setHeaders(),
        body: JSON.stringify({
          name,
          link,
        }),
      }).then(this._checkResponse);
    }
  
    confirmDelete(cardId) {
      return fetch(`${this._baseUrl}/cards/${cardId}`, {
        method: 'DELETE',
        headers: this._setHeaders(),
      }).then(this._checkResponse);
    }
  
    changeLikeCardStatus(cardId, isLiked) {
      return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
        method: isLiked ? 'PUT' : 'DELETE',
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
      };
    }
  }
  
  const NewsApi = new NewsApi({
    baseUrl: '',
  });
  
  export default newsApi;

  
// # creates an article with the passed
// # keyword, title, text, date, source, link, and image in the body
// POST /articles

// # deletes the stored article by _id
// DELETE /articles/articleId 