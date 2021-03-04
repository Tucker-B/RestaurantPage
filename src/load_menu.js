
let populateMenu = () => {

    let container = document.querySelector(`#content`);

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
    menu_container.style.visibility = "hidden";

    container.appendChild(menu_container);
}

export {populateMenu}