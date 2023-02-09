
/*const hour = new Date().getHours(); 
let greeting;
if (A<B) {
  greeting1 = "Less than";
} else
if(A>B) {
  greeting2 = "Greater than";
}
else
if(A=B) {
  greeting3 = "Equal to";
}
function myFunction() {
    alert()
      var greeting = document.getElementById("fname").value;
document.getElementById("demo").innerHTML = greeting;
 var greater=
}*/
function myFunction(){
    A=document.getElementById("txtNum1").value;
    B=document.getElementById("txtNum2").value;

if (A<B) {
  greeting = "A is Less than B";
    document.getElementById("demo1").innerHTML = greeting;
}
else
if(A>B) {
   greeting = "A is Greater than B";
  document.getElementById("demo1").innerHTML = greeting;
}
else
if(A=B) {
  greeting = "A is Equal to B";
  document.getElementById("demo1").innerHTML = greeting;
}
}