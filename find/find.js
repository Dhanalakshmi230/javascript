const array1 = [5,66, 12, 8, 130, 44,90];

const value = (element) => element > 13;

console.log(array1.findIndex(value));
//for each
const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
  ]);
  
  let text = "";
  fruits.forEach (function(value, key) {
    text += key + ' = ' + value + "<br>"
  })
  
  document.getElementById("demo").innerHTML = text;
//loop for in
  const person = {fname:"John", lname:"Doe", age:25}; 

let txt = "";
for (let x in person) {
  txt += person[x] + " ";
}

document.getElementById("demo1").innerHTML = txt;

//slice method
const arr1=["sakthi" , "santhi", "manasa", "sasi", "karni", "safi" ];


for (let index = 0; index < arr1.length; index++) {
  let a=arr1[index].slice(arr1[index].length-1)
  if (arr1[index].indexOf ('s')== 0 && a=='i') {
    
    console.log(arr1[index]);
  }
  }
  