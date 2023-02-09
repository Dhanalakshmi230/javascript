
let arrayvalu= [];
let list=[];


function validate(){
const names= document.getElementById("username").value;
const fname=  document.getElementById("fathername").value;
const mail=  document.getElementById("email").value;
const dob=  document.getElementById("dateofbirth").value;
let gend = document.querySelector('input[type="radio"]:checked');
const pno=  document.getElementById("phonenumber").value;
const add=  document.getElementById("address").value;
var selected = new Array();

var language = document.getElementById("tb1");
var chks = language.getElementsByTagName("INPUT");
var phoneNum = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    function isValidEmail(email) {
        return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
    }

if (names== ""){
    document.getElementById("error1").innerHTML="* Please Enter Your Name";
}else{
    document.getElementById("error1").innerHTML=""; 
}
if (fname== ""){
    document.getElementById("error2").innerHTML="* Please Enter Your FatherName";
}else{
    document.getElementById("error2").innerHTML=""; 
}
if (mail== ""){
    document.getElementById("error3").innerHTML="* Please Enter Your Email Id";
}else{
    document.getElementById("error3").innerHTML=""; 
}
if (dob== ""){
    document.getElementById("error4").innerHTML="* Please Enter Your Date of Birth";
}else{
    document.getElementById("error4").innerHTML=""; 
}
if (gend){
    document.getElementById("error5").innerHTML="";
}else{
    document.getElementById("error5").innerHTML= "* You must select the gender ";
}
for (var i = 0; i < chks.length; i++) {
    if (chks[i].checked) {
        selected.push(chks[i].value);
    }
} if (selected.length > 0) {
    document.getElementById("error6").innerHTML = "";
} else {
    document.getElementById("error6").innerHTML = "* please enter your languages";
}
if (pno.match(phoneNum )){
    document.getElementById("error7").innerHTML="";
}else{
    document.getElementById("error7").innerHTML="* Please Enter Your phonenumber"; 
}
if (add== ""){
    document.getElementById("error8").innerHTML="* Please give Your address";
}else{
    document.getElementById("error8").innerHTML=""; 
}
let result=
{
    'name': names,'fathername': fname,'email': mail,'dateofbirth': dob,'radio': gend.value, 'lang': selected, 'phonenumber': pno,'address': add 
}
console.log(result);
if (names && fname && mail && dob && gend.value && selected && pno && add ) 
{
    list.push(result)
     localStorage.setItem("resultvalue", JSON.stringify(list));
    buildTable()
}   
else {
    console.log("");
}

}
function buildTable(){
    let row = "";
    list = JSON.parse(localStorage.getItem("resultvalue"));
    arrayvalu.push(list)
    console.log(arrayvalu)
   
    for (var i = 0; i < list.length; i++) {

        row +=
            `<tr>
        <td>${list[i].name}</td>
        <td>${list[i].fathername}</td>
        <td>${list[i].email}</td>
        <td>${list[i].dateofbirth}</td>
        <td>${list[i].radio}</td>
        <td>${list[i].lang}</td>
        <td>${list[i].phonenumber}</td>
        <td>${list[i].address}</td>
        </tr>`
    }
            
            document.getElementById("mytable").innerHTML = row;
        }
        
    
        