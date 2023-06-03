var equals=document.getElementById('equals');
equals.addEventListener('click',equalsCalc);

function equalsCalc()
{
    var display=document.getElementById('display');
    var result=eval(display.value);
    display.value=result;
}