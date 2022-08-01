import "./NewsCardList.css";
import NewsCard from "../NewsCard/NewsCard";
import convertDateFormat from "../../utils/convertDateFormat";

function NewsCardList({ articleData, searchKey, loggedIn }) {
  const mobileTopMargin =
    window.location.pathname === "/"
      ? "news-list__top-margin-mobile-home"
      : "news-list__top-margin-mobile-savedNews";

  return (
    <ul className={`news-list ${mobileTopMargin}`}>
      {articleData.slice(0, 3).map((article) => (
        <NewsCard
          loggedIn={loggedIn}
          imgSrc={article.urlToImage}
          date={convertDateFormat(article.publishedAt)}
          titleText={article.title}
          paragraphText={article.content}
          mediaSourceName={article.source.name}
          category={searchKey}
          articleUrl={article.url}
          key={article.id}
        />
      ))}
    </ul>
  );
}

export default NewsCardList;
