import React, { Component } from "react";

export default class Headline extends Component {
  render() {
    let { title, desc, imageUrl, newsUrl, author, date } = this.props;
    return (
      <>
        <div className="container">
          <div className="card mb-3" style={{maxWidth: 940}}>
            <div className="row g-0">
              <div className="col-md-4">
                <img src={imageUrl} className="card-img-top" alt="..." />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">{title}</h5>
                  <div className="col-md-10">
                    <p className="card-text">{desc}...</p>
                  </div>
                  <p className="card-text my-5">
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

            <div className="card-body">
              <a href={newsUrl} target="_/" className="btn btn-sm btn-primary">
                Read more
              </a>
            </div>
          </div>
        </div>
      </>
    );
  }
}
