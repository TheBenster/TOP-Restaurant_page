import { renderContent } from "./index.js";
let currentDisplay = "home";

export default function Header() {
  const nav = document.querySelector("#nav");
  nav.id = "nav";
  const header = document.createElement("div");
  const restName = document.createElement("div");
  const directContainer = document.createElement("div");
  const thaGit = document.createElement("div");
  const home = document.createElement("div");
  const menu = document.createElement("div");
  const contact = document.createElement("div");

  home.addEventListener("click", () => {
    home.id = "current";
    menu.removeAttribute("id");
    contact.removeAttribute("id");
    currentDisplay = "home";
    console.log(currentDisplay); // Update the current display to 'home'
    // renderContent(); // Render the appropriate content
  });

  menu.addEventListener("click", () => {
    menu.id = "current";
    home.removeAttribute("id");
    alert("test");
    currentDisplay = "menu";
    console.log(currentDisplay); // update the current display to 'menu'
    renderContent(); // render the appropriate content
  });

  restName.textContent = "Cracker Jack's Sea Shack";

  home.classList.add("guides");
  home.id = "current";
  menu.classList.add("guides");
  contact.classList.add("guides");

  // Navbar Items
  home.textContent = "Home";
  menu.textContent = "Menu";
  contact.textContent = "Contact";
  thaGit.textContent = "yds";

  directContainer.appendChild(home);
  directContainer.appendChild(menu);
  directContainer.appendChild(contact);
  restName.classList.add("head1");
  directContainer.classList.add("head2");
  thaGit.classList.add("head3");
  header.classList.add("header");

  header.appendChild(restName);
  header.appendChild(directContainer);
  header.appendChild(thaGit);
  nav.appendChild(header);

  return [nav, currentDisplay];
  // renderContent()
}
