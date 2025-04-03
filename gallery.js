// Array of photo data
const photos = [
  {
    src: "images/couch.jpg",
    caption: "Cozy Couch",
    description: "A comfy couch for relaxing.",
    alt: "Dog relaxing on a cozy couch",
  },
  {
    src: "images/cute.jpg",
    caption: "Adorable Pup",
    description: "This puppy will melt your heart!",
    alt: "Cute puppy looking at camera",
  },
  {
    src: "images/german.jpg",
    caption: "German Shepherd",
    description: "The loyal German Shepherd.",
    alt: "German Shepherd dog standing proudly",
  },
  {
    src: "images/golden.jpg",
    caption: "Golden Retriever",
    description: "The playful Golden Retriever.",
    alt: "Golden Retriever playing in the park",
  },
  {
    src: "images/hannah.jpg",
    caption: "Lovely Hannah",
    description: "Hannah enjoying a sunny day.",
    alt: "Hannah the dog enjoying sunshine",
  },
  {
    src: "images/puppy.jpg",
    caption: "Playful Puppy",
    description: "Boundless energy in a tiny package.",
    alt: "Playful puppy running in grass",
  },
  {
    src: "images/sleep.jpg",
    caption: "Sweet Dreams",
    description: "A sleepy pup recharging energy.",
    alt: "Sleeping puppy curled up",
  },
  {
    src: "images/small_cute.jpg",
    caption: "Tiny & Cute",
    description: "The charm of small and cute.",
    alt: "Small cute puppy sitting",
  },
  {
    src: "images/small.jpg",
    caption: "Small Friend",
    description: "A little companion to brighten your day.",
    alt: "Small dog looking friendly",
  },
  {
    src: "images/snow.jpg",
    caption: "Snowy Adventure",
    description: "Exploring the snowy outdoors.",
    alt: "Dog playing in snow",
  },
];

// Wait for DOM to be fully loaded
document.addEventListener("DOMContentLoaded", () => {
  const gallery = document.querySelector(".gallery");
  const infoBox = document.querySelector(".info-box");
  const overlay = document.querySelector(".overlay");
  const closeLink = document.querySelector(".close-link");

  if (!gallery || !infoBox || !overlay || !closeLink) {
    console.error("Required elements not found in the DOM");
    return;
  }

  // Function to show info box
  function showInfo(caption, description) {
    const heading = infoBox.querySelector("h2");
    const text = infoBox.querySelector("p");

    if (heading && text) {
      heading.textContent = caption;
      text.textContent = description;
      infoBox.style.display = "block";
      overlay.style.display = "block";
    }
  }

  // Function to hide info box
  function hideInfoBox() {
    infoBox.style.display = "none";
    overlay.style.display = "none";
  }

  // Add click event listener to close link
  closeLink.addEventListener("click", hideInfoBox);

  // Add click event listener to overlay
  overlay.addEventListener("click", hideInfoBox);

  // Populate gallery with error handling
  photos.forEach((photo) => {
    try {
      const listItem = document.createElement("li");
      const photoContainer = document.createElement("div");
      photoContainer.classList.add("photo-container");

      const image = document.createElement("img");
      image.src = photo.src;
      image.alt = photo.alt || photo.caption; // Fallback to caption if alt is missing
      image.classList.add("photo");

      // Add loading state
      image.onload = () => {
        image.classList.add("loaded");
      };

      image.onerror = () => {
        image.src = "images/placeholder.jpg"; // Fallback image
        image.alt = "Image not available";
      };

      const description = document.createElement("div");
      description.classList.add("description");
      description.textContent = photo.description;
      description.setAttribute("role", "button");
      description.setAttribute("tabindex", "0");
      description.setAttribute(
        "aria-label",
        `View details for ${photo.caption}`
      );

      // Add keyboard accessibility
      description.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          showInfo(photo.caption, photo.description);
        }
      });

      description.addEventListener("click", () => {
        showInfo(photo.caption, photo.description);
      });

      const caption = document.createElement("span");
      caption.textContent = photo.caption;
      caption.classList.add("caption");

      photoContainer.appendChild(image);
      photoContainer.appendChild(description);
      listItem.appendChild(photoContainer);
      listItem.appendChild(caption);
      gallery.appendChild(listItem);
    } catch (error) {
      console.error("Error creating gallery item:", error);
    }
  });
});
