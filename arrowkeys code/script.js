var c = document.getElementById("canvas");
var ctx = c.getContext("2d");
ctx.font = "30px Arial";
ctx.fillStyle = "blue";
var width = c.width;
var height =c.height;
var posx = width/2;
var posy = height/3 + 30;
redo();

/*
document.addEventListener("keydown", (event) => {
    posx+=2;
    redo();

},false);
*/
document.onkeydown = function(e) { 
        switch (e.keyCode) { 
            case 37: 
                posy-=10;
                break; 
            case 38: 
                posx-=10;
                break; 
            case 39: 
                posy+=10;
                break; 
            case 40: 
                posx+=10;
                break; 
        } 
        check(posx,posy);
        redo();
    }; 

function redo(){
    ctx.clearRect(0,0,height,width)
    ctx.fillText("Hello World", posy, posx);
}

function check(x,y){
    if(x>=height){
        posx = height;
    }
    if(y>=width-154){
        posy = width-154;
    }
    if(x<=23){
        posx= 23;
    }
    if(y<=0){
        posy =0;
    }
}
