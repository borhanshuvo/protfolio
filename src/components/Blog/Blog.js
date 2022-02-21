import React, { useEffect, useState } from "react";

const Blog = () => {
  // {/* medium api call :  https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@borhan015 */}
  const [blogs, setBlogs] = useState([]);
  const [authorDetails, setAuthorDetails] = useState({});

  useEffect(() => {
    fetch(
      "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@borhan015"
    )
      .then((res) => res.json())
      .then((result) => {
        setBlogs(result.items);
        setAuthorDetails(result.feed);
      });
  }, []);

  return (
    <>
      <div className="container my-5">
        <h1 className="text-center saira-condensed">{authorDetails.title}</h1>
        <hr />
        <div className="row pt-5">
          {blogs.map((blog, index) => (
            <div className="col-md-4 pb-5" key={index}>
              <div className="card  text-dark text-center h-100">
                <div className="card-header">
                  <h5 className="card-title text-uppercase">{blog.title}</h5>
                </div>
                <div className="card-body">
                  <div className="row">
                    <p className="col-md-6 card-title text-uppercase">
                      {blog.author}
                    </p>
                    <p
                      className="col-md-6 card-text"
                      style={{ textAlign: "justify" }}
                    >
                      {blog.pubDate}
                    </p>
                  </div>
                  <p className="card-text" style={{ textAlign: "justify" }}>
                    {/* {ReactHtmlParser(blog?.description)} */}
                  </p>
                  {/* <p className="card-text" style={{ textAlign: "justify" }}>
                    {ReactHtmlParser(blog.content)}
                  </p> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Blog;
