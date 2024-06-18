// Variables
const chessCells = Array.from(document.getElementsByClassName("chess-cell"));
const chessImgs = Array.from(document.getElementsByClassName("piece-img"));

let draggedElement;

// EventListeners
chessImgs.forEach((piece) => {
    piece.addEventListener("dragstart", dragStart);
    piece.addEventListener("dragend", dragEnd);
});

chessCells.forEach((cell) => {
    cell.addEventListener("dragover", dragOver);
    cell.addEventListener("drop", dragDrop);
});

// Drag Functions
function dragStart(e) {
    e.dataTransfer.setData('text/plain', '');
    draggedElement = e.target;
    e.target.style.cursor = "grabbing";
    e.target.style.opacity = "0";
}

function dragEnd(e) {
    e.target.style.cursor = "grab";
    e.target.style.opacity = "1";
}

function dragOver(e) {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'grabbing'; // Это позволяет изменить курсор на допустимый
}

function dragDrop(e) {
    e.preventDefault();
    if (e.target.classList.contains('chess-cell')) {
        e.target.appendChild(draggedElement);
    }
}


function reset() {}