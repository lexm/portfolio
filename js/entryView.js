(function(module) {

  var entryView = {};

  entryView.handleMainNav = function() {
    $('.main-nav').on('click', '.tab', function() {
      $('.tab-zone').hide();
      $('#' + $(this).data('zone')).fadeIn();
    });
  };

  entryView.create = function() {
    $('#entries').empty();
    var entry = new Entry({
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
    $('#count').text(Entry.countWords());
  };

  $(function() {
    entryView.handleMainNav();
  });

  module.entryView = entryView;

})(window);
