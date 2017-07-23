(function(exports) {
  function HeadlinesController(articleList) {
    this.articleListView = new ArticleListView(articleList);
  }
  
  HeadlinesController.prototype.setHtmlToElement = function (element) {
    element.innerHTML = this.articleListView.getHtml();
  };
  
  exports.HeadlinesController = HeadlinesController;
  
})(this);
