import "./SearchForm.css";

function SearchForm() {
  return (
    <div className="searchFormSection">
      <h1 className="searchForm__h1">What's going on in the world?</h1>
      <span className="searchForm__span">
        Find the latest news on any topic and save them in your personal
        account.
      </span>

      <form className="searchForm">
        <input className="searchForm__input" placeholder="Enter topic" />
        <button className="searchForm__btn" type="submit">
          Search
        </button>
      </form>
    </div>
  );
}

export default SearchForm;
