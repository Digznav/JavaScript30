var toggle = document.querySelector(".toggle");
var slider = document.querySelector(".player__slider");
var button = document.querySelector(".player__button");
var controls = document.querySelector(".player__controls");
var progress = document.querySelector(".progress__filled");
var progress = document.querySelector(".progress");
var player = document.querySelector(".viewer");





toggle.addEventListener('click', function () {
    if (player.paused) {
        player.play();
        button.innerHTML = "❚ ❚";
    } else {
        player.pause();
        button.innerHTML = "►";
    }
    //this.paused? this.play() : this.pause()
    // if(player.play() =! true){
    //     player.play();
    //    var symbol = document.getElementsByClassName(".toggle").innerHTML = "❚ ❚";
    // }
    // else{
    //     player.pause();
    // }
});

progress.addEventListener('timeupdate', function () {

    console.log(progress);
    currentPos = progress.currentTime; //get currentime
    maxduration = progress.duration; //get video duration
    percentage = (100 * currentPos / maxduration);
   
});
function volume(){

}


//console.log(play);

// play.onclick() = playVideo()

// console.log(play);

// function playVideo() {
//     player.play();
// }

// function pauseVideo() {
//     player.pause();
// }
