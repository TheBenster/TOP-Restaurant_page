import restaurant from './restaurant.jpg';
import _ from 'lodash'
import './style.css';

function component(){
    const content = document.querySelector('#content')
    const element = document.createElement('div');
    const header = document.createElement('div');
    const restName = document.createElement('div');
    const directHead = document.createElement('div');
    const thaGit = document.createElement('div')
    const home = document.createElement('div');
    const menu = document.createElement('div');
    const contact = document.createElement('div')

    restName.textContent = "Cracker Jack's Sea Shack";

    home.classList.add('guides')
    home.id = 'current'
    menu.classList.add('guides')
    contact.classList.add('guides')

    // Navbar Items
    home.textContent = "Home";
    menu.textContent = "Menu";
    contact.textContent = "Contact";
    thaGit.textContent = "yds"
    directHead.appendChild(home);
    directHead.appendChild(menu);
    directHead.appendChild(contact);
    restName.classList.add('head1')
    directHead.classList.add('head2')
    thaGit.classList.add('head3')
    header.classList.add('header')
    content.appendChild(header)
    header.appendChild(restName);
    header.appendChild(directHead);
    header.appendChild(thaGit);

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
document.body.appendChild(component());