import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Heroimage from "./Heroimage";
import Newscard from "./Newscard";
import Featured from "./Featured"

export default function HomePage(props) {
  const [articles, setArticles] = useState([]);
  const { country, category } = props;

  useEffect(() => {
    updateNews();
  }, []);

  const updateNews = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=eab1fe0fa6b94123a37563d9fd97c8dc&page=1&category=${category}&pageSize=10`;
    try {
      let data = await fetch(url);
      let parsedData = await data.json();
      setArticles(parsedData.articles.slice(0, 3));
    } catch (error) {
      console.log("Error fetching news:", error);
    }
  };

  return (
    <>
      <Heroimage articles={articles}/>
      <Newscard articles={articles}/>
      <Featured articles={articles}/>
    </>
  );
}

HomePage.propTypes = {
  country: PropTypes.string,
  category: PropTypes.string,
};
HomePage.defaultProps = {
  country: "us",
  category: "technology",
};
