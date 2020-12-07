var sentence = "Example text sentence."
document.write(sentence,"<br>");

var signs =[".",","," ", "!", "&","?","%","^", ";",":","#","/","*", "-", "1", "2","3","4","5","6","7","8","9","0",];

var letters = 0;
for (var i = 0; i <sentence.length; i++) {
    if (signs.includes(sentence[i])){
        continue;
    }else {
    	letters++;
    }
}

var num = sentence.split(" ");

document.write( "Слов в строке: "+num.length+"<br>");
document.write( "Букв в строке: "+letters+"<br>");
console.log(document.URL);

var div = document.createElement('div');
div.className = "URL";
div.innerHTML = document.URL;
document.body.append(div);

var str = document.URL.indexOf(":");
var protocol = document.URL.substring(0,str);
document.write("<br>Имя протокола: ", protocol);

str = document.URL.lastIndexOf("/");
var extension = document.URL.substring(str + 1, document.URL.length);
document.write("<br>Полное имя: ", extension);

document.write("<br>Имя: " + extension.split(".")[0]);
document.write("<br>Расширение: " + extension.split(".")[1]);

var fLink = "https://gg.bet/im?bet=1500&koef=3&team=NaVi";
document.write("<br>", fLink);

var IndexOfQuestionSign = fLink.indexOf("?");

var pr = {};

var parametrs = fLink.substring(IndexOfQuestionSign+1, fLink.length).split("&");
for(var key in parametrs){
	
	pr[parametrs[key].split("=")[0]] = parametrs[key].split("=")[1];
	document.write("<br>" + parametrs[key].split("=")[0] + " = " + pr[parametrs[key].split("=")[0]]);
}

for(var key=0;key<3;key++){

	var a = document.createElement('a');
	a.name = 'Anchor'+key;
	a.innerHTML = '<br>Anchor'+key;
	document.body.append(a);

}

for(let key=0;key<3;key++){

	let index= Math.trunc(Math.random()*1000000);
	let a = document.createElement('a');
	a.href = 'https://vk.com/id322'+index;
	a.innerHTML = '<br>https://vk.com/id322'+index;
	document.body.append(a);

}

document.write("<br>");

var img1 = document.createElement('img');
	img1.src = "https://vignette.wikia.nocookie.net/mlp/images/b/bc/Princess_Twilight_Sparkle_ID_S4E26.png/revision/latest/scale-to-width-down/250?cb=20160315115200&path-prefix=ru";
	img1.id = "Twilight Sparkle";
	img1.setAttribute("width", "340px");
	img1.setAttribute("height", "412px");
	document.body.append(img1);



var img2 = document.createElement('img');
	img2.src = "https://vignette.wikia.nocookie.net/mlp/images/b/b2/Pinkie_Pie_ID_S4E11.png/revision/latest/scale-to-width-down/250?cb=20151219084738&path-prefix=ru";
	img2.id = "Pinkie Pie";
	img2.setAttribute("width", "340px");
	img2.setAttribute("height", "405px");
	document.body.append(img2);

var aAmount = document.getElementsByTagName("a");

if (aAmount.length==0) {

	alert("Ссылки и анкоры отсутствуют");
}else 
{
	var amount_of_links = 0;

	for (var key=0; key<aAmount.length; key++) {
		if (aAmount[key].hasAttribute('href')){
			amount_of_links++;
		}

	}


	document.write("<br>Количество анкоров: "+(aAmount.length-amount_of_links));
	document.write("<br>Количество ссылок: "+amount_of_links);
}
	
var AnchorLinks = document.querySelectorAll('a');

	var AnchorsNone = true;
	for(var key in AnchorLinks){

		if(AnchorLinks[key].hasAttribute('name')){
			document.write('<br>Текст первого анкора: '+ AnchorLinks[key].innerHTML);
			AnchorsNone = false;
			break;
		}

	}


	if(AnchorsNone){
		document.write('<br>Анкоры отсутствуют');
	}

var AllImages = document.querySelectorAll('img');

if(AllImages.length > 0){

	document.write('<br>Всего картинок: '+ AllImages.length);

}else{

	document.write('<br>Нет картинок');
}

document.write('<br>Ширина первой картинки = ' + document.querySelector('img').width);

var MaxWidth = AllImages[0].width;

for (var key in AllImages) {
	if(AllImages[key].width> MaxWidth){
		MaxWidth = AllImages[key].width;
	}
}

document.write('<br>Ширина самой широкой картинки: ' + MaxWidth);


var SumHeight = 0;

for (var key=0; key<AllImages.length;key++) {

	SumHeight = SumHeight + AllImages[key].clientHeight;
}

document.write('<br>Cумма высот всех картинок: '+ SumHeight);

for(var key=0;key<10;key++){

		
	var form = document.createElement('form');
	form.name = 'form'+key;
	document.body.append(form);

}


var AllForms = document.querySelectorAll('form');

for(var key in AllForms){

	if(key%2 == 0){
		document.write(AllForms[key].name + ', ');
	}
}

