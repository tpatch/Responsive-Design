/*jslint devel: false, browser: false, white: true */
/*global $: false, window: false */

(function () {
	"use strict";

	window.RD = {
		init: function () {
			this.scrolling();
		},

		scrolling: function () {
			$(".next").click(function(){
				window.scrollBy(0, window.innerHeight);
			});
			
			$(".prev").click(function(){
				window.scrollBy(0, -window.innerHeight);
			});
			
			$(document).keydown(function(e){
				if (e.keyCode == 40) {
				   window.scrollBy(0, window.innerHeight);
				}
			});
			
			$(document).keydown(function(e){
				if (e.keyCode == 38) {
				   window.scrollBy(0, -window.innerHeight);
				}
			});
		}
		
	};

	$(window.document).ready(function () {
		window.RD.init();
	});
}());