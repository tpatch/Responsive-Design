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
			var yscrollClear = $(window).height();
			var maxScroll = ($(".slide").length) * yscrollClear;
			$(".prev").addClass("hidden");
			
			// Show/hide Arrows based on slide
			$(window).scroll(function() {
				if (!$(window).scrollTop()){
					$(".prev")
						.toggleClass("hidden")
						.removeClass("visible");	
				} 
				else {
					$(".prev")
						.addClass("visible")
						.removeClass("hidden"); 
				};

				if ($(window).scrollTop() >= (maxScroll-yscrollClear)) {
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
				if(yscroll < maxScroll){
					$("html, body").animate({scrollTop: yscroll});
					yscroll += yscrollClear;
				}
				else{
					$("html, body").animate({scrollTop: maxScroll});
				};
			});
			
			$(".prev").click(function(){
				if(yscroll < yscrollClear){
			   		$("html, body").animate({scrollTop: yscroll});
				}
				else {
					$("html, body").animate({scrollTop: yscroll-(yscrollClear*2)});
					yscroll -= yscrollClear;
				};
			});
			
			$(document).keydown(function(e){
				if (e.keyCode == 40 || e.keyCode == 39 || e.keyCode == 34) {
				   if(yscroll < maxScroll){
						$("html, body").animate({scrollTop: yscroll});
						yscroll += yscrollClear;
					}
					else{
						$("html, body").animate({scrollTop: maxScroll});
					};
				}
			});
			
			$(document).keydown(function(e){
				if (e.keyCode == 38 || e.keyCode == 37 || e.keyCode == 33) {
				   if(yscroll <= yscrollClear){
				   		$("html, body").animate({scrollTop: 0});
					}
					else {
						$("html, body").animate({scrollTop: yscroll-(yscrollClear*2)});
						yscroll -= yscrollClear;
					};
					console.log(yscroll);
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