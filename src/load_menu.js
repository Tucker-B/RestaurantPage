
let populateMenu = () => {

    let container = document.querySelector(`#content`);

    let focused_li = document.querySelector(`#menu-li`);
    focused_li.style.backgroundColor = "#33ccff";

    let home_li = document.querySelector(`#home-li`);
    home_li.style.backgroundColor = "transparent";

    let contact_li = document.querySelector(`#contact-li`);
    contact_li.style.backgroundColor = "transparent";

    let menu_container = document.createElement('div');
    menu_container.id = "menu-container-div";

    let appetizers_menu_picture = document.createElement('img');
    appetizers_menu_picture.id = "appetizers-menu-picture";
    appetizers_menu_picture.src = "../img/Appetizers.jpg";
    appetizers_menu_picture.alt = "Picture of Appetizers Menu";
    appetizers_menu_picture.style.width = "600px";
    appetizers_menu_picture.style.height = "800px";

    let sushi_menu_picture = document.createElement('img');
    sushi_menu_picture.id = "sushi-menu-picture";
    sushi_menu_picture.src = "../img/Sushi_Rolls.jpg";
    sushi_menu_picture.alt = "Picture of Sushi Menu";
    sushi_menu_picture.style.width = "600px";
    sushi_menu_picture.style.height = "800px";

    menu_container.appendChild(appetizers_menu_picture);
    menu_container.appendChild(sushi_menu_picture);

    container.appendChild(menu_container);
}

export {populateMenu}