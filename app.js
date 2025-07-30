// let para=document.getElementById("para");
// para.addEventListener('click',()=>{
//   setInterval(() => {
//   para.classList.toggle("hidden");
// }, 1000);
// })



let box = document.getElementById("box");
let squarebtn = document.getElementById("square");
let circlebtn = document.getElementById("circle");
let recbtn = document.getElementById("rectangle");

function setShape(shape) {
    box.className = ""; 
    box.classList.add(shape);
}

squarebtn.addEventListener("click", () => {
    setShape("square");
});

circlebtn.addEventListener("click", () => {
    setShape("circle");
});

recbtn.addEventListener("click", () => {
    setShape("rectangle");
});
