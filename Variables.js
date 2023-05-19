let userName = "Brad";
userName = "Jenna";

function getUserNameLength(name) {
  let result = name.length;
  return result;
}

console.log(getUserNameLength(userName) > 4);

function isString(input) {
  return typeof input === "string";
}
console.log(isString("Hello"));

function isString(input) {
  return typeof input === "string";
}
console.log(isString(3));

function isString(input) {
  return typeof input === "string";
}
console.log(isString(undefined));

function isString(input) {
  return typeof input === "string";
}
console.log(isString(""));

function isString(input) {
  return typeof input === "string";
}
console.log(isString("John" + "Doe"));
