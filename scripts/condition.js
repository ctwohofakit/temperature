console.log('if-statement');

//---if statement----

//if(condition){}
//code to be executed if condition is true
//}

if(3>=1){
    console.log('I am inside the if statement');
}

let student1 =45;
let student2 =45;
if (student1==student2){
    console.log('Both are the same');
}else{

}

let isTrue = false;

if (isTrue){
    console.log('Yes');
}else{
    console.log('No');
}

let age= 10;
if(age>=21){
    console.log('you are a adult');
}else{
    console.log('you are underage');
}

age= 10;
// //if-else
//     if(age<13){
//         Console.log('child');
//     }else if(age<20){
//         Console.log('child');
//     }else if(age<64){
//         Console.log('adult');
//     }else{
//         Console.log('senior');
//     }

let week=new Date().getDay();
if(week==1){
    console.log('Monday');
}else if(week==2){
    console.log('Tuesday');
}else if(week==3){
    console.log('Wednesday');
}else if(week==4){
    console.log('Thursday');
}else if(week==5){
    console.log('Friday');
}else if(week==6){
    console.log('saturday');
}else if(week==7){
    console.log('sunday');
}else{
    console.log('Invalid');
}


//math()
//Date()


// Challenge: Movie ticket price calculator
let price;

function ticketPrice(){
    let viewAge=prompt("Enter your age:");

    if (viewAge<12){
        price=5;
        document.getElementById("priceResult").innerHTML=("The ticket price is $"+price+".");
    }else if (viewAge<18){
        price=8;
        document.getElementById("priceResult").innerHTML=("The ticket price is $"+price+".");
    }else{
        price=10;
        document.getElementById("priceResult").innerHTML=("The ticket price is $"+price+".");
    }

}


//weather Outfit


function checkWeather(){
    let tempNow=prompt("enter the temperature in C:");
    let outfit;
    if (tempNow<15){
        outfit="Jacket";
        document.getElementById("weather").classList.add("cold");
    }else if (tempNow<25){
        outfit="sweater";
        console.log("it's a bit cold, please wear a sweater");
    }else{
        outfit="t-shirt";
        document.getElementById("weather").classList.add("hot");
        console.log("it's a bit hot, please wear a t-shirt");
    }
    document.getElementById("weather").innerHTML.innerHTML="You should wear:"+outfit;

}
