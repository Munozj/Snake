var snake; 

var context;
var screenWidth;
var screenHeight;

gameDraw();

function gameInitialized() {
    var canvas = document.getElementById("game-screen");  
    context = canvas.getContext("2d");
    
    screenWidth = window.innerWidth;
    screenHeight = window.innerHeight;
    
    canvas.width = screenWidth;
    canvas.height = screenHeight;
}

function gameLoop() {
    
}



function gameDraw() {
    context.fillstyle = "rgb(51,173,189)";
    context.fillRect(0, 0, screenWidth, screenHeight);
}