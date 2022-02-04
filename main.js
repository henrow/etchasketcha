'use strict'

const button = document.querySelector('button');
const container = document.querySelector('.container');
const sideInput = document.querySelector('#side-number');
let currentSides = document.querySelector("#side-number").value;


populateGrid(currentSides);
button.addEventListener('click', clear);
sideInput.addEventListener('click', function() {
    currentSides = sideInput.value;
});

let mousedown = false;
document.body.onmousedown = () => mousedown = true;
document.body.onmouseup = () => mousedown = false;

function populateGrid(sides) {
    let square = (100 / sides);
    for (let i = 0; i < (sides * sides); i++) {
        const gridElement = document.createElement('div');
        gridElement.classList.add('grid');
        gridElement.style.width = `${square}%`;
        gridElement.style.height = `${square}%`;
        container.appendChild(gridElement);
        gridElement.addEventListener('mousedown', function(event) {
            this.classList.add('filled');
        });
        gridElement.addEventListener('mouseover', function(event) {
            if (mousedown) { this.classList.add('filled'); }
        });
    }
}

function clear() {
    const grids = document.querySelectorAll('.grid');
    grids.forEach(grid => {
        container.removeChild(grid);
    });
    populateGrid(currentSides);
    button.textContent = "RESET";
};
