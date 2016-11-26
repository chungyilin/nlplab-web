var SearchResult = {
  query: function(query) {
    $.ajax({
        url: '/query/' + query,
        type: 'GET',
        dataType: 'json',
    }).done(this.renderSearchResult);
  },

  renderSearchResult: function(data) {
    var searchResult = $('.linggle.search-result tbody');
    var htmlFrag = '<tr><td colspan=4>No result</td></tr>';

    if (data.length !== 0) {
        htmlFrag = '';
        data.forEach(function(element) {
          var ngramstr = element.phrase.join(' ');
          var percentstr = element.percent;
          var countstr = element.count_str;

          // TODO: template literals is in ES6, which is not compatible with IE11
          htmlFrag += `<tr>
            <td class="ngram">${ngramstr}
              <div class="progress">
                <div class="progress-bar" role="progressbar" style="width: ${percentstr};">
              </div>
            </td>
            <td class="percent">${percentstr}</td>
            <td class="count">${countstr}</td>
            <td class="example">
              <button class="linggle btn btn-green" type="button">Show</button>
            </td>
          </tr>`;
      });
    }
    searchResult.html(htmlFrag);
  }
}
