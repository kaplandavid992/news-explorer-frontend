export default function popularKeyWords(articleDbData) {
  const keywordsArr = [];
  articleDbData.map((article) => {
    keywordsArr.push(article.keyword);
  });
  const keywordCount = {};
  keywordsArr.map((keyword) => {
    !keywordCount[keyword]
      ? (keywordCount[keyword] = 1)
      : (keywordCount[keyword] += 1);
  });
  const sortable = Object.fromEntries(
    Object.entries(keywordCount).sort(([, a], [, b]) => b - a)
  );
  const resArr = [
    Object.keys(sortable)[0],
    Object.keys(sortable)[1],
    Object.keys(sortable).length - 2,
  ];

  const stringWithData = resArr[1] ? `${resArr[0]}, ${resArr[1]}, and ${resArr[2]} other `: resArr[0]; 
  return stringWithData;
}
