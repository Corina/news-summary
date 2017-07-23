(function(exports){
  
  function ArticleList(apiResponse){
    this.headlines = [];
    this.getArticles(apiResponse);
  };
  
  ArticleList.prototype.getArticles = function (apiResponse) {
    var _this = this;
    apiResponse.response.results.forEach(function(result) {
      _this.headlines.push(new Article(result.webUrl, result.webTitle, result.fields.body));
    })
  }
  
  exports.ArticleList = ArticleList;
})(this);
