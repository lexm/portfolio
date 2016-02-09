var entries = [];

function Entry (opts) {
  this.sitename = opts.sitename;
  this.siteUrl = opts.siteUrl;
  this.description = opts.description;
}

Entry.all = [];

Entry.prototype.toHtml = function() {
  var template = Handlebars.compile($('#entry-template').text());
  return template(this);
};

Entry.loadAll = function(rawData) {
  rawData.forEach(function(ele) {
    Entry.all.push(new Entry(ele));
  });
};

Entry.getData = function() {
  $.getJSON('data/entryData.json', function(data) {
    localStorage.rawEntryData = JSON.stringify(data);
    Entry.loadAll(data);
    entryView.initIndexPage();
  });
};

Entry.fetchAll = function () {
  if(localStorage.entryData) {
    $.ajax({
      type: 'HEAD',
      url: 'data/entryData.json',
      success: function(data, message, xhr) {
        console.log(xhr);
        var eTag = xhr.getResponseHeader('eTag');
        if (!localStorage.eTag || eTag !== localStorage.eTag) {
          localStorage.eTag = eTag;
          Entry.getData();
        } else {
          Entry.loadAll(JSON.parse(localStorage.rawEntryData));
          entryView.initIndexPage();
        }
      }
    });
  }
};

// entries.forEach(function(a) {
//   $('#entries').append(a.toHtml());
// });

entryView.initIndexPage();
