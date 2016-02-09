var entryView = {};

entryView.handleMainNav = function() {
  $('.main-nav .tab').on('click', function() {
    var $tabZone = $('.tab-zone');
    var $dataZone = $(this).attr('data-zone');
    $tabZone.hide();
    $tabZone.filter('#' + $dataZone).show();
  });
};

entryView.initIndexPage = function() {
  Entry.all.forEach(function(a) {
    $('#entries').append(a.toHtml());
  });
};

$(function() {
  entryView.handleMainNav();
});
