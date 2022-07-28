import { useState } from "react";
import "./SearchForm.css";

function SearchForm() {
  const [search, setSearch] = useState('');
  const [btnActiveClass, setBtnActiveClass] = useState('');
  function onSearchInputChange(e) {
    
    //api send search
    if(e.target.value.length > 0 && !btnActiveClass){setBtnActiveClass('search-section__form__btn_active')}
    else if(e.target.value.length < 1 && btnActiveClass){setBtnActiveClass('')};
    setSearch(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    //api send 'search'
    alert(search);
  }
  
  return (
    <section className="search-section">
      <h1 className="search-section__title">What's going on in the world?</h1>
      <p className="search-section__subtitle">
        Find the latest news on any topic and save them in your personal
        account.
      </p>

      <form className="search-section__form" onSubmit={handleSubmit}>
        <input className="search-section__form__input" placeholder="Enter topic" onChange={onSearchInputChange}/>
        <button className={`search-section__form__btn ${btnActiveClass}`} type="submit">
          Search
        </button>
      </form>
    </section>
  );
}

export default SearchForm;
