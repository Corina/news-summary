(function (exports) {
  function ArticleList (guardianApiResponse) {
    this.headlines = [];
    this.getArticles(guardianApiResponse);
  };

  ArticleList.prototype.getArticles = function (guardianApiResponse) {
    var _this = this;
    guardianApiResponse.response.results.forEach(function (result) {
      _this.headlines.push(new Article(result.webUrl, result.webTitle, result.fields.body));
    })
  }

  ArticleList.prototype.getWebUrlMatchingId = function (articleId) {
    var webUrlMatchingId;
    this.headlines.forEach(function (article) {
      if (article.id == articleId) {
        webUrlMatchingId = article.webUrl;
      }
    });
    return webUrlMatchingId;
  };

  exports.ArticleList = ArticleList;
})(this);
