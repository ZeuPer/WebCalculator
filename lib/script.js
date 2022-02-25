var pantalla = document.getElementById("pantalla");
var characters = 0;
var noNumber = false

function add(a){
    if(characters < 23){
        console.log(characters)
        if (pantalla.innerText === "0" || noNumber){
            pantalla.innerHTML = a;
            noNumber = false;
        }
        else{
            pantalla.innerHTML += a;
        }
        characters++;
    }
    else {
        alert("Max characters");
    }
}

function clean(){
    pantalla.innerHTML = "0";
    characters = 0;
}

function equal(){
    try{
        var result = eval(pantalla.innerHTML);
        pantalla.innerHTML = result;
        characters = pantalla.innerHTML.length;
    }
    catch(e){
        pantalla.innerHTML = "Error";
        characters = 0;
        noNumber = true;
    }
}