import {populateEssentials} from "./load_essentials"
import {populateIndex} from "./load_index"
import {populateMenu} from "./load_menu"
import {populateContact} from "./load_contact"


console.log("Running inside /src/ via index.js");

(function pageLoad() {

    populateEssentials();
    populateIndex();

    const container = document.querySelector(`#content`);
    let home_li = document.querySelector(`#home-li`);
    let menu_li = document.querySelector(`#menu-li`);
    let contact_li = document.querySelector(`#contact-li`);

    home_li.addEventListener("click", () => {
        console.log("Inside home event listener");
        let menu_container_div = document.querySelector(`#menu-container-div`); 
        let contact_container_div = document.querySelector(`#contact-container-div`);

        if (menu_container_div) {
            container.removeChild(menu_container_div);
            populateIndex();
        } else if (contact_container_div) {
            container.removeChild(contact_container_div);
            populateIndex();
        }

    });
    menu_li.addEventListener("click", () => {
        console.log("Inside menu event listener");
        let index_container_div = document.querySelector(`#index-container-div`); 
        let contact_container_div = document.querySelector(`#contact-container-div`);

        if (index_container_div) {
            container.removeChild(index_container_div);
            populateMenu();
        } else if (contact_container_div) {
            container.removeChild(contact_container_div);
            populateMenu();
        }

    });
    contact_li.addEventListener("click", () => {
        console.log("Inside contact event listener");
        let index_container_div = document.querySelector(`#index-container-div`); 
        let menu_container_div = document.querySelector(`#menu-container-div`);

        if (index_container_div) {
            container.removeChild(index_container_div);
            populateContact();
        } else if (menu_container_div) {
            container.removeChild(menu_container_div);
            populateContact();
        }

    });

})();




// I'd say delete and redo things just to follow the instructions
// and make this as easy and straightforward as possible.

// Notes
// 1. Have event listeners that listen on the links
// 2. Check if specific tabs are open. Unappend them if they are.
// 3. Call load_X.js
