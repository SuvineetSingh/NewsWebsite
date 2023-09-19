import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
// import SearchList from "./SearchList"

export default function Navbar({ setSearchResults }) {
  const [input, setInput] = useState("");
  const [articles, setArticles] = useState([]);
  async function fetchData(value) {
    const url = `https://newsapi.org/v2/everything?domains=techcrunch.com,cnn.com,espn.com&apiKey=eab1fe0fa6b94123a37563d9fd97c8dc&language=en`;
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(parsedData.articles);
    const results = articles.filter((article) => {
      return (
        value &&
        article &&
        article.title &&
        article.title.toLowerCase().includes(value.toLowerCase())
      );
    });
    console.log(results);
    setSearchResults(results);
  }
  function handleChange(value) {
    setInput(value);
    fetchData(value);
  }
  return (
    <>
      <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Home
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/Entertainment">
                  Entertainment
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/business">
                  Business
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Sports">
                  Sports
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Health">
                  Health
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Technology">
                  Technology
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Science">
                  Science
                </Link>
              </li>
            </ul>

            <form className="d-flex">
              <input
                className="form-control me-2"
                value={input}
                onChange={(e) => handleChange(e.target.value)}
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}
