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
    Entry.all = rawData.map(function(ele) {
      return new Entry(ele);
    });
  };

  Entry.getData = function() {
    $.getJSON('data/entries.json', function(data) {
      localStorage.rawEntryData = JSON.stringify(data);
      Entry.loadAll(data);
      entryView.initIndexPage();
    });
  };

  Entry.fetchAll = function (inFunc) {
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
            inFunc();
          }
        }
      });
    } else {
      Entry.getData();
      inFunc();
    }
  };

  Entry.countWords = function() {
    return Entry.all.map(function(a) {
      return a.description.match(/\b\w+/g).length;
    })
    .reduce(function(a, b) {
      return a + b;
    });
  };



  module.Entry = Entry;

})(window);
