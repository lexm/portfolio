(function(module) {

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
    console.log('where am i');
    $.getJSON('data/entries.json', function(data) {
      console.log('data is ' + data);
      localStorage.rawEntryData = JSON.stringify(data);
      Entry.loadAll(data);
      entryView.initIndexPage();
    });
  };

  Entry.fetchAll = function () {
    if(localStorage.rawEntryData) {
      $.ajax({
        type: 'HEAD',
        url: 'data/entries.json',
        success: function(data, message, xhr) {
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
    } else {
      Entry.getData();
    }
  };
  module.Entry = Entry;

  // entries.forEach(function(a) {
  //   $('#entries').append(a.toHtml());
  // });

  // entryView.initIndexPage();

  // Entry.fetchAll();

})(window);
