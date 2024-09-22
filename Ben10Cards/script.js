var main = document.getElementById("main");
var s = "";
let arr = ["https://i.pinimg.com/564x/5d/c2/61/5dc2617589773fb1953e01a0958af62b.jpg",
    "https://i.pinimg.com/564x/58/84/c9/5884c9d46dd62b802710debe68f31586.jpg",
    "https://i.pinimg.com/564x/d2/96/ee/d296ee9bb96adf280440891a8bc0860a.jpg",
    "https://i.pinimg.com/564x/7d/ee/c3/7deec3ae42897d8133626931c5e21009.jpg",
    "https://i.pinimg.com/564x/14/15/01/14150143598878cc6731c96a24933a83.jpg",
    "https://i.pinimg.com/564x/a0/a7/83/a0a78370db086e9292725aa8b87827d4.jpg",
"https://i.pinimg.com/564x/ac/52/30/ac52301ca902a4e4b6d67094eb238a3b.jpg"];
for(let i = 0; i <= 43; i++)
{
    let a = Math.floor(Math.random()*arr.length);
    s += ` <div class="card"><img src=${arr[a]}></div>`;
}
main.innerHTML = s;