window.onload = function onload(){
    document.getElementById("defaultTab").click();
}

function tabClick(e, nome) {
    tab = e.target;
    tabsAll = document.getElementsByClassName("tab");
    for(i = 0; i < tabsAll.length; i++) {
        tabsAll[i].classList.remove("active");
    }
    tab.classList.add("active");

    content = document.getElementById(nome);
    contentAll = document.getElementsByClassName("content");
    for(i = 0; i < contentAll.length; i++) {
        contentAll[i].classList.add("invisible");
    }
    content.classList.remove("invisible");
}