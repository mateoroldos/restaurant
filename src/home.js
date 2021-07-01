// CREATE HOME CONTAINER
const homeContainer = document.createElement("div");
homeContainer.classList.add("content-container");

// CREATE HOME HEADING
const homeHeading = document.createElement("h1");
homeHeading.textContent = "Welcome To My Restaurant"

// CREATE HOME CONTENT
const homeContent = document.createElement("p");
homeContent.textContent = "We simply serve the best food of the world"

// APPEND HOME
export function displayHome() {
    const bodySection = document.querySelector("#body-section")
    const bodyContainer = document.querySelector("#body-container")
    bodySection.removeChild(bodyContainer);

    const newBodyContainer = document.createElement("div");
    newBodyContainer.setAttribute("id", "body-container");

    homeContainer.appendChild(homeHeading);
    homeContainer.appendChild(homeContent);

    // APPEND HOME CONTAINER
    newBodyContainer.appendChild(homeContainer);
    bodySection.appendChild(newBodyContainer);
}