/*
//var

//var name= "Swarna Barua",
//    roll=367874 ;
//    name="tuhin";

//let

//let name="swarna";
//     name= "Tuhin";
//let roll=588791;
//    roll= 45666;  

//const

const name="swarna barua";
//       name="barna";
const roll= 374547;
//      roll=4955;       
console.log(name , roll)    
*/
//operator

/*
let number1=20;
let number2=20;
console.log(number1+number2)  
console.log(number1-number2)   
console.log(number1*number2) 
console.log(number1/number2) 
console.log(number1%number2) 

let firstName="Swarna";
let lastName="Barua";
document.write(firstName +" "+lastName)

document.write("Name:Swarna Barua<br>");
document.write("Roll:588791<br>");
document.write("Department:Computer<br>");
document.write("Group:B1<br>");

*/

document.getElementById("small_scren").innerHTML = "shunu";

//object
/*
const personDetails={
       students1 : {
       Name:"Swarna Barua",
       Roll:588791,
       Department:"Computer"
       },
       students2 : {
              Name:{
                   firstName:"Swarna",
                   lastName:"Barua",  
              },
              Roll:588791,
              Department:"Computer"
              }
}
let studentFullName=personDetails.students2.Name.firstName;
let studentFullName2=personDetails.students2.Name.lastName;
console.log(studentFullName +" "+ studentFullName2)
//console.log(personDetails.students2.lastName)

//console.warn(personDetails)
*/

//prompt---

//let userName= prompt("Enter your name:"," ")
//console.log(userName)

//let userName= prompt("Enter your name:","Swarna Barua")
//console.log(userName)

//Confirm---

//let confirmValue=confirm("Do you stay here?");
//console.log(confirmValue)

//Arithmetics---

//let sumNum=10;
//console.log(sumNum++)

//let decNum=10;
//console.log(++decNum)

//let subNum=10;
//console.log(subNum--)

//let subsNum=10;
//console.log(--subsNum)

//Assignment operator---

//let x = 10;
//let y = 30;
//console.log(x===y)
//console.log(x===x+y)
//console.log(x===x-y)
//console.log(x===x*y)
//console.log(x===x%y)
//console.log(x===x/y)

//if else if/else

//let numOne = 30;
//let numTwo = 20;
//let operator=prompt("enter your operator"," ");

//if(numOne<numTwo){
//     console.log("true")

//}else{
//     console.log("false")
//}

/*
if(operator==="+"){
     let sum=numOne+numTwo;
     console.log(sum)
}else if(operator==="-"){
     let sub= numTwo-numOne;
     console.log(sub)
}else if(operator==="*"){
     let multi= numOne*numTwo;
     console.log(multi)
}else if (operator==="/") {
     let div=numTwo/numOne;
     console.log(div)
}else{
     console.log("error")
}
*/

/*
if(operator!="+"){
     let sum=numOne-numTwo;
     console.log(sum)
}
//else if(operator==="-"){
 //    let sub= numTwo-numOne;
 //    console.log(sub)
//}
else if(operator==="*"){
     let multi= numOne*numTwo;
     console.log(multi)
}else if (operator==="/") {
     let div=numTwo/numOne;
     console.log(div)
}else{
     console.log("error")
}
*/

/*
if(operator==="+"){
     
     let numOneCheck = numOne>0 ? numOne:"false";
     let numTwoCheck = numTwo>0 ? numTwo:"false";

     if(numOneCheck==="false"){
          console.log("error")


     }
     else if(numTwoCheck==="false"){
          console.log("error")
     }
     else{
          let sum =numOne+numTwo;
          console.log(sum)
     }
}
*/


//else if(operator==="-"){
 //    let sub= numTwo-numOne;
 //    console.log(sub)
//}
/*
else if(operator==="*"){
     let multi= numOne*numTwo;
     console.log(multi)
}else if (operator==="/") {
     let div=numTwo/numOne;
     console.log(div)}
*/
//else{
 //    console.log("error")
//}

//---Method----

//---scope--
/*
{
     var name ="Swarna Barua";
         name ="Moni";
     //console.log(name)
}
     //console.log(name)
     


     let name ="swarna barua"
{
     let name ="swarna"
     //    name = "tuhin"
     console.log(name)    
}     
     //console.log(name)
*/

/*
function myCal(){
      let myName ="Swarna"
      console.log(myName)
}
myCal()
*/

/*
let myName="swarna";
function myCal(){
     myName ="tuhin";
     console.log(myName)
}
myCal()
*/

/*

function myCal(p1,p2){
     let numOne = p1;
     let numTwo=p2;
     let result=numOne+numTwo;
     console.log(result)
}
myCal(20,20)
*/

function myCal(p1,p2,cal){
     let numOne = p1;
     let numTwo=p2;
     let =prompt("enter your operator"," ");
     if (cal=="+"){
          let result=numOne+numTwo;
          console.log(result)
     }else if (cal=="-"){
          let result=numOne-numTwo;
          console.log(result)
     }else if(cal=="*"){
          let result=numOne*numTwo;
          console.log(result)
     }else if(cal=="/"){
          let result=numOne/numTwo;
          console.log(result)
     }else{
          console.log("error")
     }
}
myCal(20,20,"+")
myCal(20,20,"-")
myCal(20,20,"*")
myCal(20,20,"/")
