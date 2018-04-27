var video = document.getElementById("header-video");
var button = document.getElementById("pause-button");

function pauseVideo(){
    if(video.paused){
        video.play();
        button.innerHTML = "Pause";
    } else {
        video.pause();
        button.innerHTML = "Play"
    }
}
