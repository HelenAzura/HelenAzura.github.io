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
				var keyBox = document.print_text.print_text_box;
				var val = keyBox.value;
				var printBlock = document.getElementById("printBlock");
				var pElement = document.createElement("p");
				pElement.textContent = val;
				printBlock.appendChild(pElement);
			}
      
			function clear1() {
				document.getElementById('printBlock').innerText = null;
			}
      
			var printButton = document.print_text.print_tx,
      clearButton = document.print_text.clear_tx;
			printButton.addEventListener("click", printForm);
			clearButton.addEventListener("click", clear1);
      
			function addOption(){
				var text = Form_students.textInput.value;
				var value = Form_students.valueInput.value;
				var newOption = new Option(text, value);
				studentsSelect.options[studentsSelect.options.length]=newOption;
			}
      
			function removeOption(){
				var selectedIndex = studentsSelect.options.selectedIndex;
				studentsSelect.options[selectedIndex] = null;
			}
      
			var addButton = Form_students.addButton,
			removeButton = Form_students.removeButton, 
			studentsSelect = Form_students.students;
      
			addButton.addEventListener("click", addOption);
			removeButton.addEventListener("click", removeOption);