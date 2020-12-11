 function createTable() {
    var body = document.querySelector("body"),
        tr = "",
        td = "",
		input = "",
		but = "",
		title = "",
		table = document.createElement("table");

    table.id = "mainTable";
    title = document.createElement("caption");//заголовок
    title.id = "tableTitle";
    table.appendChild(title);//привязываем заголовок к таблице
	row_count = document.getElementById("row_count").value;
    col_count = document.getElementById("col_count").value;  
 
    for (var i = 0; i < row_count; i++) {
        tr = document.createElement("tr");
		tr.id = "r"+i;
        for (var j = 0; j < col_count; j++) {
			td = document.createElement("td");
			td.id = "c"+j+"r"+i;
			input = document.createElement("textarea");
			but = document.createElement("input");
			but.type = "button";
			but.addEventListener("click", saveText); 
			but.value = "Сохранить"
			td.appendChild(input);
			td.appendChild(but);	
			tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    body.appendChild(table);

	$("#form").attr("hidden", ""); //форма скрыается
	$("#functions").removeAttr("hidden"); // функции появляются
}

function saveText(){
	var $thisCell = this.parentElement,   
		string = $thisCell.children[0].value;
	$thisCell.children[0].remove();
	$thisCell.children[0].remove();
	data = document.createElement("span");
	data.innerHTML = string;
	$thisCell.prepend(data);
} 

function addTitle(){
	var thisTitle = document.getElementById("tableTitle");
	document.getElementById("tableTitle").innerHTML = "<h2>" + document.getElementById("title").value + "</h2>";
}

function changeTable(){
	var borderType = document.getElementById("border").value;
		borderWidth = document.getElementById("width").value;
	if (borderWidth>999) borderWidth=999;
	$('table').css({'border':borderType + ' ' + borderWidth + 'px'});
}

function changeTd(){
	var borderType = document.getElementById("border").value;
		borderWidth = document.getElementById("width").value;
	if (borderWidth>999) borderWidth=999;
	$('td').css({'border':borderType + ' ' + borderWidth + 'px'});
}

function onchangeWight(){
	var borderWidth = document.getElementById("width").value;
	if (borderWidth>999){
		document.getElementById("width").value = 999;
		borderWidth=999;
	}
	document.getElementById("changeTableBut").value = "Применить для внешней границы " + borderWidth + " px и рамка " + borderType;
	document.getElementById("changeTdBut").value = "Применить для ячеек " + borderWidth + " px и рамка " + borderType;
}

function onchangeType(){
	borderType = document.getElementById("border").value;
	document.getElementById("changeTableBut").value = "Применить для внешней границы " + borderWidth + " px и рамка " + borderType;
	document.getElementById("changeTdBut").value = "Применить для ячеек " + borderWidth + " px и рамка " + borderType;
}

function deleteRow() {
    var body = document.querySelector("body"),
        table = document.querySelector("table"),
		rowDeleteNumber = document.getElementById("rowDel").value;
 
	if (rowDeleteNumber >= row_count){ 
		alert("Введено некорректное значение");
		return;
	}

	rowDeleteString = "#" + "r" + rowDeleteNumber; 
	$(rowDeleteString).remove();

	for (var i=parseInt(rowDeleteNumber,10)+1; i <= row_count; i++){   
		var rowChange = document.getElementById("r"+i),
		 	newId = i-1;
		for (var j = 0; j < col_count; j++) {
			var cellChange = document.getElementById("c"+j+"r"+i);
			cellChange.id = "c"+j+"r"+newId;
        }
        rowChange.id = "r" + newId;
	}
	row_count--;
}

function magic() {
    var body = document.querySelector("body"),
        table = document.querySelector("table"),
		color = "",
		colorRed,
		colorGreen,
		colorBlue,
		textHeight,
		randomRowId = random(0, row_count-1),
		randomCellId = random(0, col_count-1),
		randomCell = document.getElementById("c" + randomCellId + "r" + randomRowId);

	if ( (random(1,10) <= 3) && randomCell.children[0].tagName=="SPAN"){
		randomCell.children[0].remove();
		input = document.createElement("textarea");
		but = document.createElement("input");
		but.type = "button";
		but.addEventListener("click", saveText); 
		but.value = "Сохранить"
		randomCell.appendChild(input);
		randomCell.appendChild(but);
		return;
	} 
	
	colorRed = random(1, 255);
	colorGreen = random(1, 255);
	colorBlue = random(1, 255);
	textHeight = random(15, 25);
	colorBack = "rgb(" + colorRed + ", " + colorGreen + ", " + colorBlue + ")";
	colorRed = random(1, 255);
	colorGreen = random(1, 255);
	colorBlue = random(1, 255);
	colorText = "rgb(" + colorRed + ", " + colorGreen + ", " + colorBlue + ")";
	randomCell.style.color = colorText;
	randomCell.style.backgroundColor = colorBack;
	randomCell.style.fontSize = textHeight + "pt";
}

function random(a, b) {
	var randInt = a + Math.random() * (b-a);
	return Math.round(randInt);
}

function deleteTable() {
    var body = document.querySelector("body"),
        table = document.querySelector("table");
    document.body.removeChild(table);
	$("#functions").attr("hidden","");
	$("#form").removeAttr("hidden");
}