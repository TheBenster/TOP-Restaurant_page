export default function HomeContent() {
  const content = document.querySelector("#content");
  content.innerHTML = "";

  // Create elements
  const element = document.createElement("div");
  const pic = new Image();
  const mission = document.createElement("div");
  const pictureDiv = document.createElement("div");
  const missionDiv = document.createElement("div");
  const homeHero = document.createElement("div");
  const hoursDiv = document.createElement("div");
  const hour = document.createElement("div");
  const hourheader = document.createElement("div");
  const locationDiv = document.createElement("div");
  const locationTxt = document.createElement("div");

  // Set classes and content
  pic.classList.add("pic");
  element.classList.add("pic");
  mission.classList.add("mission");
  pictureDiv.classList.add("mission-item");
  missionDiv.classList.add("mission-item", "mission-item2");
  homeHero.classList.add("homeHero");
  hoursDiv.classList.add("hours-div");
  hourheader.innerHTML = "<b>Hours</b>";
  hour.innerHTML =
    "<b>Monday-Thursday</b><br/>9am-8pm<br/><b>Friday-Saturday</b><br/>7am-10pm<br/><b>Sunday</b><br/>12pm-6pm";
  locationDiv.classList.add("location");
  locationDiv.innerHTML = "<b>Location</b>";
  locationTxt.textContent = "123 Random Address St";

  // Append elements
  pictureDiv.appendChild(pic);
  missionDiv.innerHTML =
    "At Cracker Jacks Sea Shack, our mission is to transport our guests to a coastal paradise where they can indulge in the flavors of the sea. <br /> <br />We strive to create a memorable dining experience by offering a vibrant and relaxed atmosphere, impeccable service, and a menu bursting with fresh, delicious seafood.";
  mission.appendChild(pictureDiv);
  mission.appendChild(missionDiv);
  content.appendChild(mission);
  hoursDiv.appendChild(hourheader);
  hoursDiv.appendChild(hour);
  homeHero.appendChild(hoursDiv);
  locationDiv.appendChild(locationTxt);
  homeHero.appendChild(locationDiv);
  content.appendChild(homeHero);

  return content;
}
