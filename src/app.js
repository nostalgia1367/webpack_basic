import { sum } from './math.js';
import './app.css';
import btsImg from './img/bts.png';


window.addEventListener('DOMContentLoaded', () => {
    sum(1,2);
    const el = document.querySelector('#app');
    el.innerHTML = `
        <h1> 1+ 2 = ${sum(1,2)}</h1>
        <div><img src="${btsImg}" alt="test"/></div>
    
    `;
});