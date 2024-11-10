function convertTemperature(){
    //declare input
    let temperature =parseFloat(document.getElementById("input-temp").value);
   //Getting scale value
    let scale =document.getElementById("scale").value;
    let convertedTemp;

    document.querySelector(".cold-result").style.display = "none";
    document.querySelector(".warm-result").style.display = "none";
    document.querySelector(".hot-result").style.display = "none";

    //check which scsle is selected
    if (scale=="C"){
        //Celsius to Fahrenheit
        convertedTemp = (temperature  * 9/5) + 32;
        console.log(convertedTemp);
        document.getElementById("result").innerHTML=`The temperature ${temperature} °C is ${convertedTemp.toFixed(2)} °F.`;
            if (convertedTemp < 50) {
                document.querySelector(".cold-result").style.display = "block";  // Show cold (blue)
                document.getElementById("glass-result").innerHTML="It's chilly outside.";
            } else if (convertedTemp < 80) {
                document.querySelector(".warm-result").style.display = "block";  // Show warm (orange)
                document.getElementById("glass-result").innerHTML="It's a warm day.";
            } else {
                document.querySelector(".hot-result").style.display = "block";   // Show hot (red)
                document.getElementById("glass-result").innerHTML="It's hot, don't forget to drink water";
            }
    }else if(scale=="F"){
        //Fahrenheit to Celsius
        convertedTemp = (temperature - 32) * 5/9
        console.log(convertedTemp);
        document.getElementById("result").innerHTML=`The temperature ${temperature} °F is ${convertedTemp.toFixed(2)} °C.`;
            if (convertedTemp < 15) {
                document.querySelector(".cold-result").style.display = "block";  // Show cold (blue)
                document.getElementById("glass-result").innerHTML="It's chilly outside.";
            } else if (convertedTemp < 25) {
                document.querySelector(".warm-result").style.display = "block";  // Show warm (orange)
                document.getElementById("glass-result").innerHTML="It's a warm day.";
            } else {
                document.querySelector(".hot-result").style.display = "block";   // Show hot (red)
                document.getElementById("glass-result").innerHTML="It's hot, don't forget to drink water";

            }
    }else{
        document.getElementById("result").innerHTML=("The temperature input is invalid");
    }
}

