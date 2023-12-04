function pintar(color){
    if (color != 'green'){
        ele.style.backgroundColor = color;
    }else{
        ele.style.backgroundColor = color;
    }
}
    
const ele = document.getElementById("ele1")
ele.addEventListener("click", function(){
    pintar('yellow');
});