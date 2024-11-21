let score = "33"//33abc would give type of score as NaN
console.log(typeof score);
let valueInNumber = Number(score)
console.log(valueInNumber);
console.log(typeof valueInNumber);
let s = NaN
let valueInNumbers = Number(s)
console.log(typeof valueInNumbers);
console.log(typeof s);
let k = null
console.log(typeof k)
console.log(+true);//converted to 1
console.log(+"");//converted to 0

//1 => true;0 => false
//"" => false
//"hitesh" => true  