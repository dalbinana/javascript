// Write your Pizza Builder JavaScript in this file.
$(function() {
	
		window.phrases = [
		'and she said',
		'I wanna live like common people',
		'I wanna do whatever common people do',
		'I wanna sleep with common people',
		'I wanna sleep with common people like you',
			];


	function randomi() {
		var number_of_phrases = phrases.length;
		var number = 1 + Math.floor(Math.random() * number_of_phrases);
		var phrase = $(phrases).get(number - 1);
		return phrase;
		
	};
	function add_phrase(newphrase) {
		
		phrases.push(newphrase);
		show_phrases(phrases);
		
	};

	function show_phrases(phrases){
	$("ul").empty();
	for (i= 0; i < phrases.length; i++){
		$("ul").append('<li>'+phrases[i]+'<button class="remover">Remove'+'</li>');
		};
	};
// NO VAAAA AQEUSTAAA
	$('.remover').on('click', function () {
		console.log("hol");
		$( this.parent() ).remove();
		});

	$('#show').before("#show");
	$('.button').on('click', function () {
		$('#shownphrase').remove();
		$('.button').before("<p id='shownphrase'>"+randomi()+"</p>");

		});
	show_phrases(phrases);

	$("form").on('submit', function() {

               add_phrase($("input").prop('value'));
    });

    $('.hidden-text').on('click', function () {
	$('.active').toggleClass('inactive');
	if ($('.hidden-text').text() === 'Hide sentences') {
		$('.hidden-text').text('Show sentences');}
	else {
		$('.hidden-text').text('Hide sentences');	
	}
});







	
	


});
	


