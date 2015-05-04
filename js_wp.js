// Timur Shagiakhmetov
// JavaScript for WP Themes



//Russian Calendar jQuery
$.datepicker.regional['ru'] = { 
	 closeText: 'Закрыть', 
	 prevText: '&#x3c;Пред', 
	 nextText: 'След&#x3e;', 
	 currentText: 'Сегодня', 
	 monthNames: ['Январь','Февраль','Март','Апрель','Май','Июнь', 
	'Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'], 
	 monthNamesShort: ['Янв','Фев','Мар','Апр','Май','Июн', 
	'Июл','Авг','Сен','Окт','Ноя','Дек'], 
	 dayNames: ['воскресенье','понедельник','вторник','среда','четверг','пятница','суббота'], 
	 dayNamesShort: ['вск','пнд','втр','срд','чтв','птн','сбт'], 
	 dayNamesMin: ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'], 
	 dateFormat: 'dd.mm.yy', 
	 firstDay: 1, 
	 isRTL: false 
};
		 
$(function(){
 	 $.datepicker.setDefaults(
 	 $.extend($.datepicker.regional["ru"])
 	 );
 	 $("#datepicker").datepicker();
});


//Прокрутка навигации
var h_hght = 140; // высота шапки
var h_mrg = 0; // отступ когда шапка уже не видна
 	 $(function(){

 	 $(window).scroll(function(){
 	 var top = $(this).scrollTop();
 	 var elem = $('#main_nav_box');
 	 
 	 if (top+h_mrg < h_hght) {
 	 	 elem.css('top', (h_hght-top));
 	 }

 	 else {
 	 	 elem.css('top', h_mrg);
 	 }

 	 });
});

$("#menu-menu1 ul").hide();
$("#menu-menu1>li>a").click(function(){ $("#menu-menu1 ul").hide(); $(this).parent().children("ul").show(); return false; });
      
$(function () { // когда страница загружена
 	 $('#main_nav li a').each(function () { // проходим по нужным нам ссылками
 	 var location = window.location.href // переменная с адресом страницы
 	 var link = this.href // переменная с url ссылки
 	 var result = location.match(link); // результат возвращает объект если совпадение найдено и null при обратном
 
 	 if(result != null) { // если НЕ равно null
 	 	 $(this).addClass('currentMenu'); // добавляем класс
 	 }
 	 
 	 });
});
   

//Подсветка пункта меню в котором мы находимся       
$(function () { // когда страница загружена
 	 $('#footer_nav li a').each(function () { // проходим по нужным нам ссылками
 	 var location = window.location.href // переменная с адресом страницы
 	 var link = this.href // переменная с url ссылки
 	 var result = location.match(link); // результат возвращает объект если совпадение найдено и null при обратном
 
 	 if(result != null) { // если НЕ равно null
 	 	 $(this).addClass('currentMenu1'); // добавляем класс
 	 }
 	 
 	 });
});
      
