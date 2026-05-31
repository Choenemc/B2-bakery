function showPictures() {
  const images = ["pic1.jpg", "pic2.jpg", "pic3.jpg"];
  const gallery = document.getElementById("gallery");

  gallery.innerHTML = ""; // clear before adding

  images.forEach(img => {
    const imageElement = document.createElement("img");
    imageElement.src = "images/" + img;
    imageElement.classList.add("gallery-img");

    gallery.appendChild(imageElement);
  });
}