let page = document.querySelector('.page');
let themeButton = document.querySelector('.theme-button');
page.classList.add('dark-theme');
themeButton.onclick = function() {
	page.classList.toggle('dark-theme');
	}
