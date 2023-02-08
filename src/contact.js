function appendContact() {
  const cont = document.createElement("div");
  cont.innerHTML =
    "<div><h3>Name: </h3><p>Joe Living</p></div><div><h3>Address: </h3><p>Green Forest 56 - Canada</p></div><div><h3>Phone: </h3><p>0525454511343353</p></div><div><h3>E-mail: </h3><p>bearChef@gmail.com</p></div>";
  cont.classList.add("contact");
  return cont;
}
export { appendContact };
