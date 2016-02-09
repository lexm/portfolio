var entryView = {};

entryView.handleMainNav = function() {
  $('.main-nav .tab').on('click', function() {
    var $tabZone = $('.tab-zone');
    var $dataZone = $(this).attr('data-zone');
    $tabZone.hide();
    $tabZone.filter('#' + $dataZone).show();
  });
};

entryView.create = function() {
  var entry;
  $('#entries').empty();
  entry = new Entry({
    sitename: $('#entry-sitename').val(),
    siteUrl: $('#entry-siteurl').val(),
    description: $('#entry-description').val()
  });
  $('#entries').append(entry.toHtml());

};

entryView.initIndexPage = function() {
  Entry.all.forEach(function(a) {
    console.log('a is ' + a)
    $('#entries').append(a.toHtml());
  });
};

$(function() {
  entryView.handleMainNav();
});
