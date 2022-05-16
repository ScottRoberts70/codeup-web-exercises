document.querySelector("#form").addEventListener
("submit", function (event){
    event.preventDefault();                                             // is the value of color input
    let color = document.getElementById("text-color").value; //.value comes from the value asset after text-color i.e. red,blue, any color or css color:red
    document.getElementById("main-content").style.color = color;
})



//TODO Change Event//

document.querySelector("#travel-items").addEventListener("change",
    function (){
    //event.target.value=value of option selected in drop-down "travel-items"
    document.querySelector(".result").innerHTML = 'I think ' + event.target.value + ' is important too!';
    })

//TODO MOUSE EVENT//
// mouseenter means when your mouse hovers or eneters the area of the element it will change
let gokuEvent = function (){
    document.querySelector("#goku").src = "img/goku-mad.png";
}

document.querySelector("#goku").addEventListener("mouseenter", gokuEvent)


document.querySelector("#goku").addEventListener("mouseout",
    function (){
        document.querySelector("#goku").src = "img/goku-normal.png";
    })


//TODO Remove Event//

document.querySelector(".goku-chill").addEventListener("click",
function (){
    document.getElementById("goku").removeEventListener("mouseenter", gokuEvent)
})


//TODO KEYBOARD EVENT//

document.addEventListener("keyup", function (event){
    console.log(event);
    if(event.key===  " "){
        document.querySelector(".space-bar").style.display = "block";
    }
});




