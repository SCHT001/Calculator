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
}
function equalsCalc()
{
    var display=document.getElementById('display');
    var result=eval(display.value);
    display.value=result;
}
