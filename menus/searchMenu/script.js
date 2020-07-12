function fnSearch() {
    searchBox = document.getElementById("searchBox");
    text = searchBox.value.toUpperCase();
    lista = document.getElementById("topicos").getElementsByTagName("li");

    for(i = 0; i < lista.length; i ++){
        textoI = lista[i].getElementsByTagName("a")[0].innerHTML;
        if(textoI.toUpperCase().indexOf(text) > -1) {
            lista[i].style.display = "block";
        }
        else {
            lista[i].style.display = "none";
        }
    }
}