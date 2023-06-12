function myFunction1 () {
	if(document.getElementById("button1").innerText == 'Свернуть'){
       document.getElementById("button1").innerText = 'Развернуть'}
    else{document.getElementById("button1").innerText = 'Свернуть'};
    
	document.getElementById("demo1").hidden = !document.getElementById("demo1").hidden;
}
        
function myFunction2 () {
	if(document.getElementById("button2").innerText == 'Свернуть'){
       document.getElementById("button2").innerText = 'Развернуть'}
    else{document.getElementById("button2").innerText = 'Свернуть'};
        
	document.getElementById("demo2").hidden = !document.getElementById("demo2").hidden;
}

function printForm(e){
	let keyBox = document.getElementById("print_text_box");
	let val = keyBox.value;
	let printBlock = document.getElementById("printBlock");
	let pElement = document.createElement("p");
	
	pElement.textContent = val;
	printBlock.appendChild(pElement);
}
      
function delete_printForm() {
	document.getElementById('printBlock').innerText = null;
}
      
let printButton = document.getElementById('print_tx'),
    clearButton = document.getElementById('clear_tx');
	
printButton.addEventListener("click", printForm);
clearButton.addEventListener("click", delete_printForm);

function printPicture(e){
	let nameBox = document.getElementById("name_pic"),
		ageBox = document.getElementById("age_pic"),
		levelBox = document.getElementById("level_pic"),
		pictureBox = document.getElementById("picture_pic"),
		printPic = document.getElementById("printPic");
	let valName = nameBox.value,
		valAge = ageBox.value,
		valLevel = levelBox.value,
		valPicture = pictureBox.value;
	let liElement = document.createElement("li"),
		divElement = document.createElement("div"),
		ulElement = document.createElement("ul"),
		age_liElement = document.createElement("li"),
		level_liElement = document.createElement("li"),
		pictureElement = document.createElement("img");
	liElement.className = "name_st";
	age_liElement.className = "age_st";
	level_liElement.className = "level_st";
		
	liElement.setAttribute('value', valName);
	liElement.textContent = "";
	divElement.textContent = valName;
	ulElement.textContent = "";
	age_liElement.textContent = "Возраст - "+valAge;
	level_liElement.textContent = "Курс - "+valLevel;
	pictureElement.src = valPicture;
	printPic.appendChild(liElement);
	liElement.appendChild(divElement);
	liElement.appendChild(ulElement);
	ulElement.appendChild(age_liElement);
	ulElement.appendChild(level_liElement);
	liElement.appendChild(pictureElement);
}
    
let printPicButton = document.getElementById('print_pic'),
	removePicButton = document.getElementById('remove_pic');
	
printPicButton.addEventListener("click", printPicture);
     
function addOption(){
	let nameBox = document.getElementById("name_pic");
	let valName = nameBox.value;
	let text = valName;
	let value = valName;
	let newOption = new Option(text, value);
	
	studentsSelect.options[studentsSelect.options.length]=newOption;
}
      
function removeOption(){
	let selectedId = document.getElementById("students").selectedIndex;
	let optionsStudent = document.getElementById("students").options;
	let valueStudent = optionsStudent[selectedId].value;
	let selectedVal = document.querySelector("li.name_st[value="+valueStudent+"]");	
	let very_delete = confirm("Удалить карточку?");
	
	if (very_delete == true) {
		studentsSelect[selectedId] = null;
		selectedVal.style.display = "none";}
	else {alert("Правильный выбор")};
}
     
let studentsSelect = Form_students.students;
 
printPicButton.addEventListener("click", addOption);
removePicButton.addEventListener("click", removeOption);




 function ready() {
    document.getElementsByClassName('parallax-img')[0].style.backgroundImage = url('https://yandex.ru/images/search?pos=2&from=tabbar&img_url=https%3A%2F%2Fcs4.pikabu.ru%2Fpost_img%2Fbig%2F2015%2F11%2F13%2F9%2F1447424877_1469861986.jpg&text=doggy&rpt=simage&lr=213');
  }



document.addEventListener("DOMContentLoaded", ready);
