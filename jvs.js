const container = document.getElementById("container");

function createGrid(size=16){

    while (container.firstChild) {
        container.removeChild(container.firstChild);
        }

    for(let i = 0;i< size*size;i++){
        const cell= document.createElement("div")
        cell.style.boxSizing="border-box"
        cell.style.border="1px solid"
        cell.style.width = 500 / size + "px";
        cell.style.height = 500 / size + "px";
        container.append(cell)
        cell.addEventListener('mouseenter',changeCellColor);
    }

}

function changeCellColor(){
    let r=Math.floor(Math.random() * 256);
    let g=Math.floor(Math.random() * 256);
    let b=Math.floor(Math.random() * 256);
    this.style.backgroundColor=`rgb(${r},${g},${b})`;
    this.removeEventListener('mouseenter',changeCellColor);
}

createGrid()

function getUserInput(){
    let d
    do{
    d= prompt("Enter Desired Grid Size (less than 100)");
    }while(d>100);
    createGrid(d);
}

const btn = document.querySelector("#btn")
btn.addEventListener('click', getUserInput );


