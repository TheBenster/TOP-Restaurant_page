import HomeContent from './index.js'

export default function Header(){
    const nav = document.querySelector('#nav')
    const header = document.createElement('div');
    const restName = document.createElement('div');
    const directHead = document.createElement('div');
    const thaGit = document.createElement('div')
    const home = document.createElement('div');
    const menu = document.createElement('div');
    const contact = document.createElement('div')

    home.addEventListener('click', () => {
        home.id = 'current';
        menu.removeAttribute('id');
        contact.removeAttribute('id');
        currentDisplay = 'home'; // Update the current display to 'home'
        renderContent(); // Render the appropriate content
    });

    menu.addEventListener('click', () => {
        menu.id = 'current';
        home.removeAttribute('id');
        currentDisplay = 'menu'; // Update the current display to 'menu'
        renderContent(); // Render the appropriate content
    });

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
    
    header.appendChild(restName);
    header.appendChild(directHead);
    header.appendChild(thaGit);
    nav.appendChild(header)
    document.body.appendChild(nav)
    // renderContent()
}