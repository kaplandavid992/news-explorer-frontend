import "./NotFound.css";
import notFoundImage from "../../images/not-found_v1.svg";

function NotFound() {
  return (
    <div className="not-found">
      <img
        src={notFoundImage}
        alt="sad smiley icon"
        className="not-found__image"
      />
      <h4 className="not-found__title">Nothing found</h4>
      <p className="not-found__message">
        Sorry, but nothing matched<br/> your search terms.
      </p>
    </div>
  );
}

export default NotFound;
