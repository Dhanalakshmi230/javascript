function myFunction() {
  alert()
  var x = document.getElementById("fname").value;
  alert(x)
  document.getElementById("demo").innerHTML = x;
  var y = document.getElementById("lname").value;
  alert(y)
  document.getElementById("sec").innerHTML = y;
}
//filter letter
//   let names=["sakthi" , "santhi", "manasa", "sasi", "karni", "safi"];
//    let str=names.toString()
//   function CountLetterInString(arr,letter){
//     let Count=0;

//   for(i=0;i<arr.length;i++){
//     if (arr[i]===letter){
//       Count++;
//     }
//     for(i=0;i<arr.length[0];i++){
//       if (arr[i]===letter){
//         count++;
//       }
//     }
//   }
//   return Count;
// }

//   console.log(CountLetterInString(str,"a"))
//     let names=["sakthi" , "santhi", "manasa", "sasi", "karni", "safi"];

// function CountLetterInString(arr,letter){
//   let count = 0;
//   for(i=0;i<arr.length;i++){
//     for(j=0;j<arr[i].length;j++){
//       if (arr[i][j] === letter){
//         count++;
//       }
//     }
//   }
//   return count;
// }

// console.log(CountLetterInString(names,"a"));
// //assending
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
//  fruits.foreach();
// document.getElementById("demo2").innerHTML = fruits;
//asc order
// let arr =["divya", "reena", "manasa", "deepa", "karni", "natchatra"];

// for (let i = 0; i < arr.length; i++) {
//   for (let j = i + 1; j < arr.length; j++) {
//     if (arr[i] > arr[j]) {
//       temp = arr[i];
//       arr[i] = arr[j];
//       arr[j] = temp;
//     }
//   }
// }



// age update

// const names = [
//   { name: 'kannika', age: 20 },
//   { name: 'dhanam', age: 12 },
//   { name: 'karni', age: 13 },
// ];
//   console.log(names);

// const addFourToAge = member => {
//   if (member.age < 15) {
//      return  {...member, age: member.age + 4};
//   }
//   return member;
// };

// const updatednames = names.map(addFourToAge);
// console.log(updatednames)
// console.log(names)

const students = [
  { name: "Sarah Johnson", age: 22, gender: "Female", dob: 1992 },
  { name: "David Brown", age: 21, gender: "Male", dob: 2002 },
  { name: "Emily Davis", age: 20, gender: "Female", dob: 2003 },
  { name: "Michael Garcia", age: 23, gender: "Male", dob: 1998 },
  { name: "Jessica Lee", age: 17, gender: "Male", dob: 2005 },
  { name: "John Smith", age: 22, gender: "Male", dob: 2001 },
  { name: "Lauren Wilson", age: 15, gender: "Female", dob: 2007 },
  { name: "Christopher Martinez", age: 23, gender: "Male", dob: 2000 },
  { name: "Rachel Wilson", age: 21, gender: "Female", dob: 2002 },
  { name: "Thomas Anderson", age: 22, gender: "Male", dob: 2001 }
];
const studentsCopy = students.map(student => ({ ...student }));
// function CountLetterInString(std, year) {
//   var list = [];
//   std.forEach(element => {
//     if (element.dob < year) {
//       list.push(element)
//     }
    
//   })
//   return list;
// }
// console.log(CountLetterInString(studentsCopy, 2002))


// const minAge = 13;
// const maxAge = 18;
// var data=[];
// studentsCopy.forEach(student => {
// if (student.age >= minAge && student.age <= maxAge) {
// data.push(student)
// }

// });
// console.log(data)
const minAge = 13;
const maxAge = 18;
var data=[];
studentsCopy.forEach(student => {
if ((student.age >= minAge && student.age <= maxAge)&&(student.gender=='Female')) {
data.push(student)
}

});
console.log(data)



