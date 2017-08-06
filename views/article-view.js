(function (exports) {
  function ArticleView (aylienApiResponse) {
    this.content = aylienApiResponse.text;
  }

  ArticleView.prototype.getHtml = function () {
    return '<div>' + this.content + '</div>';
  };

  exports.ArticleView = ArticleView;
})(this);
