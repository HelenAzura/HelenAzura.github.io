let page = document.getElementById("page");
let themeButton = document.getElementById("theme-button");
page.classList.add('light-theme');
themeButton.addEventListener("click", theme);
function theme() {
	page.classList.toggle('dark-theme');
	}