import SearchForm from "../SearchForm/SearchForm";
import About from "../About/About";
import Header from "../Header/Header";
import MainSearchResults from "../MainSearchResults/MainSearchResults";
import "./Main.css";

function Main() {
  return (
    <section className="main">
      <Header />
      <SearchForm />
      <MainSearchResults />
      <About />
    </section>
  );
}

export default Main;
