import React from "react";
import { render } from "react-dom";
import Hello from "./Hello";
import OnScroll from "./React-onscroll";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center",
  height: "8000px"
};

const App = () => (
  <OnScroll>
    {scroll => (
      <div style={styles}>
        <h2 style={{ position: "fixed", top: 0 }}>{JSON.stringify(scroll)}</h2>
      </div>
    )}
  </OnScroll>
);

render(<App />, document.getElementById("root"));
