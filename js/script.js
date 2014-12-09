$(function() {
	var BLOCK = 'fotorama',
	    ELEM_WRAP = BLOCK + '__wrap',
	    ELEM_ARROW = BLOCK + '__arrow',
	    MOD_ARROW_PREV = ELEM_ARROW + '--prev',
	    MOD_ARROW_NEXT = ELEM_ARROW + '--next';

	function createArrow(mod, showParam) {
		return $('<div/>', {
			'class': ELEM_ARROW,
			tabindex: 0,
			role: 'button'
		}).addClass(mod).on('click', function() {
			$f.data('fotorama').show(showParam);
		});
	}

	var $f = $('.' + BLOCK);
	$f.on('fotorama:ready', function (e, fotorama) {
		$f.find('.' + ELEM_WRAP)
		  .append(createArrow(MOD_ARROW_PREV, '<'))
		  .append(createArrow(MOD_ARROW_NEXT, '>'));
	}).fotorama();
});