function onTopicClick(e) {
    titulo = e.target
    list = titulo.nextElementSibling;
    icon = titulo.lastElementChild;

    list.classList.toggle("listaMax");
    titulo.classList.toggle("opened");
    if(icon.innerHTML == "add")
        icon.innerHTML = "remove"
    else
        icon.innerHTML = "add"
}