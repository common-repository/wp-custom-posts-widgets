jQuery(document).ready(function($) {

  $('#widgets-right').on('click', '.dtlwcpw-tab-item', function(event) {
    event.preventDefault();
    var widget = $(this).parents('.widget');
    console.log(widget);
    widget.find('.dtlwcpw-tab-item').removeClass('active');
    $(this).addClass('active');
    widget.find('.dtlwcpw-tab').addClass('dtlwcpw-hide');
    widget.find('.' + $(this).data('toggle')).removeClass('dtlwcpw-hide');
  });

});