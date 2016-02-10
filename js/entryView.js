(function(module) {

  var entryView = {};

  entryView.handleMainNav = function() {
    $('.main-nav').on('click', '.tab', function() {
      var $tabZone = $('.tab-zone');
      var $dataZone = $(this).data('zone');
      $tabZone.hide();
      $('#' + $dataZone).fadeIn();
      // $tabZone.filter('#' + $dataZone).show();
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
      $('#entries').append(a.toHtml());
    });
  };

  $(function() {
    entryView.handleMainNav();
  });

  module.entryView = entryView;



})(window);
