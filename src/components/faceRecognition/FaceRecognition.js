import React from "react";
import "./FaceRecognition.css";

function FaceRecognition({ imageUrl, box }) {
  return (
    <div className="center ma">
      <div className="absolute mt2">
        <img
          id="inputImage"
          src={imageUrl}
          alt=""
          width="500px"
          height="auto"
        />
        {box.map((b, i) => {
          return (
            <div
              className="bounding-box"
              key={i}
              style={{
                top: box[i].topRow,
                right: box[i].rightCol,
                bottom: box[i].bottomRow,
                left: box[i].leftCol,
              }}
            ></div>
          );
        })}
      </div>
    </div>
  );
}

export default FaceRecognition;
