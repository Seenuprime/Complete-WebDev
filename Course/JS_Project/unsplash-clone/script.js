document.addEventListener("DOMContentLoaded", () => {
  const ACCESS_KEY = "NKmY45KaR7lsOLG8Q14-LT7g8cORawKGz16twpIrSAU";
  //   const searchInput = document.querySelector(".header input").value.trim();
  const webGallery = document.querySelector("#gallery");
  const loader = document.querySelector(".loader");

  let page = 1;
  let currentQuery = "random";

  async function fetchImages(query = "random", pageNum = 1) {
    loader.style.display = "block";

    const url = `https://api.unsplash.com/search/photos?query=${query}&page=${pageNum}&per_page=20&client_id=${ACCESS_KEY}`;

    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error("Failed to fetch images");

      const data = await response.json();
      displayImages(data.results);
    } catch (error) {
      console.error("Error:", error);
      webGallery.innerHTML += `<p style="color:red; text-align:center;">Failed to load images 😢</p>`;
    } finally {
      loader.style.display = "none";
    }
  }

  function displayImages(images) {
    images.forEach((image) => {
      const photoCard = document.createElement("div");
      photoCard.classList.add("photo-card");

      const img = document.createElement("img");
      img.src = image.urls.small;
      img.alt = image.alt_description || "Unsplash photo";
      img.loading = "lazy";

      photoCard.appendChild(img);
      webGallery.appendChild(photoCard);
    });
  }

  fetchImages(currentQuery);
});
