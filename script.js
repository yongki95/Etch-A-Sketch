const tempName = prompt("Set the size of Square grid");

const container = document.querySelector(".container");

let grid_container = document.createElement("div");
grid_container.className = "grid_container";
grid_container.style.display = "grid";
grid_container.style.height= "500px";
grid_container.style.width = "500px";
grid_container.style.border = "1px solid black";


/*
function that create cell with the user given number
*/
function setGrid(number) {
    for (let i = 0; i< number; i++) {
        for(let j = 0; j< number; j++){
            let cell = document.createElement("div");
            cell.className = "cell";
            grid_container.appendChild(cell);
        }
    }
    
    container.appendChild(grid_container);
    
    const heightPercent = 100 / number;

    grid_container.style.gridTemplateColumns = `repeat(${number},${heightPercent}%)`;
}



setGrid(tempName);

let cells = Array.from(document.getElementsByClassName("cell"));
cells.forEach(cell => cell.addEventListener("mouseover",function() {
    cell.style.background = "black";
}))



