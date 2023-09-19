import React from "react";
import Carousel from "react-bootstrap/Carousel";
import PropTypes from "prop-types";


export default function Heroimage(props) {
  const { articles } = props;
  const imageStyle = {
    filter: "brightness(60%)", // Make the image darker (70% brightness)
    height:"700px"
  };
  const titleStyle = {
    color: "white",
    
  };
  return (
    <>
      <Carousel>
        {articles.map((article, index) => (
          <Carousel.Item key={index}>
            <img
              className="d-block w-100"
              src={article.urlToImage}
              alt={article.title}
              style={imageStyle}
            />
            <Carousel.Caption>
              <a href={article.url} target="_blank" rel="noopener noreferrer">
                <h3 style={titleStyle}>{article.title}</h3>
              </a>
              <p>{article.description}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </>
  );
}
Heroimage.propTypes = {
  articles: PropTypes.arrayOf(
    PropTypes.shape({
      imageUrl: PropTypes.string,
      title: PropTypes.string,
      desc: PropTypes.string,
      newsUrl: PropTypes.string,
    })
  ).isRequired,
};
