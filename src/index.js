import menu from './menu.json';
import menuTemplate from './templates/menu.hbs';
import  onThemeSwitchToggleChange   from './js/swith_theme'
import  {body}   from './js/swith_theme'
import './sass/main.scss';


const menuList = document.querySelector('.menu');
menuList.innerHTML = menuTemplate(menu);





const themeSwitchToggle = document.querySelector('#theme-switch-toggle');
   


 
themeSwitchToggle.addEventListener('change', onThemeSwitchToggleChange);



const savetheme = window.localStorage.getItem('theme');
if (savetheme === 'dark-theme') {
    themeSwitchToggle.checked = true;
    body.classList.add("dark-theme");
} else {body.classList.add("light-theme");};