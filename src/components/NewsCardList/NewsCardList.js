import "./NewsCardList.css";
import NewsCard from "../NewsCard/NewsCard";
import convertDateFormat from "../../utils/convertDateFormat";

function 
NewsCardList({
  articleData,
  loggedIn,
  setArticleDbData,
  searchKey,
  sliceEndIndex,
  articleDbData,
  getArticles
}) {
  const mobileTopMargin =
    window.location.pathname === "/"
      ? "news-list__top-margin-mobile-home"
      : "news-list__top-margin-mobile-savedNews";

  return (
    <ul className={`news-list ${mobileTopMargin}`}>
      
      {articleData.slice(0, sliceEndIndex).map((article) =>
       (
        <NewsCard
          getArticles={getArticles}
          articleDbData={articleDbData}
          articleData={articleData}
          setArticleDbData={setArticleDbData}
          loggedIn={loggedIn}
          imgSrc={article.urlToImage ? article.urlToImage : article.image}
          date={
            article.publishedAt
              ? convertDateFormat(article.publishedAt)
              : article.date
          }
          titleText={article.title}
          paragraphText={article.content ? article.content : article.text}
          mediaSourceName={
            article.source.name ? article.source.name : article.source
          }
          category={article.keyword ? article.keyword : searchKey}
          articleUrl={article.url ? article.url : article.link}
          uniqueVal={article.url ? article.url : article._id}
        />
      )
      )}
    </ul>
  );
}

export default NewsCardList;
