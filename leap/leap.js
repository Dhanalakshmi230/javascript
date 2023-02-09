// leap year
//if((leapyear %4 == 0) && (leapyear %100!= 0)|| (leapyear %400== 0))
//     {function Check_leapyear(){
//     var leapyear=document.getElementById("year").value;
    
//         alert(leapyear+"is a leap year");
//     }
//     else
//     {
//         alert(leapyear+ "is not a leap year");
//     }

// }
// prime number
// var num, i, chk, temp;
// function CheckPrime()
// {
//   num = parseInt(document.getElementById("num").value);
//   if(num)
//   {
//     chk=0;
//     temp = document.getElementById("resPara");
//     temp.style.display = "block";
//     for(i=2; i<num; i++)
//     {
//       if(num%2==0)
//       {
//         chk++;
//         break;
//       }
//     }
//     if(chk==0)
//       document.getElementById("res").innerHTML = "a Prime number";
//     else
//       document.getElementById("res").innerHTML = "not a Prime number";
//   }
// }
// function myfunction(){
//     var subject = document.getElementById("subject").value;

//     switch (subject){
//         case '1':
//             alert("Monday");
//             break;
        
//             case '2':
//             alert("Tuesday");
//             break;

//             case '3':
//             alert("wednesday");
//             break;

//             case '4':
//             alert("Thursday");
//             break;

//             case '5':
//             alert("friday");
//             break;
     
//     }
// }
// while loop
// var i,j;
// var n= prompt("enter the value of n");
// i=1;
// while(i<=10)
// {
//   j=n*i;
//   document.write(n+"*"+i+"="+j);
//   document.write("<br>");
//   i++;
// }
var answer=3;

do{
  var guess=prompt("Guess the number");
}while(guess != answer);
document.write("Correct!");
