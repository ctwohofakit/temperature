let fahrenheit=0;
function convertTemp(){
    let celsius =prompt("Enter temperature in Celsius:");
    fahrenheit = (celsius * 9/5) + 32;
    console.log(fahrenheit);
    document.getElementById("tempResult").innerHTML=("The temperature in Fahrenheit is "+fahrenheit+"°F.");
    return fahrenheit;
}

