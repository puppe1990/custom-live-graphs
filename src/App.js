import React from "react";
import ButtonRow from "./components/ButtonRow";
import Graph from "./components/Graph";
import ExcelTable from "./components/ExcelTable";

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <ButtonRow />
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <Graph />
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <ExcelTable />
        </div>
      </div>
    </div>
  );
}

export default App;
