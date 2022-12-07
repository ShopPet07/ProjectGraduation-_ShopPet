import React from "react";

import "./discoveritem.scss";
export default function DiscoverItem() {
  return (
    <span className="discover-item">
      {/* <video src={video}  autoPlay preload></video> */}
      <img
        src={
          "https://i.pinimg.com/originals/9c/07/e6/9c07e6ffba3c510bc4e2fee2911438cc.jpg"
        }
        alt=""
      />
    </span>
  );
}
