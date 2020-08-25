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

function printPic(e){
	let nameBox = document.getElementById("name_pic");
	let ageBox = document.getElementById("age_pic");
	let levelBox = document.getElementById("level_pic");
	let pictureBox = document.getElementById("picture_pic");
	let valName = nameBox.value;
	let valAge = ageBox.value;
	let valLevel = levelBox.value;
	let valPicture = pictureBox.value;
	let printPic = document.getElementById("printPic");
	let liElement = document.createElement("li");
	let divElement = document.createElement("div");
	let ulElement = document.createElement("ul");
	let age_liElement = document.createElement("li");
	let level_liElement = document.createElement("li");
	let pictureElement = document.createElement("img")
	liElement.className = "name_st";
	age_liElement.className = "age_st";
	level_liElement.className = "level_st";
		
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
    
let printButton2 = document.getElementById('print_pic');
	
printButton2.addEventListener("click", printPic);
        
function printForm(e){
	let keyBox = document.getElementById("print_text_box");
	let val = keyBox.value;
	let printBlock = document.getElementById("printBlock");
	let pElement = document.createElement("p");
	
	pElement.textContent = val;
	printBlock.appendChild(pElement);
}
      
function clear1() {
	document.getElementById('printBlock').innerText = null;
}
      
let printButton = document.getElementById('print_tx'),
    clearButton = document.getElementById('clear_tx');
	
printButton.addEventListener("click", printForm);
clearButton.addEventListener("click", clear1);
      
function addOption(){
	let text = document.getElementById('textInput').value;
	let value = document.getElementById('valueInput').value;
	let newOption = new Option(text, value);
	
	studentsSelect.options[studentsSelect.options.length]=newOption;
}
      
function removeOption(){
	let selectedIndex = studentsSelect.options.selectedIndex;
	
	studentsSelect.options[selectedIndex] = null;
}
      
let addButton = Form_students.addButton,
	removeButton = Form_students.removeButton, 
	studentsSelect = Form_students.students;
      
addButton.addEventListener("click", addOption);
removeButton.addEventListener("click", removeOption);