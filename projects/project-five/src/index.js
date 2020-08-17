import Tooltip from "./ninja-ui/tooltip";
import "./ninja-ui/styles/tooltip.css";
import Dropdown from "./ninja-ui/dropdown";
import "./ninja-ui/styles/dropdown.css";

// create tooltip
const tooltip = new Tooltip(document.querySelector(".tooltip"));
tooltip.init();

// create dropdowns
const dropdowns = document.querySelectorAll('.dropdown');
dropdowns.forEach(dropdown => {
  const instance = new Dropdown(dropdown);
  instance.init();
})