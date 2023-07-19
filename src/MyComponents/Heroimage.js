import React from "react";
import Carousel from "react-bootstrap/Carousel";
import PropTypes from "prop-types";
import Button from 'react-bootstrap/Button';


export default function Heroimage(props) {
  const { articles } = props;
  return (
    <>
      <Carousel>
        {articles.map((article, index) => (
          <Carousel.Item key={index}>
            <img
              className="d-block w-100"
              src={article.urlToImage}
              alt={article.title}
              style={{ height: "700px"}}
            />
            <Carousel.Caption>
              <h3>{article.title}</h3>
              <p>{article.description}</p>
              <Button href={article.url} target="_blank" rel="noopener noreferrer" variant="dark">Read More</Button>
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
