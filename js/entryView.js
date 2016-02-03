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
    var $tabContent = $('.tab-content');
    var $dataContent = $(this).attr('data-content');
    console.log($tabContent);
    console.log($dataContent);
    $tabContent.hide();
    $tabContent.filter('#' + $dataContent).show();
  })
}

$(function() {
  entryView.handleMainNav();
})
