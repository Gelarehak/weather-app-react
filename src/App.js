import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div>
      <Weather />
      <footer>
        This project was coded by{" "}
        <a
          href="https://gallant-clarke-d3d3cb.netlify.app"
          target="_blank"
          rel="noreferrer"
        >
          Gelareh Akasheh
        </a>{" "}
        and is{" "}
        <a
          href="https://github.com/Gelarehak/weather-app-react"
          target="_blank"
          rel="noreferrer"
        >
          open-sourced on GitHub
        </a>
      </footer>
    </div>
  );
}
