piece = document.getElementById("1");

function moveAt(posY, posX) {
    piece.style.left = posX - piece.offsetWidth / 2 + 'px';
    piece.style.top = posY - piece.offsetHeight / 2 + 'px';
}

function movePiece(e){
    console.log("hola");

    moveAt(e.pageY, e.pageX);
    
    function onMouseMove(e) {
        moveAt(e.pageY, e.pageX);
    }
    
    document.addEventListener('mousemove', onMouseMove);
    
    function onMouseUp() {
        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', onMouseUp);
    }

    document.addEventListener('mouseup', onMouseUp);

    e.preventDefault();
}

piece.onmousedown = movePiece;