import "./MainSearchResults.css";
import ShowMoreBtn from "../ShowMoreBtn/ShowMoreBtn";
import NewsCardList from "../NewsCardList/NewsCardList";
import SearchPending from "../SearchPending/SearchPending";
import NotFound from "../NotFound/NotFound";

//import { useState } from "react";

function MainSearchResults({loggedIn, searchStatus, articleData}) {
  // prop {newsCards}
  const handleShowMore = () => {alert('show more')}
  
  const active = searchStatus ? "main-results-section_active" : "";
  return (
    <section className={`main-results-section ${active}`}>
      { searchStatus === "pending" ? (
        <SearchPending />
      ) : searchStatus === "not found" ? (
        <NotFound />
      ) : searchStatus === "results" ? (
        <>
          <h2 className="main-results-section__title">Search results</h2>
          <NewsCardList articleData={articleData}/>
          <ShowMoreBtn onClick={handleShowMore}/>
        </>
      ) : null}
    </section>
  );
}

export default MainSearchResults;
