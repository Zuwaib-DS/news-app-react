import React from "react";
import NewsItem from "./NewsItem";
import Pagination from "./controls/Pagination";

function NewsList({category}) {
  const [newsList, setNewsList] = React.useState([]);
  const [numberOfPages, setNumberOfPages] = React.useState(0);
  const [currentPage, setCurrentPage] = React.useState(1);

  React.useEffect(() => {
    fetchNews();
  }, []);

  async function fetchNews(page = 1) {
    let newsApiUrl = `https://newsapi.org/v2/top-headlines?country=us&pageSize=12&page=${page}${category ? `&category=${category}` : ""}`;
    let response = await fetch(newsApiUrl, {
      headers: {
        "X-Api-Key": process.env.REACT_APP_NEWS_API_KEY,
      },
    });
    let data = await response.json();
    setNewsList(data.articles);
    let pages = getNumberOfPages(data.totalResults);
    setNumberOfPages(pages);
  }

  function getNumberOfPages(totalRecords, pageSize = 10) {
    return Math.ceil(totalRecords / pageSize);
  }

  const handlePageChange = async (page) => {
    console.log("Page: ", page);
    console.log("CurrentPage: ", currentPage);
    if (page < 1 || page > numberOfPages) return;
    setCurrentPage(page);
    await fetchNews(page);
  };

  return (
    <div className="container">
      <h1>News List</h1>
      <div className="row my-5">
        {newsList.map((item, i) => (
          <div className="col-md-3 my-3" key={item.url}>
            <NewsItem
              imageUrl={item.urlToImage}
              title={item.title}
              description={item.description}
              url={item.url}
              publishedAt={item.publishedAt}
              author={item.author}
              source={item.source.name}
              id={item.url}
            />
          </div>
        ))}
      </div>
      <Pagination
        totalPages={numberOfPages}
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      ></Pagination>
    </div>
  );
}

export default NewsList;