for(var key=0;key<AllForms.length;key++){
	
	var input_type_text  = document.createElement('input');
	input_type_text.type = 'text';
	var input_type_file = document.createElement('input');
	input_type_file.type = 'file';
	AllForms[key].appendChild(input_type_text);
	AllForms[key].appendChild(input_type_file);

}

 function SayName() { 
    	alert(this.value); 
    };

	for(let key=0;key<AllForms.length;key++){

		
		let input_type_button  = document.createElement('input');
		input_type_button.value ='Показать имя формы';
		input_type_button.type = 'button';
		input_type_button.addEventListener('click', SayName);

		input_type_button.style.margin = '5px';
		input_type_button.style.padding = '15px 15px 15px 40px';
		input_type_button.style.background='#ccebff';
		input_type_button.style.borderRadius='10px';
		input_type_button.style.backgroundImage='url("https://img.icons8.com/color/48/000000/employee-card.png")';
		input_type_button.style.backgroundPosition='top 8px left 7px';
		input_type_button.style.backgroundRepeat = 'no-repeat';
		input_type_button.style.backgroundSize ='30px';
		
		input_type_button.onmouseleave = function(){
    		this.style.backgroundColor = "#ccebff";
			};
		input_type_button.onmouseenter = function(){
    		this.style.backgroundColor = '#fff';
		};
 
 
  		AllForms[key].appendChild(input_type_button);
		
	}

function Parent(){
		alert(this.parentElement.name);
	}

	for(let key=0;key<AllForms.length;key++){

		
		let input_type_button  = document.createElement('input');
		input_type_button.value ='Принадлежность';
		input_type_button.type = 'button';
		input_type_button.addEventListener('click', Parent);

		input_type_button.style.margin = '5px';
		input_type_button.style.padding = '15px 15px 15px 40px';
		input_type_button.style.background='#ccebff';
		input_type_button.style.borderRadius='10px';
		input_type_button.style.backgroundImage='url("https://img.icons8.com/ultraviolet/40/000000/father.png")';
		input_type_button.style.backgroundPosition='top 8px left 7px';
		input_type_button.style.backgroundRepeat = 'no-repeat';
		input_type_button.style.backgroundSize ='30px';
		
		input_type_button.onmouseleave = function(){
    		this.style.backgroundColor = "#ccebff";
			};
		input_type_button.onmouseenter = function(){
    		this.style.backgroundColor = '#fff';
		};
 
 
  		AllForms[key].appendChild(input_type_button);
		
	}

	function ResetForm(){
		this.parentElement.reset();
	}

	for(let key=0;key<AllForms.length;key++){

		
		let input_type_button  = document.createElement('input');
		input_type_button.value ='Сброс';
		input_type_button.type = 'button';
		input_type_button.addEventListener('click', ResetForm);

		input_type_button.style.margin = '5px';
		input_type_button.style.padding = '15px 15px 15px 40px';
		input_type_button.style.background='#ccebff';
		input_type_button.style.borderRadius='10px';
		input_type_button.style.backgroundImage='url("https://img.icons8.com/offices/30/000000/eraser.png")';
		input_type_button.style.backgroundPosition='top 8px left 7px';
		input_type_button.style.backgroundRepeat = 'no-repeat';
		
		input_type_button.onmouseleave = function(){
    		this.style.backgroundColor = "#ccebff";
			};
		input_type_button.onmouseenter = function(){
    		this.style.backgroundColor = '#fff';
		};
 
  		AllForms[key].appendChild(input_type_button);
		
	}

	function InputNum(){
		alert(this.parentElement.getElementsByTagName('input').length);
	}


for(let key=0;key<AllForms.length;key++){

		
		let input_type_button  = document.createElement('input');
		input_type_button.value ='Показать количество полей';
		input_type_button.type = 'button';


		input_type_button.style.margin = '5px';
		input_type_button.style.padding = '15px 15px 15px 40px';
		input_type_button.style.background='#ccebff';
		input_type_button.style.borderRadius='10px';
		input_type_button.style.backgroundImage='url("https://img.icons8.com/ultraviolet/40/000000/form.png")';
		input_type_button.style.backgroundPosition='top 8px left 7px';
		input_type_button.style.backgroundRepeat = 'no-repeat';
		input_type_button.style.backgroundSize ='30px';

		input_type_button.addEventListener('click', InputNum);

		input_type_button.onmouseleave = function(){
    		this.style.backgroundColor = "#ccebff";
			};
		input_type_button.onmouseenter = function(){
    		this.style.backgroundColor = '#fff';
		};
		
 
  		AllForms[key].appendChild(input_type_button);
		
	}

	let DivA = document.createElement('div');
		DivA.id="DivLinks";
		document.body.append(DivA);

	for(let key=0;key<10;key++){

		let index= Math.trunc(Math.random()*1000000);
		let a = document.createElement('a');
		a.href = 'https://vk.com/id185'+index;
		
		if(key%2==1){
			a.innerHTML = '<br>Нечетная ссылка';
		} 

		if(key%2==0){
			a.innerHTML = '<br>Четная ссылка';
		} 
		if((key==3)|| (key==1)) {
			a.innerHTML = '<br>Еще ссылочки';
		}
		
		DivA.append(a);

	}
