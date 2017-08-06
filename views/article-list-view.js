(function (exports) {
  function ArticleListView (articleList) {
    this.articleList = articleList;
  }

  ArticleListView.prototype.getHtml = function () {
    return '<ul>' + getHtmlFromListView(this.articleList) + '</ul>'
  };

  function getHtmlFromListView (articleList) {
    var htmlResult = [];
    articleList.headlines.forEach(function (article) {
      htmlResult.push(getHtmlFromOneArticle(article));
    });
    return htmlResult.join('');
  }

  function getHtmlFromOneArticle (article) {
    return '<li><div><a href="#' + article.id + '">' + article.title + '</a></div></li>'
  }

  exports.ArticleListView = ArticleListView;
})(this);
