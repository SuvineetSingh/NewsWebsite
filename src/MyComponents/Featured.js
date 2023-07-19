import React from "react";
import Button from 'react-bootstrap/Button';

export default function Featured(props) {
  const { articles } = props;
  return (
    <>
      <div className="feature1">
        {articles.slice(0, 1).map((article, index) => (
          <div className="d-flex justify-content-evenly">
            <div
              className="col-lg-5"
              style={{ marginTop: "5rem", width: "450px", marginLeft: "6rem" }}
            >
              <h2>{article.title}</h2>
              <p>{article.description}</p>
              <Button href={article.url} variant="primary">Read more</Button>
            </div>
            <div className="col-lg-7">
              <img
                src={article.urlToImage}
                style={{ width: "600px", height: "450px" }}
                class="rounded mx-auto d-block"
                alt="..."
              />
            </div>
          </div>
        ))}
      </div>
      <p className="my-5 row justify-content-center">
        __________________________________________________________________________________________________________________________
      </p>
      <div className="feature2">
        {articles.slice(1, 2).map((article, index) => (
          <div className="d-flex justify-content-evenly">
            <div className="col-lg-7">
              <img
                src={article.urlToImage}
                style={{ width: "600px", height: "450px" }}
                class="rounded mx-auto d-block"
                alt="..."
              />
            </div>
            <div
              className="col-lg-5"
              style={{ marginTop: "5rem", width: "450px", marginRight: "6rem" }}
            >
              <h2>{article.title}</h2>
              <p>{article.description}</p>
              <Button href={article.url} variant="primary">Read more</Button>
            </div>
          </div>
        ))}
      </div>
      <p className="my-5 row justify-content-center">
        __________________________________________________________________________________________________________________________
      </p>
      <div className="feature3">
        {articles.slice(2, 3).map((article, index) => (
          <div className="d-flex justify-content-evenly">
            <div
              className="col-lg-5"
              style={{ marginTop: "5rem", width: "450px", marginLeft: "6rem" }}
            >
              <h2>{article.title}</h2>
              <p>{article.description}</p>
              <Button href={article.url} variant="primary">Read more</Button>
            </div>
            <div className="col-lg-7">
              <img
                src={article.urlToImage}
                style={{ width: "600px", height: "450px" }}
                class="rounded mx-auto d-block"
                alt="..."
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
