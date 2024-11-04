console.log("script")
//strings
let myName="Kit";//declare and assign value
let lastName="Sitou";
//boolean values
let isTeacher = false;
//numerical values
let mySize=169;
var myAge=99;

//display the values on the console
console.log(myName);
console.log(myAge,mySize,isTeacher,lastName);

//concatenation
console.log("My name is "+ myName);
console.log("My name is "+ myName+", I am "+ myAge +" years old and my size is " + mySize + ".")

//operation
let num1 = 10;
let num2 = 2;
//sub,dev,mult
let addition = num1 + num2;
console.log("addition is: "+ addition);

//sub
let sub = num1 - num2;
console.log("addition is: "+ sub);
//dev
let dev = num1 / num2;
console.log("addition is: "+ dev);
//mult
let mult = num1 * num2;
console.log("addition is: "+ mult);

const pi = 3.1416;
let r = 3;
let area =pi*r**2;//**is square/
console.log("area =" + area)


/*assignment one
1. declare variables*/
let characterA="Tim";
let characterB="new security guard";
let charAaction="sneezed";
let charBaction="shrugged";
let object="How to be scary 101";
let place="abandoned library";
let time="midnight";
let emotion="ghostly embarrassed";

//2.const unchange characteristic
const intend ="tries to be scary";

//3.create the story
console.log("--- Funny Story ---");
console.log("At "+ time + ", in an " + place+ ". ");
console.log(characterA + ", a clumsy ghost, is studying a book call " + object+ ".");
console.log("But this time he saw a " + characterB + ", " + "he "+ intend+".");
console.log(characterA+" yells 'Boo!'" + "," + " But the book dusts got to him.");
console.log("This time " + characterA+ " and " +characterB+" both "+ charAaction + ", " +  characterA+" disappears.");
console.log("The "+ characterB + " "+charBaction+", " + "thought he heard somthing, but guess not.");
console.log("And left "+characterA+" feeling "+emotion+".");

//change values to create a different story
characterA="Angela";
characterB="mom";
charAaction="jumped";
charBaction="catch";
object="flour";
place="kitchen";
time="afternoon";
emotion="laugh out loud";

//3.create new story
console.log("--- Different Version of the Story ---");
console.log("A quiet "+ time+" in the "+place+",");
console.log(characterA + " "+ intend+ ", and decided to grabbing a bag of "+object+", and sprinkled it all ovr herslef.");
console.log("She jumps and yelled 'Boo!' "+ characterB+" looked up and completed unfazed.");
console.log("Until "+characterA+" slipped, and "+ characterB +" tries to "+ charBaction+" "+ characterA+".");
console.log("The white clouds covers both "+characterB+" and "+characterA+",");
console.log("they both look at each other and "+emotion+".");

