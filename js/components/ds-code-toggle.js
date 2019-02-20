global.jQuery = require('jquery');
var $ = global.jQuery;
window.$ = $;

$('body').on('change', '[data-behavior~="toggle-code-display"]', function(event) {

  var $self = $(this);
  var $targets = $('.ds-preview + .highlighter-rouge');

  $targets.toggleClass('highlighter-rouge--visible');

})

