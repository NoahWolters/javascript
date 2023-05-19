const animals = ["Dog", "Cat", "Lion"];
const removedItem = animals.splice(0, 1);

console.log(animals);

// zweite array
const fruits = ["Watermelon", "Banana", "Cherry", "Kiwi", "Pineapple", "Apple"];
const removeitem = fruits.splice(2, 1);

console.log(fruits);

// sumOfCharacters

function sumOfCharacters(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "string") {
      sum += arr[i].length;
    }
  }

  return sum;
}

const arr1 = ["Luke", "Anakin", true, "Obi Wan", 333];
console.log(sumOfCharacters(arr1));

const arr2 = [
  "Code is",
  "like humor",
  ".",
  "When you have",
  "to explain it, it's bad!",
];
console.log(sumOfCharacters(arr2));
