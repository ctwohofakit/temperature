
let startRnage,endRnage,scale=0;


function convertTemperatureRange(){
    document.getElementById("result").innerHTML = ""//clear previous result
        //declear input prompt and variable
    startValue =parseFloat(prompt("Enter temperature start range:"));
    endValue =parseFloat(prompt("Enter temperature end range:"));
    scale =prompt("Enter scale: Celsius in 'C', or Fahrenheit in 'F'. ***Upper Case***");
    let convertedTemp=0;
    
    for(let i=startValue; i<=endValue; i++){ 
                        //check condition
        if (scale=="C"){
                document.getElementById("result").innerHTML=`
                    <tr>
                        <th>Celsius </th> 
                        <th>to Fahrenheit</th>
                    </tr>`;//Celsius to Fahrenheit
            convertedTemp = (i* 9/5) + 32;
            document.getElementById("result").innerHTML+=`
                    <tr>
                        <td>${i} °C </td>
                        <td>is Fahrenheit ${convertedTemp.toFixed(2)} °F.</td>
                    </tr>`;
        }
        else if(scale=="F"){
            document.getElementById("result").innerHTML=`
                    <tr>
                        <th>Fahrenheit </th> 
                        <th>to Celsius</th>
                    </tr>`;
            convertedTemp = (i- 32) * 5/9;
            document.getElementById("result").innerHTML+=`
                    <tr>
                        <td>${i} °F </td>
                        <td>is Celsius ${convertedTemp.toFixed(2)} °C.</td>
                    </tr>`;
        }
        else{//check when scale input inavalid
            document.getElementById("result").innerHTML=`
            <tr>
                <td>C or F </td>
                <td>The temperature/scale input is invalid</td>
            </tr>`;
        }
    }
}