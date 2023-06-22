export default function HomeContent(){
    const content = document.querySelector('#content')
    const element = document.createElement('div');

    // pic after header
    const pic = new Image();
    pic.classList.add('pic')
    pic.src = restaurant;
    element.classList.add('pic')

    const mission = document.createElement('div')
    
    mission.classList.add('mission')

    const pictureDiv = document.createElement('div');
    const missionDiv = document.createElement('div');

    pictureDiv.classList.add('mission-item')
    missionDiv.classList.add('mission-item', 'mission-item2')

    pictureDiv.appendChild(pic)
    missionDiv.innerHTML = "At Cracker Jacks Sea Shack, our mission is to transport our guests to a coastal paradise where they can indulge in the flavors of the sea. <br /> <br />We strive to create a memorable dining experience by offering a vibrant and relaxed atmosphere, impeccable service, and a menu bursting with fresh, delicious seafood."

    mission.appendChild(pictureDiv)
    mission.appendChild(missionDiv)

    content.appendChild(mission)

    const homeHero = document.createElement('div')
    homeHero.classList.add('homeHero');
    const hoursDiv = document.createElement('div');
    hoursDiv.classList.add('hours-div')

    const hour = document.createElement('div')
    hour.innerHTML= "<b>Monday-Thursday</b><br/>9am-8pm<br/><b>Friday-Saturday</b><br/>7am-10pm<br/><b>Sunday</b><br/>12pm-6pm"

    const hourheader = document.createElement('div')
    hourheader.innerHTML = "<b>Hours</b>"

    const locationDiv = document.createElement('div');
    locationDiv.classList.add('location')
    locationDiv.innerHTML = "<b>Location</b>"

    const locationTxt = document.createElement('div')
    locationTxt.textContent = "123 Random Address St"
    locationDiv.appendChild(locationTxt)
    
    hoursDiv.appendChild(hourheader)
    hoursDiv.appendChild(hour)

    homeHero.appendChild(hoursDiv)
    homeHero.appendChild(locationDiv)
    
    content.appendChild(homeHero)
     return content
}