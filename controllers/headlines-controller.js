(function(exports) {
  function HeadlinesController(articleList) {
    this.articleList = articleList;
    this.articleListView = new ArticleListView(this.articleList);
  }

  HeadlinesController.prototype.setHtmlToElement = function (element) {
    element.innerHTML = this.articleListView.getHtml();
  };



  exports.HeadlinesController = HeadlinesController;

})(this);
