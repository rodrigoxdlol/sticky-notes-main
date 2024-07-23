import React from "react";

function PaperNote(props) {
  const rotation = `${props.index % 2 === 0 ? "-" : ""}5deg`;
  const style = {
    rotate: rotation
  };

  const styleC = {};


  if (props.checked) {
    styleC.backgroundColor = "#eb7061";
    
  } 
  return (
    <div className="paper-note mt-5" style={{ ...style, ...styleC }}>
      <div className="title-note">
        <h3 style={styleC}>{props.title}</h3>
      </div>
      <div className="txt-note">
        <p style={styleC}>{props.txt}</p>
      </div>
    </div>
  );
}

export default PaperNote;
