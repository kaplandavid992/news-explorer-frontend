import { useState } from "react";
import "./SearchForm.css";

function SearchForm() {
  const [search, setSearch] = useState('');
  const [btnActiveClass, setBtnActiveClass] = useState('');
  function onSearchInputChange(e) {
    
    //api send search
    if(e.target.value.length > 1 && !btnActiveClass){setBtnActiveClass('searchForm__btn_active')}
    else if(e.target.value.length < 2 && btnActiveClass){setBtnActiveClass('')};
    setSearch(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    //api send 'search'
  }
  
  return (
    <div className="searchFormSection">
      <h1 className="searchForm__h1">What's going on in the world?</h1>
      <span className="searchForm__span">
        Find the latest news on any topic and save them in your personal
        account.
      </span>

      <form className="searchForm" onSubmit={handleSubmit}>
        <input className="searchForm__input" placeholder="Enter topic" onChange={onSearchInputChange}/>
        <button className={`searchForm__btn ${btnActiveClass}`} type="submit">
          Search
        </button>
      </form>
    </div>
  );
}

export default SearchForm;
