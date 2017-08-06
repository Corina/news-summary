(function (exports) {
  function HeadlinesController (articleList) {
    this.articleList = articleList;
    this.articleListView = new ArticleListView(this.articleList);
  }

  HeadlinesController.prototype.setHtmlToElement = function (element) {
    element.innerHTML = this.articleListView.getHtml();
  };

  HeadlinesController.prototype.guardianApiRequest = function (callback, articleElement) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        callback();
        var articleSummaryController = new ArticleSummaryController(articleElement);
      }
    };
    xhttp.open('GET', 'http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/uk-news?show-fields=body', true);
    xhttp.send();
  };
  exports.HeadlinesController = HeadlinesController;
})(this);
