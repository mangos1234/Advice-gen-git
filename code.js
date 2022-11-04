var id = document.getElementById("adviceID");
var advice = document.getElementById("advice");
var random = document.querySelector(".diceHolder");
var div = document.getElementById("div");

gen();

function gen(){
    fetch('https://api.adviceslip.com/advice')
    .then(response => response.json())
    .then(data => {
        console.log(data.slip.id);
        console.log(data.slip.advice);
        id.innerHTML = data.slip.id
        advice.innerHTML = `"${data.slip.advice}"` 
    });
}

random.addEventListener("click", function(){
    gen();
})

window.addEventListener("resize", function(){
    console.log("resize");
    console.log(window.outerWidth);
    if (window.outerWidth > 700){
        div.src = "./images/pattern-divider-desktop.svg"
    }
})