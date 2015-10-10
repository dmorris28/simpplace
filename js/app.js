$(document).ready(function() {
	$("input.button").on('click', function() {
		if ($(this).attr('id') == 'register') {
			$("section#login").removeClass('active')
			$("section#register").addClass('active')
		}
		if ($(this).attr('id') == 'back') {
			$("section#register").removeClass('active')
			$("section#login").addClass('active')
		}
		if ($(this).attr('id') == 'login') {
			$(location).attr('href','welcome.html');
		}

	})
})