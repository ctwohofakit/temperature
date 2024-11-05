console.log("funciton.js")

function multiplyThree(num){
    return num *3;
}

console.log(multiplyThree(4));
console.log(multiplyThree(2));
console.log(multiplyThree(12));

function sum(num1,num2){
    return num1+num2;
}
let result=sum(8,4);
console.log(result);



let sum2 =function(){
    console.log(3+3);
}
sum2();

let total=0;
let productName=prompt("Enter the product name:");
let productPrice=prompt("Enter the product price:");

function addCart(price){
    total=total+=price;
    return total;
}

total = addCart(productPrice);



/*
console.log(total);e
total =addCart(400);
console.log(total);
total =addCart(600);
console.log(total);*/

function calculateTaxes(total){
    return 1.11*total;
}

/*write the answer out in html */
document.write("<p>"+productName+" "+ calculateTaxes(total).toFixed(2));

/*
console.log(calculateTaxes(total))*/


/*challege3*/
function doubleNumber(number){
    console.log(number*2);
    return number*2;
}
console.log(doubleNumber(4));
console.log(doubleNumber(10));




/*challege4*/
function combineNames (firstName="Unknown", lastName="Unknown"){
    return firstName+" "+lastName;
}
console.log(combineNames("Alice","Johnson"));
console.log(combineNames("Alice"));
console.log(combineNames());
console.log(combineNames("Johnson"));

/*challege3*/
function convertToSeconds(min){
    return second=min*60;
}
console.log(convertToSeconds(5));
console.log(convertToSeconds(10));


function addProduct(){
    let prodName=prompt("enter the product name:");
    document.getElementById("list").innerHTML+=`<p> ${prodName}</p>`;
}


