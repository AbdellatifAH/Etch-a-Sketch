const container = document.getElementById("container");

let size = 4

for(let i = 0;i< size*size;i++){
    const cell= document.createElement("div")
    cell.style.boxSizing="border-box"
    cell.style.border="1px solid"
    cell.style.width = 400 / size + "px";
    cell.style.height = 400 / size + "px";
    container.append(cell)
    cell.addEventListener('mouseenter',changeCellColor);
}

function changeCellColor(){
    let r=Math.floor(Math.random() * 256);
    let g=Math.floor(Math.random() * 256);
    let b=Math.floor(Math.random() * 256);
    this.style.backgroundColor=`rgb(${r},${g},${b})`;
    this.removeEventListener('mouseenter',changeCellColor);
}