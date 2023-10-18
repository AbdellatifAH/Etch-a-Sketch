const container = document.getElementById("container");

let size = 16

for(let i = 0;i< size*size;i++){
    const cell= document.createElement("div")
    cell.style.boxSizing="border-box"
    cell.style.border="1px solid"
    cell.style.width = 400 / size + "px";
    cell.style.height = 400 / size + "px";
    container.append(cell)
}