import SearchForm from "../SearchForm/SearchForm";
import About from "../About/About";
import Header from "../Header/Header";
import "./Main.css";

function Main() {
  return (
    <section className="main">
      <Header />
      <SearchForm />
      <About />
    </section>
  );
}

export default Main;
