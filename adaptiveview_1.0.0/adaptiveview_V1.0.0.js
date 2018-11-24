/*
 *
 * Adaptive View v1.0.0
 * Copyright 2018
 *
*/

$(document).ready(function() {
	let enableAdaptiveCollection = $(".enableAdaptive");
	$(enableAdaptiveCollection).each((_, el) => {
		new AdaptiveView(el).init();
	});
});

const AdaptiveView = function(el) {
	this.el = el;
	this.$el = $(el);
	this.breakpoint = this.$el.attr("data-breakpoint") || "576px";

	this.init = () => {
		this.onMediaChange(el);
	}

	this.mediaQuery = window.matchMedia(`(min-width: ${this.breakpoint})`);
	this.mediaQuery.addListener(this.onMediaChange.bind(this));
};

AdaptiveView.prototype.onMediaChange = function(e) {
	let $e = $(e);
	
	this.viewStateHandler(e);

	if($e.hasClass("expansionSlot")){
		this.mediaQuery.addListener(this.expansionSlot.bind(this));
		this.expansionSlot(e);
	}
};

AdaptiveView.prototype.viewStateHandler = function(e){
	if (e.matches) {
		this.$el.find(".phoneView").hide();
		this.$el.find(".desktopView").show();
	} else {
		this.$el.find(".desktopView").hide();
		this.$el.find(".phoneView").show();
	}
};

AdaptiveView.prototype.expansionSlot = function(e){
	if (e.matches) {
		this.$el.find(".phoneView").closest(".container").css({"background-color": "red"});
	} else {
		this.$el.find(".desktopView").closest(".container").css({"background-color": "blue"});
	}
};