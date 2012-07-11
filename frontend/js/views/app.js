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
	    require(['views/header/menu'], function (HeaderMenuView) {
		var headerMenuView = Vm.create(self, 'HeaderMenuView', HeaderMenuView);
		headerMenuView.render();
	    });
	    require(['views/footer/footer'], function (FooterView) {
		var footerView = Vm.create(self, 'FooterView', FooterView);
		footerView.render();
	    });
	    
	} 
    });
    return AppView;
});
