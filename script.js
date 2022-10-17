// script.js

const GRID_AREA = 400;

// Creates square grid with 'size' number of rows and columns
function makeGrid (size) {
    let container = document.querySelector(".grid-container");

    // Clear existing grid items
    container.textContent = '';

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

// Set grid size based on slider input
let slider = document.getElementById("gridRange");
let sizeText = document.getElementById("gridSize");
makeGrid(slider.value);

// Indicate initial and current slider value
sizeText.textContent = slider.value;
slider.addEventListener('input', (e) => {
    sizeText.textContent = slider.value;
    makeGrid(slider.value);
    let gridItemArray = document.querySelectorAll(".grid-item");
    darken(gridItemArray);
    erase(gridItemArray);
})


// Darken cells upon hovering
let gridItemArray = document.querySelectorAll(".grid-item");

function darken(gridItemArray){
    gridItemArray.forEach(item => {
        item.addEventListener('mouseover', (e) => {
            item.style.backgroundColor = "black";
        })
    })
}

darken(gridItemArray)

// Erase grid
let eraser = document.querySelector("#erase");

function erase (gridItemArray) {
    eraser.addEventListener('click', (e) => {
        gridItemArray.forEach(item => {
            item.style.backgroundColor = "rgb(204, 202, 202)";
        })
    })
}

erase(gridItemArray);