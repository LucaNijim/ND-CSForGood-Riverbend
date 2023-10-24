
keys = [];
keyboardheight = 100;

function createKeys(){

    //create white keys

    numkeys = 10
    keyWidth = window.innerWidth/numkeys;
    keyHeight = 350;

    for(var i = 0; i < numkeys; i++){
        var newel = document.createElement("div");
        newel.style.width = `${keyWidth}px`;
        newel.style.height = `${keyHeight}px`;
        newel.style.background = "white";
        newel.style.color = "white";
        newel.style.position = "absolute";
        newel.style.border = "2px solid black"
        newel.style.left = `${i*keyWidth}px`;
        newel.style.bottom = "0px"
        newel.innerHTML = "";
        newel.setAttribute("id", "white");
        document.getElementById("wrapper").appendChild(newel);
        keys.push(newel);
    }

    //create black keys
}

console.log(keys);

createKeys();

function animate(){
}



setInterval(animate, 1000/60);