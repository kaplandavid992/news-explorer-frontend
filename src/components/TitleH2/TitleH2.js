import "./TitleH2.css";

function TitleH2({ text, width }) {
  return (
    <h2 className="title-h2" style={{ width: width }}>
      {text}
    </h2>
  );
}

export default TitleH2;
