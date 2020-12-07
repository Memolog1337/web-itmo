//1
$(document).ready( function(){
  disabler();
});

$('.Rock a').css({
	"color":"red",
	"textDecoration":"none"
});
$('p.Country').css({
	"color":"#A34521", 
	"margin":"10px"
});
$('.Country a').css("fontWeight", "bold");
$('p.Rock').css("color", "blue");

function disabler(){
	$('.form input:enabled, select:enabled').attr("disabled","");
}

//2
$('a').prepend("<span class='arrow'>↗</span>️");
$('a').each(function(){										// Сохраняем исходные значения аттрибута target
	$(this).attr("target_backup", $(this).attr("target"))
});

$('a').attr("target", "_blank");

$("a[href^='http://']").each( function(){
	this.href = this.href.replace('http://', 'https://');	// Замена http на https для всех ссылок, 
});															// у которых в начале href есть http

var $input = $('<input type="button" onclick="redo()" value="Добавили" style="float:right" />');
    $input.prependTo($("body"));	// Добавляем HTML элемент в начало body

function redo(){
	$("span.arrow").remove();
	
	$('a').each(function(){
		$(this).attr("target", $(this).attr("target_backup")) // Возвращаем исходные значения аттрибута target
	});
}

//3
$("#but1").click(function(){
    $("#panel").slideDown("slow");
});

$("#but2").click(function(){
	$("#img1").fadeIn("slow");
});

$("#but3").click(function(){
    $("td a").toggle();
});

$("#but4").click(function(){
    $("#animated").animate({left: '400px'})
});

$("#but5").click(function(){
    $("td input[type='text']").fadeTo(1000, 0.3);
});

//4
$("#but6").click(function(){
    $("#some").load("https://inxaoc.github.io/example/ajax-1.html");
});
