import React from "react";

const Title = ({ title }) => {
  return (
    <div className="section-title">
      <h3>
        <b>{title || "default title"}</b>
      </h3>
      {/* <div className="underline"></div> */}
    </div>
  );
};

export default Title;
