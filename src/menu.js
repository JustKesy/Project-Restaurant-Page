import Soup from "./img/soup.jpg";
import Barbecue from "./img/barbecue.jpg";
import Pancake from "./img/pancake.jpg";
import Lemon from "./img/lemonade.jpg";

function appendMenu() {
  const menu = document.createElement("div");
  menu.classList.add("menu");
  const div1 = document.createElement("div");
  div1.classList.add("menu-card");
  const img1 = document.createElement("img");
  img1.classList.add("menu-img");
  img1.src = Soup;
  const price1 = document.createElement("div");
  price1.classList.add("price");
  price1.innerHTML = "<h2>Homemade Soup:</h2><h1>2.35$</h1>";
  div1.appendChild(img1);
  div1.appendChild(price1);
  menu.appendChild(div1);

  const div2 = document.createElement("div");
  div2.classList.add("menu-card");
  const img2 = document.createElement("img");
  img2.classList.add("menu-img");
  img2.src = Barbecue;
  const price2 = document.createElement("div");
  price2.classList.add("price");
  price2.innerHTML = "<h2>Barbecue 1kg:</h2><h1>8.99$</h1>";
  div2.appendChild(img2);
  div2.appendChild(price2);
  menu.appendChild(div2);

  const div3 = document.createElement("div");
  div3.classList.add("menu-card");
  const img3 = document.createElement("img");
  img3.classList.add("menu-img");
  img3.src = Pancake;
  const price3 = document.createElement("div");
  price3.classList.add("price");
  price3.innerHTML = "<h2>Pancake with Maple Syrup:</h2><h1>3.50$</h1>";
  div3.appendChild(img3);
  div3.appendChild(price3);
  menu.appendChild(div3);

  const div4 = document.createElement("div");
  div4.classList.add("menu-card");
  const img4 = document.createElement("img");
  img4.classList.add("menu-img");
  img4.src = Lemon;
  const price4 = document.createElement("div");
  price4.classList.add("price");
  price4.innerHTML = "<h2>Fresh Lemon Juice:</h2><h1>1.45$</h1>";
  div4.appendChild(img4);
  div4.appendChild(price4);
  menu.appendChild(div4);

  return menu;
}

export { appendMenu };
