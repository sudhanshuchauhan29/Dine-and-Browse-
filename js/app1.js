function displayData(data, containerId) {
  const contain = document.getElementById(containerId);
  contain.innerHTML = "";

  data.forEach(place => {
    const card = `
      <div class="boxes">
        <div class="b"></div>
        <div class="sbox">
          <a href="${place.link}" target="_blank">
            <img src="${place.image}" alt="${place.name}">
          </a>
        </div>
        <h4>${place.name}</h4>
        <h3><a href="${place.link}" target="_blank">${"Discover"}</a> </h3>
      </div>
    `;
    contain.innerHTML += card;
  });
}

displayData(restaurants, "restaurant-container");
displayData(bookstores, "bookstore-container");
