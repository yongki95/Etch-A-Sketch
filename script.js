const container = document.querySelector(".container");

let grid_container = document.createElement("div");
grid_container.className = "grid_container";
for (let i = 0; i< 16; i++) {
    for(let j = 0; j<16; j++){
        let cell = document.createElement("div");
        cell.className = "cell";
        grid_container.appendChild(cell);
    }
}

container.appendChild(grid_container);



//setting grid

grid_container.style.display = "grid";
grid_container.style.height= "500px";
grid_container.style.width = "500px";
grid_container.style.border = "1px solid black";
grid_container.style.gridTemplateColumns = "repeat(16,6.25%)";


