import "./style.css";
import { appendInfo } from "./info.js";
import { appendContact } from "./contact.js";
import { appendMenu } from "./menu.js";

const infoBtn = document.querySelector(".info-btn");
const menuBtn = document.querySelector(".menu-btn");
const contactBtn = document.querySelector(".contact-btn");

infoBtn.addEventListener("click", () => {
  modul.innerHTML = " ";
  modul.appendChild(appendInfo());
});

menuBtn.addEventListener("click", () => {
  modul.innerHTML = " ";
  modul.appendChild(appendMenu());
});

contactBtn.addEventListener("click", () => {
  modul.innerHTML = " ";
  modul.appendChild(appendContact());
});

const modul = document.querySelector(".module");
modul.appendChild(appendInfo());
