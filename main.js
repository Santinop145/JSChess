document.addEventListener('mousedown', function(e) {
    const target = e.target;
        movePiece(e, target);
});

function movePiece(e, target) {
    console.log("Moving:", target);

    moveAt(e.pageY, e.pageX);

    function moveAt(posY, posX) {
        target.style.left = posX - target.offsetWidth / 2 + 'px';
        target.style.top = posY - target.offsetHeight / 2 + 'px';
    }
    
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
