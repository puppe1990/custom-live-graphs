import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function ButtonRow() {
  const [chartType, setChartType] = useState("line");
  const [chartColor, setChartColor] = useState("blue");
  const [background, setBackground] = useState("white");
  const [aspectRatio, setAspectRatio] = useState("4:3");
  const [darkMode, setDarkMode] = useState(false);

  function handleChartTypeChange(event) {
    setChartType(event.target.value);
  }

  function handleChartColorChange(event) {
    setChartColor(event.target.value);
  }

  function handleBackgroundChange(event) {
    setBackground(event.target.value);
  }

  function handleAspectRatioChange(event) {
    setAspectRatio(event.target.value);
  }

  function handleDarkModeChange(event) {
    setDarkMode(event.target.checked);
  }

  return (
    <div className="button-row">
      <div className="btn-group mr-2" role="group">
        <select
          className="form-select"
          value={chartType}
          onChange={handleChartTypeChange}
        >
          <option value="line">Line Chart</option>
          <option value="bar">Bar Chart</option>
          <option value="pie">Pie Chart</option>
        </select>
      </div>
      <div className="btn-group mr-2" role="group">
        <select
          className="form-select"
          value={chartColor}
          onChange={handleChartColorChange}
        >
          <option value="blue">Blue</option>
          <option value="red">Red</option>
          <option value="green">Green</option>
        </select>
      </div>
      <div className="btn-group mr-2" role="group">
        <select
          className="form-select"
          value={background}
          onChange={handleBackgroundChange}
        >
          <option value="white">White</option>
          <option value="gray">Gray</option>
          <option value="black">Black</option>
        </select>
      </div>
      <div className="btn-group mr-2" role="group">
        <select
          className="form-select"
          value={aspectRatio}
          onChange={handleAspectRatioChange}
        >
          <option value="4:3">4:3</option>
          <option value="16:9">16:9</option>
          <option value="1:1">1:1</option>
        </select>
      </div>
      <div className="btn-group mr-2" role="group">
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            checked={darkMode}
            onChange={handleDarkModeChange}
          />
          <label className="form-check-label">Dark Mode</label>
        </div>
      </div>
      <button className="btn btn-primary mr-2">Export</button>
      <button className="btn btn-primary">Share</button>
    </div>
  );
}

export default ButtonRow;
