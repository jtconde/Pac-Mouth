var score = 0;
var gscore =0;

var player = {
    x:50,
    y:100,
    pacmouth: 320,
    pacdir: 0
    
}


var canvas = document.createElement("canvas");
var context = canvas.getContext("2d");
document.body.appendChild(canvas);
canvas.height = 400;
canvas.width = 600; 

mainImage = new Image();
mainImage.ready = false;
mainImage.onload = checkReady;
mainImage.src = "pac.png";

var keyclick = {};
document.addEventListener("keydown", function (event){
    keyclick[event.keyCode] = true;
    move(keyclick);
    console.log(keyclick);
}, false);
document.addEventListener("keyup", function (event){
    delete keyclick[event.keyCode];
    console.log(keyclick);
}, false);

function move(keyclick) {
    player.x++;
    render();
}
function checkReady(){
    this.ready = true;
        playgame();
}
function playgame() {
    render();
}

function render() {
    context.fillStyle = "black";
    context.fillRect(0,0,canvas.width,canvas.height);
    context.drawImage(mainImage,player.pacmouth,player.pacdir,32,32,player.x,player.y,32,32);
    context.font = "20px Verdana";
    context.fillStyle = "white";
    context.fillText("Pacman: "+score+" vs Ghost:"+gscore,2,18);
}



