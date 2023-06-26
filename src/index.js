import _ from "lodash";
import "./style.css";
import displayMenu from "./menu";
import Header from "./Header.js";
import HomeContent from "./Home";
let content = document.querySelector("#content");
const blankHTML = document.createElement("div");
blankHTML.innerHTML = "";

let currentDisplay = "home";

export function renderContent() {
  content.append(blankHTML);
  if (currentDisplay === "home") {
    content.append(HomeContent());
  } else if (currentDisplay === "menu") {
    displayMenu();
  }
}
// document.body.appendChild(HomeContent())

Header();
renderContent();
