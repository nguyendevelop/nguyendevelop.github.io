jQuery(function() {
	initViewport();
	initBurgerMenu();
	initSmothScroll();
	initFormValidation();
});

function initViewport() {
	$('.viewport').inviewport({
		threshold: 50, 
		className: 'in-viewport'
	});
}

function initBurgerMenu() {
	$('.nav-opener').burgerMenu();
}

function initSmothScroll() {
	$('.anchor-link').smothScroll();
}

function initFormValidation() {
	$('.form-validate').validation();
}

(function($) {
	$.fn.smothScroll = function() {
		this.click(function(event) {
			if(this.hash) {
				var hash = this.hash;

				event.preventDefault();

				$('html, body').animate({
					scrollTop: $(hash).offset().top
				}, 800, function(){
					window.location.hash = hash;
				});
			}
		});

		return this;
	};
}(jQuery));

/*
{
	"name": "inviewport",
	"version": "0.1.7",
	"title": "inViewPort",
	"author": {
		"name": "Henk Bulder",
		"url": "https://github.com/henkbulder"
		},
	"licenses": [{
		"type": "MIT",
		"url": "http://opensource.org/licenses/MIT"
		}],
	"dependencies": {"jquery": "*"},
	"description": "jQuery plugin that adds a CSS class to selected elements when they have been scrolled into the viewport for the first time.",
	"keywords": ["visible", "scroll", "viewport"],
	"homepage": "http://henkbulder.github.io/inViewPort/",
	"docs": "http://henkbulder.github.io/inViewPort/",
	"bugs": "https://github.com/henkbulder/inViewPort/issues"
}
*/
(function ($) {
	'use strict';
	$.fn.inviewport = function (options) {
		var settings = $.extend({
			'minPercentageInView' : 100,
			'standardClassName': 'in-view'
		}, options);
		this.each(function () {
			var $this = $(this),
			$win = $(window),
			changed = false,
			isVisible = function () {
				var c = settings.className || settings.standardClassName,
				min = (settings.threshold || settings.minPercentageInView) / 100,
				xMin = $this.width() * min,
				yMin = $this.height() * min,
				winPosX = $win.scrollLeft() + $win.width(),
				winPosY = $win.scrollTop() + $win.height(),
				elPosX = $this.offset().left + xMin,
				elPosY = $this.offset().top + yMin;
				if (winPosX > elPosX && winPosY > elPosY) {
					$this.addClass(c);
				}
			};
			$win.on('ready', isVisible())
			.on('resize scroll', function () {
				changed = true;
			})
			setInterval(function () {
				if (changed) {
					changed = false;
					isVisible();
				}
			}, 250);
		});
	};
}(jQuery));

/* burger menu */
(function($) {
	/*$( window ).resize(function() {
		$('body').addClass('resize-active');
	});*/

	$.fn.burgerMenu = function() {
		this.click(function() {
			$('body').toggleClass('nav-active');
		});

		return this;
	};
}(jQuery));

/* form validation */
(function($) {
	$.fn.validation = function() {
		var form = this;

		form.attr('novalidate', 'novalidate');

		form.submit(function(e) {
			form.find('input[type="email"], input[required]').each(function() {
				if(!this.value) {
					e.preventDefault();
					$(this).addClass('error');
					form.addClass('invalid');
				}
			});
		});

		return this;
	};
}(jQuery));