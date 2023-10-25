
keys = [];

keyboardHeight = window.innerHeight * 0.4;

numkeys = 20;

//initialize slider count
document.getElementById("count").innerHTML = `<h2>${numkeys}</h2>`;

function drawKeys(){

    //remove all previous keys from screen
    keys = [];
    document.getElementById("pianoBox").innerHTML = "";

    //create white keys
    whiteKeyWidth = window.innerWidth/numkeys;
    whiteKeyHeight = keyboardHeight;
    blackKeyWidth = whiteKeyWidth*2/3;
    blackKeyHeight = 0.8*whiteKeyHeight;

    for(var i = 0; i < numkeys; i++){
        var newel = document.createElement("div");
        newel.style.width = `${whiteKeyWidth}px`;
        newel.style.height = `${whiteKeyHeight}px`;
        newel.style.background = "white";
        newel.style.color = "white";
        newel.style.position = "absolute";
        newel.style.border = "2px solid black"
        newel.style.left = `${i*whiteKeyWidth}px`;
        newel.style.bottom = "0px"
        newel.innerHTML = "";
        newel.setAttribute("id", "white");
        document.getElementById("pianoBox").appendChild(newel);
        keys.push(newel);
    }

    //create black keys

    var whitelength = keys.length

    for(var i = 1; i < whitelength; i++){
        //check if they white key is a first, second, third, fifth, or sixth key
        if(i % 7 == 1 || i % 7 == 2 || i % 7 == 3 || i % 7 == 5 || i % 7 == 6){
            //create black key upper right of the corresponding white key
            var newel = document.createElement("div");
            newel.style.width = `${blackKeyWidth}px`;
            newel.style.height = `${blackKeyHeight}px`;
            newel.style.background = "black";
            newel.style.color = "black";
            newel.style.position = "absolute";
            newel.style.border = "2px solid black"
            newel.style.left = `${i*whiteKeyWidth-blackKeyWidth/2}px`;
            newel.style.bottom = `${whiteKeyHeight-blackKeyHeight}px`
            newel.innerHTML = "";
            newel.setAttribute("id", "black");
            document.getElementById("pianoBox").appendChild(newel);
            keys.push(newel);
        }
    }
}

//handle slider
var slider = document.getElementById("myRange");

slider.addEventListener("input", function(){
    numkeys = this.value;
    document.getElementById("count").innerHTML = `<h2>${numkeys}</h2>`;
    drawKeys();
})

console.log(keys);

drawKeys();

function animate(){
}



setInterval(animate, 1000/60);