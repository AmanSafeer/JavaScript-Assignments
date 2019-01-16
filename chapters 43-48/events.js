// Question 1
function greet(){
    alert("Hello friend");
}
// Question 2
function thanksAlert(){
    alert("Thanks for purchasing a mobile");
}
var counter= 0;
function counterIncrease(){
    counter+=1;
    document.getElementById("counter").innerHTML = counter;
    
}
function counterDecrease(){
    counter-=1;
    document.getElementById("counter").innerHTML=counter;
}

// Question 3
/*var studentNames = ["Jhone", "Doe", "Mark", "James", "Aman", "Abdullah", "Umar", "Saim", "Daniyal", "Asad","Azhar"];
var studentClasses = [1,2,3,4,5,6,7,8,9,10,11];
studentClasses = studentClasses.reverse();

function table(){
   document.body.innerHTML="";
    document.write("<table><tr><th>Index</th><th>Name</th><th>Class</th><th></th></tr>")
    for(var i=0; i<studentNames.length; i++){
        document.write("<tr><td>"+(i+1)+"</td><td>"+studentNames[i]+"</td><td>"+studentClasses[i]+"</td><td><button type='button' onClick='deleteItem("+i+")'>Delete</button></td></tr>");
    }
    document.write("</table>")
}
table();
    function deleteItem(i){
        studentNames.splice(i,1);
        studentClasses.splice(i,1);
        table();
    }*/
// Question 4