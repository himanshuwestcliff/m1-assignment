// Array of photo data
const photos = [
  {
    src: "images/couch.jpg",
    caption: "Cozy Couch",
    description: "A comfy couch for relaxing.",
  },
  {
    src: "images/cute.jpg",
    caption: "Adorable Pup",
    description: "This puppy will melt your heart!",
  },
  {
    src: "images/german.jpg",
    caption: "German Shepherd",
    description: "The loyal German Shepherd.",
  },
  {
    src: "images/golden.jpg",
    caption: "Golden Retriever",
    description: "The playful Golden Retriever.",
  },
  {
    src: "images/hannah.jpg",
    caption: "Lovely Hannah",
    description: "Hannah enjoying a sunny day.",
  },
  {
    src: "images/puppy.jpg",
    caption: "Playful Puppy",
    description: "Boundless energy in a tiny package.",
  },
  {
    src: "images/sleep.jpg",
    caption: "Sweet Dreams",
    description: "A sleepy pup recharging energy.",
  },
  {
    src: "images/small_cute.jpg",
    caption: "Tiny & Cute",
    description: "The charm of small and cute.",
  },
  {
    src: "images/small.jpg",
    caption: "Small Friend",
    description: "A little companion to brighten your day.",
  },
  {
    src: "images/snow.jpg",
    caption: "Snowy Adventure",
    description: "Exploring the snowy outdoors.",
  },
];

const gallery = document.querySelector(".gallery");
const infoBox = document.getElementById("infoBox");
const infoHeading = document.getElementById("infoHeading");
const infoText = document.getElementById("infoText");
const closeInfo = document.getElementById("closeInfo");

// Function to open info box
function showInfo(caption, description) {
  infoHeading.innerHTML = caption;
  infoText.innerHTML = description;
  infoBox.style.visibility = "visible";
}

// Function to close info box
closeInfo.addEventListener("click", () => {
  infoBox.style.visibility = "hidden";
});

// Populate gallery
photos.forEach((photo) => {
  const listItem = document.createElement("li");
  const image = document.createElement("img");
  image.src = photo.src;
  image.classList.add("photo");

  const caption = document.createElement("span");
  caption.textContent = photo.caption;
  caption.classList.add("caption");

  // Event listener for caption click
  caption.addEventListener("click", () =>
    showInfo(photo.caption, photo.description)
  );

  listItem.appendChild(image);
  listItem.appendChild(caption);
  gallery.appendChild(listItem);
});
