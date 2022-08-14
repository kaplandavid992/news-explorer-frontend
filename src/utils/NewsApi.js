class NewsApi {
  constructor({ baseUrl }) {
    this._baseUrl = baseUrl;
  }
  getNewsData(searchKey) {
    return fetch(
      `${
        this._baseUrl
      }?q=${searchKey}&from=${this._sevenDaysAgo()}&to=${this._currentDate()}&pageSize=100&apiKey=5bcf74b8dc734bf48e79424aa27c65a7`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    ).then(this._checkResponce);
  }
  _checkResponce = (res) =>
    res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);

  _currentDate() {
    const currentDate = new Date().toJSON().slice(0, 10);
    return currentDate;
  }
  _sevenDaysAgo() {
    const date = new Date();
    const sevenDaysAgo = new Date(date.setDate(date.getDate() - 7))
      .toJSON()
      .slice(0, 10);
    return sevenDaysAgo;
  }
}
const newsApi = new NewsApi({
  baseUrl: "https://nomoreparties.co/news/v2/everything",
});
export default newsApi;
