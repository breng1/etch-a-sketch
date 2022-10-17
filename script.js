// script.js

const GRID_AREA = 400;

// Creates square grid with 'size' number of rows and columns
function makeGrid (size) {
    let container = document.querySelector(".grid-container");

    // Set rows, columns, and cell size
    let cellArea = GRID_AREA/size;
    container.style.gridTemplateRows = `repeat(${size}, ${cellArea}px)`;
    container.style.gridTemplateColumns = `repeat(${size}, ${cellArea}px)`;
    
    // Generate grid items
    for (let i = 1; i <= size**2; i++) {
        let item = document.createElement('div');
        item.classList.add(`grid-item`);
        //item.textContent = `${i}`;
        container.appendChild(item);
    }
}



makeGrid(16);

// Darkened cells upon hovering
let gridItemArray = document.querySelectorAll(".grid-item");
gridItemArray.forEach(item => {
    item.addEventListener('mouseover', (e) => {
        item.classList.add('darkened');
    })
})



