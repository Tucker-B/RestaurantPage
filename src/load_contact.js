
let populateContact = () => {

    let container = document.querySelector(`#content`);

    let contact_container = document.createElement('div');
    contact_container.id = "contact-container-div";

    let contact_header = document.createElement('h2');
    contact_header.textContent = "Contact";

    let address_header = document.createElement('h3');
    address_header.textContent = "Address:";
    let address_paragraph = document.createElement('p');
    address_paragraph.textContent = "Hollywood Plaza 777 Moonrock RD, Atlanta, GA 30000";

    let email_header = document.createElement('h3');
    email_header.textContent = "Contact Details:";
    let email_paragraph = document.createElement('p');
    email_paragraph.textContent = "hello@tuckerssushi.com";

    let phonenumber_paragraph = document.createElement('p');
    phonenumber_paragraph.textContent = "678-111-0000";

    let hours_header = document.createElement('h3');
    hours_header.textContent = "Our Hours:";
    let hours_paragraph_weekdays = document.createElement('p');
    hours_paragraph_weekdays.textContent = "Mon-Fri: 2pm - 10pm";
    let hours_paragraph_weekends = document.createElement('p');
    hours_paragraph_weekends.textContent = "Sat-Sun: 1pm - 11:30pm";

    contact_container.appendChild(contact_header);

    contact_container.appendChild(address_header);
    contact_container.appendChild(address_paragraph);

    contact_container.appendChild(email_header);
    contact_container.appendChild(email_paragraph);

    contact_container.appendChild(phonenumber_paragraph);

    contact_container.appendChild(hours_header);
    contact_container.appendChild(hours_paragraph_weekdays);
    contact_container.appendChild(hours_paragraph_weekends);

    contact_container.style.visibility = "hidden";

    container.appendChild(contact_container);
}

export {populateContact}