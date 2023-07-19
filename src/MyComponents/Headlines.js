import React, { Component } from "react";
import Headline from "./Headline";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export default class Headlines extends Component {
  static defaultProps = {
    country: "us",
    category: "technology",
    pageSize: 5,

  };
  static propTypes = {
    country: PropTypes.string,
    category: PropTypes.string,
    pageSize: PropTypes.number,
  };
  state = {
    articles: [],
    loading: true,
    page: 1,
    totalResults: 0,
  };
  capitilizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  async componentDidMount() {
    this.updateNews();
  }
  
  async updateNews(props) {
    this.props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=eab1fe0fa6b94123a37563d9fd97c8dc&page=${this.state.page}&category=${this.props.category}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    this.props.setProgress(30);
    let data = await fetch(url);
    let parsedData = await data.json();
    this.props.setProgress(70);
    this.setState({
      page: this.state.page + 1,
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
    this.props.setProgress(100);
  }
  
  loadMoreArticles = async() => {
    this.setState({ page: this.state.page + 1 });
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=eab1fe0fa6b94123a37563d9fd97c8dc&page=${this.state.page}&category=${this.props.category}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      page: this.state.page + 1,
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults,
      loading: false,
    });
  };

  render() {
    return (
      <>
        <div className="container my-3" style={{ width: "100%" }}>
          <h2>
            Latest headlines on{" "}
            {this.capitilizeFirstLetter(this.props.category)}
          </h2>
          <InfiniteScroll
            dataLength={this.state.articles.length}
            next={this.loadMoreArticles}
            hasMore={true}
            loader={<Spinner/>}
          >
            <div className="row">
              {this.state.articles ? (
                this.state.articles.map((article, index) => (
                  <Headline
                    key={index}
                    title={article.title ? article.title : ""}
                    desc={
                      article.description
                        ? article.description.slice(0, 300)
                        : ""
                    }
                    imageUrl={article.urlToImage}
                    newsUrl={article.url}
                    author={article.author}
                    date={article.publishedAt}
                  />
                ))
              ) : (
                <p>No articles available</p>
              )}
            </div>
          </InfiniteScroll>
        </div>
      </>
    );
  }
}
