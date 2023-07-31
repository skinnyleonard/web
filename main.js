$('.boton').click(function () {
	$('.logoz').fadeOut(200)
	$('.cabeza').fadeOut(200)
	$('.gif').fadeOut(200)
	$('.boton').fadeOut(200)
	$('.consultas').fadeOut(200);
	$('.quehacemos').fadeIn(200).animate({right:'30px'});
	$('.quesehace').fadeIn(200).animate({left:'50px'});
	document.querySelector('.logo').style.cursor = 'pointer';
});

$('.logo').click(function () {
	document.querySelector('.logo').style.cursor = 'initial';
	$('.quehacemos').animate({right:'0px'}).fadeOut(200);
	$('.quesehace').animate({left:'0px'}).fadeOut(200);
	setTimeout(() => {
	$('.logoz').fadeIn(200)
	$('.cabeza').fadeIn(200)
	$('.gif').fadeIn(200)
	$('.boton').fadeIn(200)
	$('.consultas').fadeIn(200);
		},'500')
});