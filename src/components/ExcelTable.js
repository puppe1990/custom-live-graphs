import React, { useState } from "react";

function ExcelTable() {
  const [text, setText] = useState("");
  const [data, setData] = useState([]);

  function handleTextChange(event) {
    setText(event.target.value);
    const newData = event.target.value.split(",").map(Number);
    setData(newData);
  }

  return (
    <div className="excel-table">
      <textarea value={text} onChange={handleTextChange} />
      <table className="custom-table">
        <thead>
          <tr>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          {data.map((value, index) => (
            <tr key={index}>
              <td>{value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ExcelTable;
