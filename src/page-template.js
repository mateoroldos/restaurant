import Logo from './restaurant-logo.svg'

// GET HTML CONTENT
const content = document.getElementById("content");

// HEADER
const header = document.createElement("header");

// HEADER => LOGO
const headerLeftCol = document.createElement("div")
const myLogo = document.createElement("img");
myLogo.setAttribute("src", Logo);
myLogo.setAttribute("alt", "Restaurant Logo");
myLogo.setAttribute("width", "30px")

// HEADER => NAV MENU
const navMenu = document.createElement("nav");

// HEADER => NAV MENU => LINKS LIST
const menuLinksParent = document.createElement("ul");

// HEADER => NAV MENU => LINKS LIST => LINKS
const links = ["Home", "About Us", "Menu"];

function createMenu(array) {
    for (let index = 0; index < array.length; index++) {
        const menuLink = document.createElement("li");
        menuLink.setAttribute("style", "list-style-type:none");

        menuLink.innerHTML = "<button id=btn-"+index+">"+array[index]+"</button>";
        menuLinksParent.appendChild(menuLink);
    }
}
createMenu(links);

// BODY
const bodySection = document.createElement("section");
bodySection.setAttribute("id", "body-section")
const bodyContainer = document.createElement('div');
bodyContainer.setAttribute("id", "body-container");

export function displayTemplate() {
    // APPENDING HEADER
    header.appendChild(myLogo);
    navMenu.appendChild(menuLinksParent);
    header.appendChild(navMenu);
    content.appendChild(header);
    // APPENDING SECTION
    bodySection.appendChild(bodyContainer);
    content.appendChild(bodySection);
}

