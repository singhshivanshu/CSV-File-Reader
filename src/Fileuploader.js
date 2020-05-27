import React, { useState } from "react";
import image from "./Fileuploader.png"

function Fileuploader(props) {
  const [file, setFile] = useState({});

  const onClickHandler = () => {
    document.getElementById("file-input").click();
  };

  const onUploadHandler = e => {
    setFile(e.target.files[0]);
    props.onUpload(e.target.files[0])
  };

  console.log(file);

  return (
    <div className="outer-div">
      <div className="file-uploader-box">
        <img
          className="file-upload-icon"
          src={image}
          alt="file"
          onClick={onClickHandler}
        />
        <br />
        <button id="upload-btn" type="button" onClick={onClickHandler}>
          Click to upload
        </button>
        <br />
        <input type="file" id="file-input" onChange={onUploadHandler} accept=".csv"/>
        {file && <div className="file-info">{file.name}</div>}
      </div>
    </div>
  );
}

export default Fileuploader;