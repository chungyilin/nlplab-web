var SearchBar = {

  registerEvents: function() {
    var searchBar = $('.linggle #search-bar');

    searchBar.focus(this.handleOnFocus);
    searchBar.blur(this.handleOnBlur);
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

    // toggle visibility
    landingPage.fadeIn(200);
    searchResultPage.hide();
  }
}

$(document).ready(function() {
  SearchBar.registerEvents();
});
