import React from "react";

function FaceCount({ box }) {
  let statement;
  if (box.length) {
    if (box.length === 1) {
      statement = `There is ${box.length} face in the picture`;
    } else {
      statement = `There are ${box.length} faces in the picture`;
    }
  } else {
    statement = "There is no picture with a face";
  }
  return <p>{statement}</p>;
}

export default FaceCount;
