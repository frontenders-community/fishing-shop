const fishes = [
    {
        name: "clown-loach",
        size: 20,
        priceByKg: 8
    },
    {
        name: "seahorse",
        size: 2,
        priceByKg: 3.5
    },
    {
        name: "puffer-fish",
        size: 8,
        priceByKg: 6
    },
    {
        name: "shrimp",
        size: 6,
        priceByKg: 14
    },
    {
        name: "neon-tetra",
        size: 10,
        priceByKg: 5.5
    },
    {
        name: "rockfish",
        size: 12,
        priceByKg: 10
    },
    {
        name: "shell",
        size: 3,
        priceByKg: 4
    },
    {
        name: "squid",
        size: 5,
        priceByKg: 2.5
    }
];
let earnings = 0;

function renderItems() {
    const itemsContainer = document.querySelector("#items");
    itemsContainer.innerHTML = "";
    for(let i = 0; i < fishes.length; i++) {
        const fish = fishes[i];
        itemsContainer.innerHTML += `
            <div class="item" ondrop="drop(event)" ondragover="allowDrop(event)">
                <img id="item-${i}" data-name="${fish.name}" src="assets/fish/${fish.name}.png" alt="${fish.name}" draggable="true" ondragstart="drag(event)">
            </div>
        `;
    }
}

function renderEarnings() {
    const showEarningElement = document.querySelector("#earning-value");
    showEarningElement.innerText = `+${earnings}`;
}

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    const data = ev.dataTransfer.getData("text");
    const element = document.getElementById(data);
    ev.target.appendChild(element);
    updateEarning(element.dataset.name);
}

function updateEarning(fishName) {
    const findFish = fishes.find(item => item.name === fishName);
    if (findFish) {
        earnings += (findFish.size * findFish.priceByKg);
        renderEarnings();
    }
}

renderItems();
renderEarnings();