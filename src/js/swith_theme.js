export const body = document.querySelector('body');
export default function onThemeSwitchToggleChange  (evt) {
  
    if (this.checked) {
         body.classList.add("dark-theme");
        body.classList.remove("light-theme");
        window.localStorage.setItem('theme', 'dark-theme');
       
        
    }
    else {
        body.classList.remove("dark-theme");
        body.classList.add("light-theme");
        window.localStorage.setItem('theme', 'light-theme');
        
    };
   

}