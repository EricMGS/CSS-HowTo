function onTabClick(e, tabName) {
    listTab = document.getElementsByClassName("tab");
    for(i=0; i < listTab.length; i++) {
        listTab[i].classList.remove("active");
    }
    selectedTab = e.target;
    selectedTab.classList.add("active");

    listContent = document.getElementsByClassName("content");
    for(i=0; i < listTab.length; i++) {
        listContent[i].style.display = "none";
    }
    selectedContent = document.getElementById(tabName);
    selectedContent.style.display = "block";
}

window.onload = function(){
    document.getElementById("defaultTab").click();
}