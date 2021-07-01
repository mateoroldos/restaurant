// CREATE MENU CONTAINER
const menuContainer = document.createElement("div")
menuContainer.classList.add("content-container");

// DISHES CLASS
class Dish {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    
    addToMenu() {
        const menuElementContainer = document.createElement("div")
        const menuName = document.createElement("div");
        menuName.innerHTML = this.name;
        const menuPrice = document.createElement("div");
        menuPrice.innerHTML = this.price;
        menuElementContainer.appendChild(menuName);
        menuElementContainer.appendChild(menuPrice);
        return menuElementContainer;
    }
}

// CREATE DISHES
let hamburger = new Dish("Hamburguer", "$10");
let hotDog = new Dish("Hot Dog", "$7");
let salad = new Dish("Salad", "$8"); 

// APPEND DISHES
menuContainer.appendChild(hamburger.addToMenu())
menuContainer.appendChild(hotDog.addToMenu())
menuContainer.appendChild(salad.addToMenu())

// APPEND MENU
export function displayMenu() {
    const bodySection = document.querySelector("#body-section")
    const bodyContainer = document.querySelector("#body-container")
    bodySection.removeChild(bodyContainer);

    const newBodyContainer = document.createElement("div")
    newBodyContainer.setAttribute("id", "body-container")

    // APPEND MENU CONTAINER
    newBodyContainer.appendChild(menuContainer);
    bodySection.appendChild(newBodyContainer);
}







