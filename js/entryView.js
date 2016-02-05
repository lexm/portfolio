var entryView = {};

// This code is here for when and if I add the select menus

// entryView.populateFilters = function() {
//   $('article').each(function() {
//     if(!$(this).hasClass('template')) {
//       var
//     }
//   })
// }

entryView.handleMainNav = function() {
  $('.main-nav .tab').on('click', function() {
    var $tabZone = $('.tab-zone');
    var $dataZone = $(this).attr('data-zone');
    $tabZone.hide();
    $tabZone.filter('#' + $dataZone).show();
  });
};

$(function() {
  entryView.handleMainNav();
});
