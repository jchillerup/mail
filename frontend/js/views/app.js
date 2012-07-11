define([
    'jquery',
    'underscore',
    'backbone',
    'vm',
    'events',
    'text!templates/layout.html' 
], function($, _, Backbone, Vm, Events, layoutTemplate){
    var AppView = Backbone.View.extend({
	el: '.container',
	initialize: function () {
	    

	},
	render: function () {
	    var self = this;
	    $(this.el).html(layoutTemplate);
	    require(['views/sidebar/menu'], function (HeaderMenuView) {
		var headerMenuView = Vm.create(self, 'HeaderMenuView', HeaderMenuView);
		headerMenuView.render();
	    });
	} 
    });
    return AppView;
});
