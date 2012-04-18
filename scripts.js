/*jslint devel: false, browser: false, white: true */
/*global $: false, window: false */

(function () {
	"use strict";

	window.RD = {
		init: function () {
			this.scrolling();
			this.slidesNum();
		},

		scrolling: function () {
			var yscroll = $(window).height();
			var maxScroll = ($(".slide").length) * yscroll;
			$(".prev").addClass("hidden");
			console.log($(window).scrollTop());

			// Get the pages current offset, clean it up
			function getOffset() {
				var currentOffset = $(window).scrollTop();

				if (currentOffset % yscroll != 0) {
					currentOffset -= (currentOffset % yscroll);
				};

				return currentOffset;
			};
			
			// Show/hide Arrows based on slide
			$(window).scroll(function() {
				if (getOffset() < yscroll){
					$(".prev")
						.addClass("hidden")
						.removeClass("visible");	
				} 
				else {
					$(".prev")
						.addClass("visible")
						.removeClass("hidden"); 
				};

				if (getOffset() >= (maxScroll-yscroll)) {
					$(".next")
						.addClass("hidden")
						.removeClass("visible");
				}
				else {
					$(".next")
						.addClass("visible")
						.removeClass("hidden");
				}
			});
			
			$(".next").click(function(){
				var offset = getOffset() + yscroll;
				
				if(yscroll < maxScroll){
					$("html, body").animate({scrollTop: offset});
				}
				else{
					$("html, body").animate({scrollTop: maxScroll});
				};
			});
			
			$(".prev").click(function(){
				var offset = getOffset() - yscroll;
				
				if(getOffset() < yscroll){
					$("html, body").animate({scrollTop: yscroll});
				}
				else {
					$("html, body").animate({scrollTop: offset});
				};
			});
			
			$(document).keydown(function(e){
				if (e.keyCode == 40 || e.keyCode == 39 || e.keyCode == 34) {
				   var offset = getOffset() + yscroll;
					
					if(yscroll < maxScroll){
						$("html, body").animate({scrollTop: offset});
					}
					else{
						$("html, body").animate({scrollTop: maxScroll});
					};
				}
			});
			
			$(document).keydown(function(e){
				if (e.keyCode == 38 || e.keyCode == 37 || e.keyCode == 33) {
				   var offset = getOffset() - yscroll;
				
					if(getOffset() < yscroll){
						$("html, body").animate({scrollTop: offset});
					}
					else {
						$("html, body").animate({scrollTop: offset});
					};
				}
			});
		},

		slidesNum: function () {
			var slides = $(".slide");
			var slidesNum = slides.length;

			$(".slide").each(function(i){
				$(this).addClass("slide" + (i+1));
			});
		}
		
	};

	$(window.document).ready(function () {
		window.RD.init();
	});
}());