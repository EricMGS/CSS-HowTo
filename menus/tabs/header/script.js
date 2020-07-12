function setActive(tab, content, color) {
    allTabs = document.getElementsByClassName("tab");
    allContent = document.getElementsByClassName("content");
    for(i = 0; i < allTabs.length; i++) {
        allTabs[i].style.backgroundColor = "inherit";
        allTabs[i].style.color = "black";
        allContent[i].style.display = "none";
    }

    tab.style.backgroundColor = color;
    tab.style.color = "white";
    content.style.display = "block";
}

window.onload = function() {
    document.getElementById("defaultTab").click();
}

function onTabClick(e, contentName, color) {
    tab = e.target;
    content = document.getElementById(contentName);
    setActive(tab, content, color);
}