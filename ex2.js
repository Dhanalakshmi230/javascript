function reset(){
    document.getElementById("txtNum1").value;
    document.getElementById("txtNum2").value;

}
function myFunction(){
   var num1 = Number( document.getElementById("txtNum1").value);
   var num2 = Number( document.getElementById("txtNum2").value);
   var add = num1 + num2;

   document.getElementById("demo").innerHTML = add;
}
   function subtraction(){
    var num1 = Number( document.getElementById("txtNum1").value);
    var num2 = Number( document.getElementById("txtNum2").value);
    var sub = num1 - num2;

    document.getElementById("demo1").innerHTML = sub;
   }
    function multiplication(){
        var num1 = Number( document.getElementById("txtNum1").value);
        var num2 = Number( document.getElementById("txtNum2").value);
        var mul = num1 * num2;
        
   document.getElementById("demo2").innerHTML = mul;
    }
    function division(){
        var num1 = Number( document.getElementById("txtNum1").value);
        var num2 = Number( document.getElementById("txtNum2").value);
        var div = num1 / num2;
        document.getElementById("demo3").innerHTML = div;
    }
   
  