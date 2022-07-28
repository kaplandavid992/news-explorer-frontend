import Preloader from "../Preloader/Preloader";
import "./SearchPending.css";

function SearchPending() {
  return (
    <div className="search-pending">
      <Preloader />
      <span className="search-pending__text">Searching for news...</span>
    </div>
  );
}

export default SearchPending;
