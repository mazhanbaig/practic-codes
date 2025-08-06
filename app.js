// // let para=document.getElementById("para");
// // para.addEventListener('click',()=>{
// //   setInterval(() => {
// //   para.classList.toggle("hidden");
// // }, 1000);
// // // })
// // 
// // 
// // 
// // 
// // EVENT REVISION           EVENT REVISION         EVENT REVISION      EVENT REVISION
// // let box=document.getElementById("box")
// // let squarebtn=document.getElementById("square");
// // let circlebtn=document.getElementById("circle");
// // let recbtn=document.getElementById("rectangle");

// // squarebtn.addEventListener("click",()=>{
// //     box.className="";
// //     box.classList.add("square")
// // })
// // recbtn.addEventListener("click",()=>{
// //     box.className="";
// //     box.classList.add("rectangle")
// // })
// // circlebtn.addEventListener("click",()=>{
// //     box.className="";
// //     box.classList.add("circle")
// // })
// // let inp=document.getElementsByTagName("input");
// // function submitNext(){
// //     let val=inp[0].value;
// //     switch (val) {
// //         case "monday":
// //             console.log("hello moto mon");
// //             break;
// //         case "tuesday":
// //                 console.log('hello moto tuesday');
// //             break;
// //         default:
// //             console.log('helooooooooooooooooooooooo');
// //             break;
// //     }
// // }
// // function funrev(el){
// //     el.src=""
// // }
// // function fun(el){
// //     el.src=""
// // }
// // form validation of input tag 
// // function fun(){
// //     let input=document.getElementById("input");
// //     let p=document.getElementById("p")
// //     let val=input.value;
// //     if(val.length>11){
// //     //    val=val.slice(0,11)
// //     //    input.value=val;
// //     p.innerHTML="error"
// //     }
// //     else{
// //         p.innerHTML=''
// //     }
// // }
// IMAGE SLIDER            IMAGE SLIDER                IMAGE SLIDER 
// const imageLinks = [
//   "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d", // Mountain
//   "https://images.unsplash.com/photo-1498050108023-c5249f4df085", // Laptop workspace
//   "https://images.unsplash.com/photo-1506744038136-46273834b3fb"  // Forest road
// ];

// let img = document.getElementById("image");
// let nextBtn = document.getElementById("next");
// let prevBtn = document.getElementById("prev");
// let indexNo = 0;

// function uploadImage() {
//   img.src = imageLinks[indexNo];
// }

// function showNext() {
//   indexNo++;
//   if (indexNo >= imageLinks.length) {
//     indexNo = 0; // loop to start
//   }
//   uploadImage();
// }

// function showPrev() {
//   indexNo--;
//   if (indexNo < 0) {
//     indexNo = imageLinks.length - 1; // loop to end
//   }
//   uploadImage();
// }

// // Initial load
// uploadImage();

// // Event bindings
// nextBtn.addEventListener("click", showNext);
// prevBtn.addEventListener("click", showPrev);

// MONDAY 8-6-2025 DOM 
// let ps=document.getElementsByTagName("p");
// Array.from(ps).forEach(p => {
//     p.style.color="red"
// });