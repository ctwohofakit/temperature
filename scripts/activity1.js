//calculation
function multiTable(){
    const num = 5;
    let result = 0;

    for(let i=0; i<11; i++){
        result =num*i;
        document.write(`<p>${num} x ${i} = ${result}</p>`)
    }
}

/*multiTable();*/

/*for(let i=0; i<4;i++){
    document.write("My for is working?")
}*/

/*for(let i=2; i<=21; i+=2){
    document.write(`<p>${i}</p>`)
}*/

let students=["Jose","Michael","Samson","kit","angel","Jonathan","Andrew"];
let ages=[22,35,20,43,37,33,27];


for(let i=0; i<students.length; i++){
    document.getElementById("studentList").innerHTML+=`
    <tr>
        <td>${i+1}</td>
        <td>${students[i]}</td>
        <td>${ages[i]}</td>
    </tr>`;

}
