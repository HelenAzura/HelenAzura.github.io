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