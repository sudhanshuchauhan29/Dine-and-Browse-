

function displayData(data, containerId) {
  const container = document.getElementById(containerId);
  container.innerHTML = "";

  data.forEach(place => {
    const card = `
      <div class="boxe">
        <div class="b"></div>
        <div class="sboxe">
          <a href="${place.link}" target="_blank">
            <img src="${place.image}" alt="${place.name}">
          </a>
        </div>
        <h4>${place.name}</h4>
        <h3>${place.address}</h3>
      </div>
    `;
    container.innerHTML += card;
  });
}


displayData(restaurantvariety, "bookstore-variety");
displayData(bookvariety, "restaurant-variety");