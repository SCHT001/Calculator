var equals=document.getElementById('equals');
equals.addEventListener('click',equalsCalc);
var onBtn=document.querySelector('.onBtn'); 
var running=false;

onBtn.addEventListener('click',()=>{
    running=!running;
    if (running){
        onBtn.style.backgroundColor="Orange";
        onBtn.innerHTML="OFF"
    }
    else{
        onBtn.style.backgroundColor="green";
        onBtn.innerHTML="ON";
    }
})


function displayAdder(a){
    var display=document.getElementById('display');
    display.value+=a;
}
function equalsCalc()
{
    var display=document.getElementById('display');
    try{display.value=eval(display.value)}
    catch(e){
    display.value="Syntax Error";
}
  
}


var deBtn=document.querySelector('.deBtn');
deBtn.addEventListener('click',()=>{
    display.value.toString().slice(0,-1);
})

    
var acBtn=document.querySelector(".acBtn");
acBtn.addEventListener('click',()=>{
    display.value="";
})
