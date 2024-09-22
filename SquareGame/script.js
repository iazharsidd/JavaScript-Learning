let sq1 = document.getElementById("sq1");
sq1.addEventListener("mouseenter",function(){
    let x = Math.floor(Math.random()*100);
    sq1.innerHTML = `<h1>${x}<h1>`;
});
sq1.addEventListener("mouseleave",function(){
    sq1.innerHTML = "<h1>1<h1>";
});

let sq2 = document.getElementById("sq2");
let c = "Purple";
sq2.addEventListener("mouseenter",function(){
    if(c == "Purple")
    {
        sq2.style.backgroundColor = "Purple";
        c = "Yellow";
    }
    else{
        sq2.style.backgroundColor = "Yellow";
        c = "Purple";
    }
});
sq2.addEventListener("mouseleave",function(){
    sq2.style.backgroundColor = "White";
});
let sq3 = document.getElementById("sq3");
sq3.addEventListener("mouseenter",function(){
    let a = Math.floor(Math.random()*256);
    let b = Math.floor(Math.random()*256);
    let c = Math.floor(Math.random()*256);
    sq3.style.backgroundColor = `rgb(${a},${b},${c})`;
});
sq3.addEventListener("mouseleave",function(){
    sq3.style.backgroundColor = "White";
});
let sq4 = document.getElementById("sq4");
sq4.addEventListener("click",function(){
    let a = Math.floor(Math.random()*256);
    let b = Math.floor(Math.random()*256);
    let c = Math.floor(Math.random()*256);
    sq1.style.backgroundColor = `rgb(${a},${b},${c})`;
    sq2.style.backgroundColor = `rgb(${b},${c},${a})`;
    sq3.style.backgroundColor = `rgb(${c},${a},${b})`;
});
sq4.addEventListener("mouseleave",function(){
    sq1.style.backgroundColor = "White";
    sq2.style.backgroundColor = "White";
    sq3.style.backgroundColor = "White";
});