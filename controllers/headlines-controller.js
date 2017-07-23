(function(exports) {
  var articleList;
  function HeadlinesController(articleList) {
    this.articleList = articleList;
    articleList = articleList;
    this.articleListView = new ArticleListView(this.articleList);
  }
  
  HeadlinesController.prototype.setHtmlToElement = function (element) {
    element.innerHTML = this.articleListView.getHtml();
  };
  
  HeadlinesController.prototype.getWebUrlMatchingId = function(articleId) {
    var webUrlMatchingId;
    this.articleList.headlines.forEach(function(article) {
      if (article.id == articleId) {
        webUrlMatchingId = article.webUrl;
      }
    });
    return webUrlMatchingId;
  };
  
  exports.HeadlinesController = HeadlinesController;
  
})(this);
