import "./App.css";
import Navbar from "./MyComponents/Navbar";
import Headlines from "./MyComponents/Headlines";
import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import HomePage from "./MyComponents/HomePage";

export default class App extends Component {
  state = {
    progress: 0,
    searchResults: [],
  };
  setProgress = (progress) => {
    this.setState({ progress: progress });
  };
  setSearchResults = (results) => {
    this.setState({ searchResults: results })
  };
  
  render() {
    return (
      <div>
        <Router>
          <Navbar 
            setSearchResults={this.setSearchResults}
          />
          <LoadingBar
            height={3}
            color="#f11946"
            progress={this.state.progress}
          />
          <Routes>
            <Route
              exact
              path="/"
              element={
                <HomePage key="general" country="us" category="general" />
              }
            />
            <Route
              exact
              path="/general"
              element={
                <Headlines
                  key="general"
                  pageSize={10}
                  country="us"
                  category="general"
                  setProgress={this.setProgress}
                />
              }
            />
            <Route
              exact
              path="/business"
              element={
                <Headlines
                  key="business"
                  pageSize={10}
                  country="us"
                  category="business"
                  setProgress={this.setProgress}
                />
              }
            />
            <Route
              exact
              path="/entertainment"
              element={
                <Headlines
                  key="entertainment"
                  pageSize={10}
                  country="us"
                  category="entertainment"
                  setProgress={this.setProgress}
                />
              }
            />
            <Route
              exact
              path="/health"
              element={
                <Headlines
                  key="health"
                  pageSize={5}
                  country="us"
                  category="health"
                  setProgress={this.setProgress}
                />
              }
            />
            <Route
              exact
              path="/sports"
              element={
                <Headlines
                  key="sports"
                  pageSize={5}
                  country="us"
                  category="sports"
                  setProgress={this.setProgress}
                />
              }
            />
            <Route
              exact
              path="/technology"
              element={
                <Headlines
                  key="technology"
                  pageSize={5}
                  country="us"
                  category="technology"
                  setProgress={this.setProgress}
                />
              }
            />
            <Route
              exact
              path="/science"
              element={
                <Headlines
                  key="science"
                  pageSize={5}
                  country="us"
                  category="science"
                  setProgress={this.setProgress}
                />
              }
            />
          </Routes>
        </Router>
      </div>
    );
  }
}
