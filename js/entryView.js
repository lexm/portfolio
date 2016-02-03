var entryView = {};

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
    console.log($tabZone);
    console.log($dataZone);
    $tabZone.hide();
    $tabZone.filter('#' + $dataZone).show();
  });
};

$(function() {
  entryView.handleMainNav();
});
