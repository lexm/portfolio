(function(module) {

  function AboutItem (opts) {
    Object.keys(opts).forEach(function(e, index, keyss) {
      this[e] = opts[e];
    }, this);
  }

  AboutItem.all = [];

  AboutItem.prototype.toHtml = function() {
    var template = Handlebars.compile($('#about-template').text());
    return template(this);
  };

  AboutItem.loadAll = function(rawData) {
    AboutItem.all = rawData.map(function(ele) {
      return new AboutItem(ele);
    });
  };

  AboutItem.getData = function() {
    $.getJSON('data/about.json', function(data) {
      localStorage.rawAboutData = JSON.stringify(data);
      AboutItem.loadAll(data);
      // aboutView.initAboutPage();
    });
  };

  AboutItem.fetchAll = function (inFunc) {
    if(localStorage.rawAboutData) {
      $.ajax({
        type: 'HEAD',
        url: 'data/about.json',
        success: function(data, message, xhr) {
          var aboutETag = xhr.getResponseHeader('eTag');
          if(!localStorage.aboutETag || aboutETag != localStorage.aboutETag) {
            localStorage.aboutETag = aboutETag;
            AboutItem.getData();
          } else {
            console.log('load2');
            AboutItem.loadAll(JSON.parse(localStorage.rawAboutData));
            inFunc();
          }
        }
      });
    } else {
      AboutItem.getData();
    }
  };

  module.AboutItem = AboutItem;

})(window);
