import React, { useState } from "react";

function Csvfilereader() {
  const [rows, setRows] = useState(null);
  const [index, setIndex] = useState(5);
  const [initialIndex, setInitialIndex] = useState(0);

  const uploadFileHandler = (e) => {
    let file = e.target.files[0];
    if (!file) {
      return;
    }
   //Api to read the contents of file that we are passing 
    let readFile = new FileReader();
    
    //running a function when readFile is loaded
    readFile.onload = function (e) {

      let contents = e.target.result;


      let lines = contents.split("\n");

      let result = [];

      let title = lines[0].split(",");

      //algorithm to change uploaded csv file into json

      for (let i = 1; i < lines.length; i++) {
        let obj = {};
        let currentline = lines[i].split(",");

        for (let j = 0; j < title.length; j++) {
          obj[title[j]] = currentline[j];
        }

        result.push(obj);
      }
      setRows(result);
    };
    readFile.readAsText(file);
  };


  return (
    <div>
      <nav className="navbar">
        <span className="heading">Star Apps Assignment</span>
      </nav>
      <label for="file-upload" class="custom-file-upload">
        Click to upload
      </label>
      <input
        id="file-upload"
        onChange={uploadFileHandler}
        accept=".csv"
        type="file"
      />
      <br />
      {rows && (
        <React.Fragment>
          <button
            className="btn-1"
            disabled={initialIndex <= 0}
            onClick={() => {
              setInitialIndex(initialIndex - 5);
              setIndex(index - 5);
            }}
          >
            Back
          </button>
          <button
            className="btn-1"
            disabled={Object.keys(rows[0]).length < index}
            onClick={() => {
              setInitialIndex(initialIndex + 5);
              setIndex(index + 5);
            }}
          >
            Next
          </button>
          <table>
            <tr>
              {rows &&
                Object.keys(rows[0])
                  .filter((ele, i) => i >= initialIndex && i <= index)
                  .map((ele, index) => {
                    return <th>{ele}</th>;
                  })}
            </tr>
            {rows.map((row) => (
              <tr>
                {Object.values(row)
                  .filter((ele, i) => i >= initialIndex && i <= index)
                  .map((r) => (
                    <td>{r}</td>
                  ))}
              </tr>
            ))}
          </table>
        </React.Fragment>
      )}
    </div>
  );
}

export default Csvfilereader;
