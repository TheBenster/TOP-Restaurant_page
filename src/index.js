import restaurant from './restaurant.jpg';
import _ from 'lodash'
import css from './style.css';

function component(){
    const content = document.querySelector('#content')
    const element = document.createElement('div');
    const pic = new Image();
    pic.classList.add('pic')
    pic.src = restaurant;
    element.innerHTML = _.join(['Hello', 'TEST TEST'], ' ')
    element.appendChild(pic)
    element.classList.add('pic')
    content.appendChild(element)
    return element, content
}
document.body.appendChild(component());