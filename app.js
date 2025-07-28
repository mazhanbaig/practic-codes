let para=document.getElementById("para");
para.addEventListener('click',()=>{
  setInterval(() => {
  para.classList.toggle("hidden");
}, 1000);


})