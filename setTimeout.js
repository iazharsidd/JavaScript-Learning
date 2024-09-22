// function h() 
// {
//     console.log("Hello");    
// }
// function m()
// {
//     console.log("Mello");
// }
// setTimeout(h,2*1000);
// setTimeout(m,4*1000);
// setTimeout(function() {
//     console.log("5Sec");
// }, 2*1000);
for(let i = 1; i <= 10; i++)
{
    setTimeout(function()
{
    console.log(i);
    
},i*1000)
}
