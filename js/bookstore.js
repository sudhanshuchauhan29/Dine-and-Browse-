const r = bookstoreData;

const container = document.getElementById("bookstore");

container.innerHTML = `
<h1>${r.name}</h1>

<div class="container">
${r.images.map(img => `<img src="${img}">`).join("")}
</div>

<h2>Address : ${r.address}</h2>

<p>${r.rating}</p>
<p>Open : ${r.open}</p>

<div class="map">
<img src="${r.map}">
</div>

<div class="a">
<a target="_blank" href="${r.link}">
More Information
</a>
</div>
`;