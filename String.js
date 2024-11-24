let s = "Azhar";
console.log(s.toUpperCase());
s.toUpperCase();
console.log(s);
s2 = s.toUpperCase();//it does not change the original strig but makes a new copy   
console.log(s2);
const repoCount = 2
console.log(`My name is ${s} and My rep count is ${repoCount}`);

const gameName = new String('Siddiqui');
// console.log(gameName);
// console.log(gameName[0]);
// console.log(gameName.charAt(2));
// console.log(gameName.lastIndexOf('i'));
console.log(gameName.slice(-8,7))
const a = "a";
const b = "b";
if (a < b) {
  // true
  console.log(`${a} is less than ${b}`);
} else if (a > b) {
  console.log(`${a} is greater than ${b}`);
} else {
  console.log(`${a} and ${b} are equal.`);
}