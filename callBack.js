function product(x,y) 
{
    return x*y;
}
console.log(product(7,8));
function fun(a,b) 
{
    let x = a(3,4);
    console.log(x-b);
}
fun(product,7)