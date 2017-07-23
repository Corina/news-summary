(function(exports){
  
  function ArticleList(guardianApiResponse){
    this.headlines = [];
    this.getArticles(guardianApiResponse);
  };
  
  ArticleList.prototype.getArticles = function (guardianApiResponse) {
    var _this = this;
    guardianApiResponse.response.results.forEach(function(result) {
      _this.headlines.push(new Article(result.webUrl, result.webTitle, result.fields.body));
    })
  }
  
  exports.ArticleList = ArticleList;
})(this);
