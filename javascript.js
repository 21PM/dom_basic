var circleId = document.getElementById("cirlce");
var squareId = document.getElementsByClassName("square");
var mainID = document.getElementById("c-container");
var chColor = document.getElementById("chcolor");


var color = ["green" , "yellow" , "pink" , "blue" , "black" , "orange" , "cyan" , "brown" , "maroon"];
index = 0;
var triangle = false;
chColor.addEventListener('click',function(){
    circleId.style.backgroundColor = color[index];
    index ++;
    if(color.length == index){
        index = 0;
    }
})


chshape.addEventListener('click',function(){
    if(!triangle){
            var i = document.getElementsByClassName("square")[0];
            i.className = "bottom-left-triangle";
            triangle=true;
    }
    else{
        var i = document.getElementsByClassName("bottom-left-triangle")[0] ;
        i.className = "square";
        triangle=false;
    }
})





