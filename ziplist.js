function zipList(arr1, arr2) {
  const temp = [];
  for (let i = 0; i < arr1.length; i++) {
    temp.push(arr1[i], arr2[i]);
  }
  return temp;
}
function zipListTheSimpleWay(arr1, arr2) {
  return _.flatten(_.zip(arr1, arr2));
}
const arr1 = ['a', 'b', 'c'];
const arr2 = [1, 2, 3];
console.log(zipList(arr1, arr2));
console.log(zipListTheSimpleWay(arr1, arr2));
