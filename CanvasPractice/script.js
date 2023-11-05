var c = document.getElementById("canvas");
var ctx = c.getContext("2d");
var Width = canvas.width;
var Height = canvas.height;

posx = 0;
posy = 0;
velx = 2;
vely = 2;

function move(){

    ctx.beginPath();
    ctx.fillStyle = "rgba(0, 0, 0, 255)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);    
    ctx.stroke();
    var grd = ctx.createRadialGradient(75,50,5,90,60,100);
    grd.addColorStop(0,"red");
    grd.addColorStop(1,"white");

    rectwidth = 150
    rectheight =100
    ctx.rect(posx, posy, rectwidth, rectheight);
    ctx.fillStyle = grd;
    ctx.fill();

    if(posx + rectwidth > Width || posx < 0){
        velx *= -1;
    }

    if(posy + rectheight > Height || posy < 0){
        vely *= -1;
    }

    posx += velx;
    posy += vely;

}

setInterval(move,1000/60);