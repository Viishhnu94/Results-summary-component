import "./App.css";

import { useState } from "react";
import data from "./data.json";

function App() {
  const [items] = useState(data);

  return (
    <div className="main-container">
      <section className="section-container">
        <div className="section-1">
          <h3 style={{ color: "hsl(221, 100%, 96%)", fontSize: "18px" }}>
            Your Result
          </h3>
          <p className="result-para">
            <span>76</span>of 100
          </p>
          <h2 style={{ fontSize: "25px", color: "#ffffff" }}>Great</h2>
          <p style={{ fontSize: "15px", color: "hsl(221, 100%, 96%)" }}>
            You Scored higher than 65% of the people who have taken these tests.
          </p>
        </div>
        <div className="section-2">
          <h3>Summary</h3>
          <ul>
            {items.map((eachItem) => {
              return (
                <li
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "2px 10px",
                    backgroundColor: eachItem.backgroundcolor,
                    borderRadius: "11px",
                  }}
                >
                  <div className="icon-category-container">
                    <img src={eachItem.icon} alt={eachItem.category} />
                    <p style={{ color: eachItem.coloor }}>
                      {eachItem.category}
                    </p>
                  </div>
                  <div className="score-container">
                    <p style={{ color: "hsl(224, 30%, 27%)" }}>
                      {eachItem.score}
                    </p>
                    <p style={{ color: "#808080" }}>/100</p>
                  </div>
                </li>
              );
            })}
          </ul>
          <button className="button-style" type="button">
            Continue
          </button>
        </div>
      </section>
    </div>
  );
}

export default App;
