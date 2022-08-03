import "./MainSearchResults.css";
import ShowMoreBtn from "../ShowMoreBtn/ShowMoreBtn";
import NewsCardList from "../NewsCardList/NewsCardList";
import SearchPending from "../SearchPending/SearchPending";
import NotFound from "../NotFound/NotFound";
import { useEffect, useState } from "react";

function MainSearchResults({ searchStatus, articleData, searchKey, loggedIn }) {
  const [sliceEndIndex, setSliceEndIndex] = useState(0);
  useEffect(()=>{
    const initialValForSliceEnd = articleData.length > 3 ? 3 : articleData.length;
    setSliceEndIndex(initialValForSliceEnd);
  },[articleData]);

  const displayShowMore = sliceEndIndex === articleData.length ? false : true;
  const handleShowMore = () => {
    articleData.length - sliceEndIndex > 3
      ? setSliceEndIndex(sliceEndIndex + 3)
      : setSliceEndIndex(articleData.length);
  };
   console.log(sliceEndIndex);
  const active = searchStatus ? "main-results-section_active" : "";
  return (
    <section className={`main-results-section ${active}`}>
      {searchStatus === "pending" ? (
        <SearchPending />
      ) : searchStatus === "not found" ? (
        <NotFound />
      ) : searchStatus === "results" ? (
        <>
          <h2 className="main-results-section__title">Search results</h2>
          <NewsCardList
            articleData={articleData}
            searchKey={searchKey}
            loggedIn={loggedIn}
            sliceEndIndex={sliceEndIndex}
          />
          <ShowMoreBtn
            onClick={handleShowMore}
            displayShowMore={displayShowMore}
          />
        </>
      ) : null}
    </section>
  );
}

export default MainSearchResults;
