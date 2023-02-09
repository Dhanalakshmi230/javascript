/*function myFunction(){
const d = new Date("2021-03-25")
document.getElementById("demo").innerHTML = d.getFullYear();
document.getElementById("demo1").innerHTML = d.getFullMonth();
document.getElementById("demo2").innerHTML = d.getFullDate();
}*/
/*function reset(){
    document.getElementById("txtNum1").value;
    document.getElementById("txtNum2").value;

}
function myFunction(){
   var num1 = Number( document.getElementById("txtNum1").value);
   var num2 = Number( document.getElementById("txtNum2").value);
   var add = num1 + num2;

   document.getElementById("demo").innerHTML = add;
   */
  function date(){
    var d = new Date();
    var date =d.getDate();
    var month = d.getMonth()+1;
    var year = d.getFullYear();
    var final_date = date + '/' + month  + '/' + year;
    document.getElementById("result") .innerHTML = final_date;

}
function year(){
    const d = new Date("2021-03-25")
    document.getElementById("yea").innerHTML = d.getFullYear();
}
function one(){
    const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

const d = new Date("2021-12-25");
let month = months[d.getMonth()];
document.getElementById("mon").innerHTML = month;
}
