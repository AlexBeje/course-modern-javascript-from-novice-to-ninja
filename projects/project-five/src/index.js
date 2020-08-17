import Tooltip from "./ninja-ui/tooltip";
import "./ninja-ui/styles/tooltip.css";
import Dropdown from "./ninja-ui/dropdown";
import "./ninja-ui/styles/dropdown.css";
import Tabs from "./ninja-ui/tabs";
import "./ninja-ui/styles/tabs.css";

// create tooltip
const tooltip = new Tooltip(document.querySelector(".tooltip"));
tooltip.init();

// create dropdowns
const dropdowns = document.querySelectorAll(".dropdown");
dropdowns.forEach((dropdown) => {
  const instance = new Dropdown(dropdown);
  instance.init();
});

// create tabs
const tabs = new Tabs(document.querySelector(".tabs"));
tabs.init();