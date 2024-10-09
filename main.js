// document.addEventListener('mousedown', function(e) {
//     const target = e.target;
//     if(target.id == "piece"){
//         movePiece(e, target);
//     }
// });

// function movePiece(e, target) {
//     console.log("Moving:", target);

//     moveAt(e.pageY, e.pageX);

//     function moveAt(posY, posX) {
//         target.style.left = posX - target.offsetWidth / 2 + 'px';
//         target.style.top = posY - target.offsetHeight / 2 + 'px';
//     }
    
//     function onMouseMove(e) {
//         moveAt(e.pageY, e.pageX);
//     }
    
//     document.addEventListener('mousemove', onMouseMove);
    
//     function onMouseUp() {
//         document.removeEventListener('mousemove', onMouseMove);
//         document.removeEventListener('mouseup', onMouseUp);
//     }

//     document.addEventListener('mouseup', onMouseUp);

//     e.preventDefault();
// }

let board = document.getElementById("board");
let switchColor = false;
let row = 7;

function buildBoard(){
    for(let i = 0; i < 64; i++){
        let square = document.createElement('div');
        if(i > row){
            switchColor = !switchColor;
            row = row+8;
        }
        if(i % 2 == 0 && !switchColor){
            square.classList.add("blackspace");
            square.id = i;
        }
        else if(i % 2 == 1 && !switchColor){
            square.classList.add("whitespace");
            square.id = i;
        }
        else if(i % 2 == 0 && switchColor){
            square.classList.add("whitespace");
            square.id = i;
        }
        else{
            square.classList.add("blackspace");
            square.id = i;
        }
        board.append(square);
    }
}

function placePieces(){
    for(let i = 8; i < 16; i++){
        square = document.getElementById(i);
        pawn = document.createElement("p");
        pawn.textContent = "♟️";
        pawn.classList.add("whitepiece");
        if(square.id == i){
            square.append(pawn);
        }
    }
    for(let i = 48; i < 56; i++){
        square = document.getElementById(i);
        pawn = document.createElement("p");
        pawn.textContent = "♟️";
        pawn.classList.add("blackpiece");
        if(square.id == i){
            square.append(pawn);
        }
    }
}

buildBoard();
placePieces();