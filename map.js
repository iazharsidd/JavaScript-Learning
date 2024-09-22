function twice(e) 
{
    return e*2;
}
function square(e)
{
    return e*e;
}
let arr = [1,2,3,4];
console.log(arr);
let brr = arr.map(twice);
console.log(brr);
brr = arr.map(square);
console.log(brr);
brr = arr.map(function(e)
{
    return e + 10;
});
console.log(brr);
brr = arr.map((e)=>{
    return e*e*e;
});
console.log(brr);
arr = arr.map( e => e*e);
console.log(arr);

