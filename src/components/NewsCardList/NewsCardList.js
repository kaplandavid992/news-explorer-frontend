import "./NewsCardList.css";
import NewsCard from '../NewsCard/NewsCard';

function NewsCardList({loggedIn}) { // prop items amonut returned
   const mobileTopMargin = window.location.pathname === '/' ? 'top-margin-mobile-home' : 'top-margin-mobile-savedNews';
  return (
    // <ul className="news__list">
    //   {newsCards.map((newsCard) => (
      <ul className={`news__list ${mobileTopMargin}`}>
        <NewsCard 
        loggedIn={loggedIn} 
        date='November 4, 2020'
         titleText="Everyone Needs a Special 'Sit Spot' in Nature"
         paragraphText="Ever since I read Richard 
                        Louv's influential book, 
                        Last Child in the Woods 
                         the idea of having a special 
                        sit spot has stuck with me. 
                         This advice, which Louv attributes
                          to nature educator Jon Young, is 
                         for both adults and children to find..."

          mediaSourceName='TREEHUGGER' 
        category='Nature'
        />
<NewsCard 
        loggedIn={loggedIn}  
        date='November 4, 2020'
         titleText="Everyone Needs a Special 'Sit Spot' in Nature"
         paragraphText="Ever since I read Richard 
                        Louv's influential book, 
                        Last Child in the Woods 
                         the idea of having a special 
                        sit spot has stuck with me. 
                         This advice, which Louv attributes
                          to nature educator Jon Young, is 
                         for both adults and children to find..."

          mediaSourceName='TREEHUGGER' 
        category='Nature'
        />
        <NewsCard 
        loggedIn={loggedIn} 
        date='November 4, 2020'
         titleText="Everyone Needs a Special 'Sit Spot' in Nature"
         paragraphText="Ever since I read Richard 
                        Louv's influential book, 
                        Last Child in the Woods 
                         the idea of having a special 
                        sit spot has stuck with me. 
                         This advice, which Louv attributes
                          to nature educator Jon Young, is 
                         for both adults and children to find..."

          mediaSourceName='TREEHUGGER' 
        category='Nature'
        />


</ul>
    //   ))}
    // 
  );
}

export default NewsCardList;
