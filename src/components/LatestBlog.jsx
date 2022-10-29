import React from "react";
import "../styles/css/components/LatestBlog.css";
const LatestBlog = () => {
  return (
    <div className="grid-box">
      <div className="img">
        <img
          src="https://d2ms8rpfqc4h24.cloudfront.net/React_18_New_features_a9ebb05f34.jpg"
          alt=""
        />
      </div>
      <div className="text">
        <h2>React 18 will include out-of-the-box improvements</h2>
        <p>
          Our latest like automatic batching, new like startTransition, and
          streaming server-side ..
        </p>
        <button>
          <p>Read More</p>
        </button>
      </div>
    </div>
  );
};

export default LatestBlog;
