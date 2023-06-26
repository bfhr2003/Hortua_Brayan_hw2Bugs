const theButtons = document.querySelectorAll("#buttonHolder img"),
    puzzleBoard = document.querySelector(".puzzle-board"),
    puzzlePieces = document.querySelectorAll(".puzzle-pieces img"),
    dropZones = document.querySelectorAll(".drop-zone"),
    dragZone = document.querySelector(".puzzle-pieces");

let draggedPiece;

function changeBGImage() {
    puzzleBoard.style.backgroundImage = `url(images/backGround${this.id}.jpg)`;
    resetPuzzle();
}

function handleStartDrag(e) {
    draggedPiece = this;
}

function handleDragOver(e) {
    e.preventDefault();
    console.log("dragged over me");
}

function handleDrop(e) {
    e.preventDefault();
    if (this.children.length >= 1) {
        return;
    }
    this.appendChild(draggedPiece);
    console.log("dropped something on me");
}



//event Listeners
theButtons.forEach(button => button.addEventListener("click", changeBGImage)); 

puzzlePieces.forEach(piece => piece.addEventListener("dragstart", handleStartDrag));

dropZones.forEach(zone => zone.addEventListener("dragover", handleDragOver));

dropZones.forEach(zone => zone.addEventListener("drop", handleDrop));
