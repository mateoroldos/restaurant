import './style.css';
import { displayTemplate } from './page-template.js';
import { displayHome } from './home.js';
import { displayAboutUs } from './about-us'
import { displayMenu } from './menu.js';

// DISPLAY PAGE TEMPLATE
displayTemplate();
displayHome();

// GET BUTTONS
const homeBtn = document.getElementById("btn-0");
const aboutUsBtn = document.getElementById("btn-1");
const menuBtn = document.getElementById("btn-2");

// EVENT LISTENERS
// HOME EVENT
homeBtn.addEventListener('click', () => {
  displayHome();
});

// ABOUT US EVENT
aboutUsBtn.addEventListener('click', () => {
  displayAboutUs();
});

// MENU EVENT
menuBtn.addEventListener('click', () => {
  displayMenu();
});