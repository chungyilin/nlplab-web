var SearchBar = {

  init: function() {
    var searchBar = $('.linggle #search-bar');
    var searchResultPage = $('.linggle.search-result');

    searchBar.focus(this.handleOnFocus);
    searchBar.blur(this.handleOnBlur);
    searchBar.on('input', this.handleOnInput);
  },

  handleOnFocus: function() {
    var landingPage = $('.linggle.landing');
    var searchResultPage = $('.linggle.search-result');

    // toggle visibility
    landingPage.hide();
    searchResultPage.fadeIn(200);
  },

  handleOnBlur: function() {
    var landingPage = $('.linggle.landing');
    var searchResultPage = $('.linggle.search-result');
    var searchBar = $('.linggle #search-bar');

    // no input text
    if(!searchBar.val().trim()) {
      // toggle visibility
      landingPage.fadeIn(200);
      searchResultPage.hide();
    }
  },

  handleOnInput: function() {
    var searchBar = $('.linggle #search-bar');
    var query = escape(searchBar.val().trim());

    if (query) {
      SearchResult.query(query);
    }
  }
}
