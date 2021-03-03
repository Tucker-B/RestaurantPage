// Generates elements and page content and appends them to content <div>
let populateIndex = () => {

    // content <div> that elements will be appended to below
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
    home_page_li_a.textContent = "Home";
    home_page_li.appendChild(home_page_li_a);

    // Menu Page Navigation Button
    let menu_page_li = document.createElement('li');
    let menu_page_li_a = document.createElement('a');
    menu_page_li_a.textContent = "Menu";
    menu_page_li.appendChild(menu_page_li_a);

    // Contact Page Navigation Button
    let contact_page_li = document.createElement('li');
    let contact_page_li_a = document.createElement('a');
    contact_page_li_a.textContent = "Contact";
    contact_page_li.appendChild(contact_page_li_a);

    // Appending all navigation buttons to navigation unordered list
    nav_ul.appendChild(home_page_li);
    nav_ul.appendChild(menu_page_li);
    nav_ul.appendChild(contact_page_li);
    nav_bar_div.appendChild(nav_ul);

    // Picture of Restaurant Food for main page
    let main_sushi_picture = document.createElement('img');
    main_sushi_picture.id = "Main_Sushi_Picture";
    main_sushi_picture.src = "../img/RuSans-Sushi.jpeg";
    main_sushi_picture.alt = "Picture of Sushi";

    // Filler Text Title
    let commitment_header = document.createElement('h2');
    commitment_header.textContent = "Our Commitment to Quality";

    // Filler Text
    let description_paragraph = document.createElement('p');
    description_paragraph.textContent = "Here at Tucker's Sushi, we are always committed to the highest levels of quality in our seafood. Not only that, we also have the best sushi chefs in the northeast Atlanta area, bringing it all together for affordable prices.";

    // Elements appended to content <div> that already exists in index.html
    container.appendChild(main_header);
    container.appendChild(nav_bar_div);
    container.appendChild(main_sushi_picture);
    container.appendChild(commitment_header);
    container.appendChild(description_paragraph);
}

export {populateIndex}