// // document.getElementById("trigger").addEventListener("mouseover", mouseOver);
// document.getElementById("trigger").addEventListener("mouseout", mouseOut);
// let trigers= document.getElementsByClassName("trigger");
// for (var i = 0; i < trigers.length; i++) {
//   trigers[i].addEventListener('mouseOver', mouseOver, false);
// }

// function mouseOver() {
//     alert('msg');
//     // document.getElementById("short").style.display = "block";
//     document.getElementById("short").classList.add("shortdisplay")
//   }
//   function mouseOut() {
//       // alert('msg');
//       // document.getElementById("short").style.display = "none";
//       document.getElementById("short").classList.remove("shortdisplay")
// }
let more = document.querySelector('#more');
let epshid = document.querySelector('.eps2');
// let open=0

more.onclick = () =>{
  epshid.classList.toggle('showeps');
}

// search.onclick = () =>{
//     if(open==1){
//         open=0;
//         document.getElementById("sinput").style.display = "none";
//     }else{
//         open=1;
//         document.getElementById("sinput").style.display = "inline-block";
//     }
// }