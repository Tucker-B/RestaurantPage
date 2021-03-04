
let populateEssentials = () => {
    let container = document.querySelector(`#content`);

    // Web page restaurant title/header
    let main_header = document.createElement('h1');
    main_header.textContent = "Tucker's Sushi";

    // Navigation Bar Div
    let nav_bar_div = document.createElement('div');
    nav_bar_div.id = "nav-bar";

    // Unordered list for navigation bar
    let nav_ul = document.createElement('ul');
    nav_ul.id = "nav-ul";

    // Home Page Navigation Button
    let home_page_li = document.createElement('li');
    let home_page_li_a = document.createElement('a');
    home_page_li.id = "home-li";
    home_page_li_a.id = "home-a";
    home_page_li_a.textContent = "Home";
    home_page_li.appendChild(home_page_li_a);

    // Menu Page Navigation Button
    let menu_page_li = document.createElement('li');
    let menu_page_li_a = document.createElement('a');
    menu_page_li.id = "menu-li";
    menu_page_li_a.id = "menu-a";
    menu_page_li_a.textContent = "Menu";
    menu_page_li.appendChild(menu_page_li_a);

    // Contact Page Navigation Button
    let contact_page_li = document.createElement('li');
    let contact_page_li_a = document.createElement('a');
    contact_page_li.id = "contact-li";
    contact_page_li_a.id = "contact-a";
    contact_page_li_a.textContent = "Contact";
    contact_page_li.appendChild(contact_page_li_a);

    // Appending all navigation buttons to navigation unordered list
    nav_ul.appendChild(home_page_li);
    nav_ul.appendChild(menu_page_li);
    nav_ul.appendChild(contact_page_li);
    nav_bar_div.appendChild(nav_ul);

    container.appendChild(main_header);
    container.appendChild(nav_bar_div);
}

export {populateEssentials}