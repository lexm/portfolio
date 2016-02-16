(function(module) {

  var entryView = {};

  // entryView.handleMainNav = function() {
  //   $('.main-nav').on('click', '.tab', function() {
  //     $('.tab-zone').hide();
  //     $('#' + $(this).data('zone')).fadeIn();
  //   });
  // };

  entryView.initIndexPage = function() {
    console.log('init index page');
    var $entries = $('#entries');
    $entries.empty();
    Entry.all.forEach(function(a) {
      $entries.append(a.toHtml());
    });
    $('#count').text(Entry.countWords());
  };

  // $(function() {
  //   entryView.handleMainNav();
  // });

  module.entryView = entryView;

})(window);
