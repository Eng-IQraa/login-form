const countries = [
    { name: "Somalia", code: "so" },
    { name: "United States", code: "us" },
    { name: "United Kingdom", code: "gb" },
    { name: "Canada", code: "ca" },
    { name: "Germany", code: "de" },
    { name: "France", code: "fr" },
    { name: "China", code: "cn" },
    { name: "Japan", code: "jp" },
    { name: "Brazil", code: "br" },
    { name: "India", code: "in" }
];

const container = document.getElementById("flagsContainer");

countries.forEach(country => {
    const card = document.createElement("div");
    card.className = "card";

    const img = document.createElement("img");
    img.src = `https://flagcdn.com/w320/${country.code}.png`;
    img.alt = country.name;

    const name = document.createElement("p");
    name.textContent = country.name;

    card.appendChild(img);
    card.appendChild(name);
    container.appendChild(card);
});
