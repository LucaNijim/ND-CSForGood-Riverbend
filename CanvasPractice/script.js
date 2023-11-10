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
    ctx.stroke();
    rectwidth = 150
    rectheight =100
    var grd = ctx.createRadialGradient(75+Math.abs(posx),50+Math.abs(posy),5,90+Math.abs(posx),60+Math.abs(posy),100);
    grd.addColorStop(0,"red");
    grd.addColorStop(1,"white");

    ctx.fillRect(0, 0, canvas.width, canvas.height);    

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