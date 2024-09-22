// let x = document.querySelector("#e1");
let x = document.getElementById("e1");
x.addEventListener("click",function () {
    x.innerHTML = "Click";
    x.style.color = "Yellow";
    x.style.backgroundColor = "Red"; 
})
x.addEventListener("mouseleave",function()
{
    x.innerHTML = "Bro";
    x.style.color = "Black";
    x.style.backgroundColor = "White";
});
let y = document.getElementById("e2");
y.addEventListener("mousemove",function () 
{
    y.innerHTML = "Pyhton";
    y.style.color = "Blue";
    
})
y.addEventListener("mouseleave",function()
{
    y.innerHTML = "Code";
    y.style.color = "Black";
});
let z = document.getElementById("e3");
y.addEventListener("click",function(){
    z.style.color = "Purple";
    z.style.backgroundColor ="Yellow";
});
let a = document.getElementById("e3");
a.addEventListener("mousedown",function()
{
    a.innerHTML = "MouseDown";
    a.style.color = "Pink";
});