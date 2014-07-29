/*does the color effect on hover*/
$(document).ready(function(){
	$(".hex").mouseenter(function() {
		$(this).find(".left").addClass("lefthover");
		$(this).find(".middle").addClass("middlehover");
		$(this).find(".right").addClass("righthover");
	}).mouseleave(function() {
		$(this).find(".left").removeClass("lefthover");
		$(this).find(".middle").removeClass("middlehover");
		$(this).find(".right").removeClass("righthover");
	});
});

/*For clicking the hexes to open mapwindow*/
$(document).ready(function(){
	$(".hex").click(function() {
		$('#mapwindow').css({
			'position': 'absolute',
			'width': '50%',
			'height': '50%',
			'z-index': '10001',
			'display': 'block',
			'border': '2px groove white',
			'border-radius': '10px',
			'background-color': 'black'
		});
		$(document.getElementById("mapwindow")).center();

		$('#bgdiv').css({
			'background-color': 'black',
			'height': '100%',
			'left': '0px',
			'opacity': '0.7',
			'position': 'fixed',
			'top': '0px',
			'width': '100%',
			'z-index': '10000'
		});
	});
	$('#bgdiv').on('click', function () {
		$('#bgdiv').removeAttr("style");
		$('#mapwindow').removeAttr("style");
	});
	$('#mapwindow').on('click', function () {
		$('#bgdiv').removeAttr("style");
		$('#mapwindow').removeAttr("style");
	});
});



/*Centres things*/
jQuery.fn.center = function () {
	this.css("position","absolute");
	this.css("top", Math.max(0, (($(window).height() - $(this).outerHeight()) / 2) + 
			$(window).scrollTop()) + "px");
	this.css("left", Math.max(0, (($(window).width() - $(this).outerWidth()) / 2) + 
			$(window).scrollLeft()) + "px");
	return this;
}