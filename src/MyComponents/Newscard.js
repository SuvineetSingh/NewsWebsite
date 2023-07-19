import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default function Newscard(props) {
  const { articles } = props;
  return (
    <>
      <div
        className="d-flex justify-content-evenly"
        style={{ marginTop: "3rem" }}
      >
        {articles.map((article, index) => (
          <Card key={index} style={{ width: "18rem" }}>
            <Card.Img variant="top" src={article.urlToImage} />
            <Card.Body>
              <Card.Title>{article.title}</Card.Title>
              <Card.Text>{article.description.slice(0, 100)}</Card.Text>
              <Button href={article.url} variant="primary">
                Read more
              </Button>
            </Card.Body>
          </Card>
        ))}
      </div>
      <p className="my-5 row justify-content-center">
        __________________________________________________________________________________________________________________________
      </p>
    </>
  );
}
