import { loadHome } from "./Home"


export function loadApp(){
    if (window.ethereum){ // checks if metamask is installed
        loadHome();
    } else {
        document.querySelector('#app').innerHTML = '<div>Install Metamask</div>'
    }
}