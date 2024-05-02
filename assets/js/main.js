let menu = document.querySelector('#menu-bars');
let search = document.querySelector('#search');
let navbar = document.querySelector('.navbar');
let input=document.querySelector('#sinput')
let open=0

menu.onclick = () =>{
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
}

search.onclick = () =>{
    if(open==1){
        open=0;
        document.getElementById("sinput").style.display = "none";
    }else{
        open=1;
        document.getElementById("sinput").style.display = "inline-block";
    }
}

input.addEventListener("keypress", function(event) {
    // If the user presses the "Enter" key on the keyboard
    if (event.key === "Enter") {
        window.location.href="search.html"
      // Cancel the default action, if needed
      event.preventDefault();
    }
  });

// function search(ele) {
//     window.location.href="tes.html"
// }