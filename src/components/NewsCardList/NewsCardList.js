import "./NewsCardList.css";
import NewsCard from "../NewsCard/NewsCard";
import convertDateFormat from "../../utils/convertDateFormat";

function NewsCardList({ articleData }) {
  // prop items amonut returned
  const mobileTopMargin =
    window.location.pathname === "/"
      ? "news-list__top-margin-mobile-home"
      : "news-list__top-margin-mobile-savedNews";

  return (
    <ul className={`news-list ${mobileTopMargin}`}>
      {articleData.map((article) => (
        <NewsCard
          imgSrc={article.urlToImage}
          date={convertDateFormat(article.publishedAt)}
          titleText={article.title}
          paragraphText={article.content}
          mediaSourceName={article.source.name}
          category="Nature"
        />
      ))}
    </ul>
  );
}

export default NewsCardList;
