function onClickSidenavIcon() {
	var contentbar = document.getElementById("contentbar");
	var button = document.getElementById("menu-icon");
	contentbar.classList.toggle("contentbarMax");
	if (button.innerHTML == "menu")
		button.innerHTML = "close";
	else
		button.innerHTML = "menu"
}