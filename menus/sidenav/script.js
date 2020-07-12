function removeAll() {
    var sidenav = document.getElementById("sidenav");
    var section = document.getElementById("section");
    sidenav.classList.remove("open");
    sidenav.classList.remove("fullscreen");
    sidenav.classList.remove("closed");
    section.classList.remove("blur");
    section.classList.remove("push");
}

function btnClose() {
    var sidenav = document.getElementById("sidenav");
    removeAll();
    sidenav.classList.add("closed");
}

function btnOpen() {
    var sidenav = document.getElementById("sidenav");
    removeAll();
    sidenav.classList.add("open");
    btnPush();
    btnBlur();
}

function btnFullscreen() {
    var sidenav = document.getElementById("sidenav");
    removeAll();
    btnBlur();
    sidenav.classList.add("fullscreen");
}

function btnBlur() {
    var section = document.getElementById("section");
    section.classList.toggle("blur");
}
function btnPush() {
    var section = document.getElementById("section");
    section.classList.toggle("push");
}

function btnFullDown() {
    var sidenav = document.getElementById("sidenav");
    sidenav.classList.toggle("opacity");
}