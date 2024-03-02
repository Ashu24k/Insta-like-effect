var box = document.querySelector("#box");
var heart =  document.querySelector(".i1");
var heart2 =  document.querySelector(".i2");

box.addEventListener("dblclick",function(){
    heart.style.transform = "translate(-50%,-50%) scale(1)";
    heart.style.opacity = "0.8";
    heart2.style.color = "red";

    setTimeout(function(){
        heart.style.transform = "translate(-50%,-50%) scale(0)";
    heart.style.opacity = "0";
    },1000)
})

var flag = 0;

heart2.addEventListener("click",function(){
    if(flag == 0){
    heart2.style.color = "red"
    heart.style.transform = "translate(-50%,-50%) scale(1)";
    heart.style.opacity = "0.8";
    flag = 1;

    setTimeout(function(){
        heart.style.transform = "translate(-50%,-50%) scale(0)";
    heart.style.opacity = "0";
    },1000)
    }else{
        heart2.style.color = "white";
        flag = 0;
    }

    
})