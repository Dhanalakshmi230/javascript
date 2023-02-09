const arr = ['1', '2', '3', '4', '5', '3', '6', '3', '7', '8',];

const indexes = [];

for (let index = 0; index < arr.length; index++) {
  if (arr[index] === '3') {
    indexes.push(index);
  }
}
console.log(indexes);