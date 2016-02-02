var Entries = [];

function Entry (opts) {
  this.sitename = opts.sitename;
  this.siteUrl = opts.siteUrl;
  this.description = opts.description;
}

Entry.prototype.toHtml = function() {
  var $newEntry = $('article.template').clone();
  // var entryTitle = $newEntry.find('#site');
  // entryTitle.text(this.sitename);
  $newEntry.find('#site').text(this.sitename);
  $newEntry.find('#site > a').attr('href, this.siteUrl');
  $newEntry.find('#site-desc').html(this.description);

  $newEntry.append('<hr>');
  $newEntry.removeClass('template');
  return $newEntry;
}
