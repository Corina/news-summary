(function(exports) {
  function ArticleView(article) {
    this.article = article;
  }
  
  ArticleView.prototype.getHtml = function() {
    return "<div>" + this.article.content + "</div>";
  };
  
  exports.ArticleView = ArticleView;
})(this);
