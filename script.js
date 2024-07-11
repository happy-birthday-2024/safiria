const button = document.getElementById("surprise");
const button_back = document.getElementById("surprise_back");

function surprise() {
    document.getElementById("left").style.display = "none";
    document.getElementById("right").style.display = "none";
    document.getElementById("after-button").style.display = "flex";

    document.getElementById('video-play').play();
}

function surprise_back() {
    document.getElementById("left").style.display = "flex";
    document.getElementById("right").style.display = "block";
    document.getElementById("after-button").style.display = "none";

    document.getElementById('video-play').pause();
}

function stop() {
    document.getElementById('video-play').pause();
}

function weiter() {
    document.getElementById('video-play').play();

    document.getElementsByClassName('woop')[0].style.display = "block";
    document.getElementsByClassName('woop')[1].style.display = "block";
}
