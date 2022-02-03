'use strict'
const button = document.querySelector('button');
const container = document.querySelector('.container');
function populateGrid(sides) {
    for (let i = 0; i < (sides * sides); i++) {
        const newDiv = document.createElement('div');
        newDiv.classList.add('grid');
        let square = (100 / sides);
        newDiv.style.width = `${square}%`;
        newDiv.style.height = `${square}%`;
        container.appendChild(newDiv);
    }

    const grids = document.querySelectorAll('.grid');
    grids.forEach(grid => {
        grid.addEventListener('click', function(event) {
            this.classList.add('filled');
        });
        grid.addEventListener('mouseover', function(event) {
            console.log(event);
            if (event.buttons == 1 || event.buttons == 2 || event.buttons ==3) { this.classList.add('filled'); }
        });
    });
}
button.addEventListener('click', reset);

function reset() {
    const grids = document.querySelectorAll('.grid');
    grids.forEach(grid => {
        container.removeChild(grid);
    });
    const perSide = prompt("Per side: ");
    populateGrid(perSide);
    button.textContent = "RESET";
};
