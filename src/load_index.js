// Generates elements and page content and appends them to content <div>
let populateIndex = () => {

    // content <div> that elements will be appended to below via index_container
    let container = document.querySelector(`#content`);

    // <div> that all elements below will be appended to for index page
    let index_container = document.createElement('div');
    index_container.id = "index-container-div";

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

    // Elements appended to index-content <div>
    index_container.appendChild(main_sushi_picture);
    index_container.appendChild(commitment_header);
    index_container.appendChild(description_paragraph);

    // All elements appended to index-container-div are appended to main <div>
    container.appendChild(index_container);
}

export {populateIndex}