define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/sidebar/menu.html' 
], function($, _, Backbone, sidebarTemplate){
  var SidebarView = Backbone.View.extend({
    el: '.main-menu-container',
    intialize: function () {
    },
    render: function () {
      $(this.el).html(sidebarTemplate);
      $('a[href="' + window.location.hash + '"]').addClass('active');
    },
    events: {
      'click a': 'highlightMenuItem'
    },
    highlightMenuItem: function (ev) {
      $('.active').removeClass('active');
      $(ev.currentTarget).addClass('active');
    }
  })

  return SidebarView;
});
