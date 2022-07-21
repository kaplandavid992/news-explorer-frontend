import "./MainSearchResults.css";
import ShowMoreBtn from "../ShowMoreBtn/ShowMoreBtn";
import NewsCardList from "../NewsCardList/NewsCardList";
import TitleH2 from "../TitleH2/TitleH2";
import SearchPending from "../SearchPending/SearchPending";
import NotFound from "../NotFound/NotFound";
import { useState } from "react";

function MainSearchResults() {
  // prop {newsCards}
  const [searchStatus, setSearchStatus] = useState("results");
  // api get search status and update setSearchStatus
  const active = searchStatus ? "main-results-section_active" : "";
  return (
    <section className={`main-results-section ${active}`}>
      {searchStatus === "pending" ? (
        <SearchPending />
      ) : searchStatus === "not found" ? (
        <NotFound />
      ) : searchStatus === "results" ? (
        <>
          <TitleH2 text="Search results" />
          <NewsCardList />
          <ShowMoreBtn />
        </>
      ) : null}
    </section>
  );
}

export default MainSearchResults;