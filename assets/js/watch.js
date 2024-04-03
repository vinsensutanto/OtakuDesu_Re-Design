// function vidplay() {
//     var video = document.getElementById("anime");
//     var button = document.getElementById("play");
//     if (video.paused) {
//        video.play();
//        button.textContent = "||";
//     } else {
//        video.pause();
//        button.textContent = ">";
//     }
//  }

//  function restart() {
//      var video = document.getElementById("anime");
//      video.currentTime = 0;
//  }

 function skip(value) {
     var video = document.getElementById("anime");
     video.currentTime += value;
 }      