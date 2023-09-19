import React, { Component } from "react";

export default class Headline extends Component {
  render() {
    let { title, desc, imageUrl, newsUrl, author, date } = this.props;
    const titleStyle = {
      color: "black",
      
    };
    return (
      <>
        <div className="container">
          <div className="card mb-3" style={{maxWidth: 940}}>
            <div className="row g-0">
              <div className="col-md-4">
                <div className="card-img">
                  <a href={newsUrl} target="_blank" rel="noopener noreferrer">
                    <img src={imageUrl} className="card-img" alt="..." />
                  </a>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card-title">
                  <a href={newsUrl} target="_blank" rel="noopener noreferrer">
                    <h4 style={titleStyle} className="card-body">{title}</h4>
                  </a>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card-text">
                    <p className="card-body">{desc}...</p>
                    <p className="card-body">
                      <small className="text-body-secondary">
                        By {author ? author : "Unknown"} on{" "}
                        {new Date(date).toLocaleString("en-US", {
                          timeZone: "America/New_York",
                          year: "numeric",
                          month: "2-digit",
                          day: "2-digit",
                          hour: "2-digit",
                          minute: "2-digit",
                          second: "2-digit",
                          timeZoneName: "short",
                        })}{" "}
                      </small>
                    </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
