function Menu() {
  const menuContent = document.createElement("div");
  menuContent.textContent = "Test";

  return menuContent;
}

export default function displayMenu() {
  const content = document.querySelector("#content");
  content.textContent = "";
  content.append(menuContent);
  menu.id = "current";
}
