// CREATE ABOUT US CONTAINER
const aboutUsContainer = document.createElement("div");
aboutUsContainer.classList.add("content-container");

// CREATE ABOUT US HEADING
const aboutUsHeading = document.createElement("h1");
aboutUsHeading.textContent = "3000 Years Serving Our Clients"

// CREATE HOME CONTENT
const aboutUsContent = document.createElement("p");
aboutUsContent.textContent = "We are a family restuarant funded on 1000 A.C. We invented the hot-dog and hamburgers.";

// APPEND HOME
export function displayAboutUs() {
    const bodySection = document.querySelector("#body-section")
    const bodyContainer = document.querySelector("#body-container")
    bodySection.removeChild(bodyContainer);

    const newBodyContainer = document.createElement("div")
    newBodyContainer.setAttribute("id", "body-container")

    aboutUsContainer.appendChild(aboutUsHeading);
    aboutUsContainer.appendChild(aboutUsContent);

    // APPEND HOME CONTAINER
    newBodyContainer.appendChild(aboutUsContainer);
    bodySection.appendChild(newBodyContainer);
}