
let populateIndex = () => {
    let container = document.querySelector(`#content`);
    
    let main_header = document.createElement('h1');
    main_header.textContent = "Tucker's Sushi";
    

    let nav_bar_div = document.createElement('div');
    nav_bar_div.id = "nav-bar";

    let nav_ul = document.createElement('ul');
    nav_ul.id = "nav-ul";

    let home_page_li = document.createElement('li');
    let home_page_li_a = document.createElement('a');
    home_page_li_a.textContent = "Home";
    home_page_li.appendChild(home_page_li_a);

    let menu_page_li = document.createElement('li');
    let menu_page_li_a = document.createElement('a');
    menu_page_li_a.textContent = "Menu";
    menu_page_li.appendChild(menu_page_li_a);

    nav_ul.appendChild(home_page_li);
    nav_ul.appendChild(menu_page_li);
    nav_bar_div.appendChild(nav_ul);

    let main_sushi_picture = document.createElement('img');
    main_sushi_picture.id = "Main_Sushi_Picture";
    main_sushi_picture.src = "../img/RuSans-Sushi.jpeg";
    main_sushi_picture.alt = "Picture of Sushi";

    let commitment_header = document.createElement('h2');
    commitment_header.textContent = "Our Commitment to Quality";

    let description_paragraph = document.createElement('p');
    description_paragraph.textContent = "Here at Tucker's Sushi, we are always committed to the highest levels of quality in our seafood. Not only that, we also have the best sushi chefs in the northeast Atlanta area, bringing it all together for affordable prices.";

    container.appendChild(main_header);
    container.appendChild(nav_bar_div);
    container.appendChild(main_sushi_picture);
    container.appendChild(commitment_header);
    container.appendChild(description_paragraph);
}


export {populateIndex}