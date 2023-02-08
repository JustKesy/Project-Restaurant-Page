function appendInfo() {
  const info = document.createElement("div");
  info.innerHTML =
    "<h2>Eat at Joes..<br>is a little mountain restaurant.</h2><p>It's on the edge of the coniferous forest.<br> With a lot of fresh breaz,delicious meals and healthi drinks.<br>The best place for you'r family and you to get a taste of nature..</p><h2>Come and enjoy with us! </h2> ";
  info.classList.add("info");
  return info;
}
export { appendInfo };
