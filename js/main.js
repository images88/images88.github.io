var menu = document.getElementById('menu');

var menuToggle = document.querySelector('.menu-toggle'); 




menuToggle.onclick =  function () {

	if(menu.className == "toggle") {
		menu.className = ' ';
		return;
	}

	menu.className = "toggle";
}

