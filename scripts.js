/*jslint devel: false, browser: false, white: true */
/*global $: false, window: false */

(function () {
	"use strict";

	window.RD = {
		init: function () {
			this.scrolling();
		},

		scrolling: function () {
			var yscroll = $(window).height();
			$(".prev").addClass("hidden");
			
			// Show/hide Previous Arrow based on slide
			$(window).scroll(function() {
				if (!$(window).scrollTop()){
					$(".prev")
						.addClass("hidden")
						.removeClass("visible");	
				} else {
					$(".prev")
						.addClass("visible")
						.removeClass("hidden"); 
				}
			});
			
			$(".next").click(function(){
				window.scrollBy(0, yscroll);
			});
			
			$(".prev").click(function(){
				window.scrollBy(0, -yscroll);
			});
			
			$(document).keydown(function(e){
				if (e.keyCode == 40 || e.keyCode == 39) {
				   window.scrollBy(0, yscroll);
				   return false;
				}
			});
			
			$(document).keydown(function(e){
				if (e.keyCode == 38 || e.keyCode == 37) {
				   window.scrollBy(0, -yscroll);
				   return false;
				}
			});
		}
		
	};

	$(window.document).ready(function () {
		window.RD.init();
	});
}());