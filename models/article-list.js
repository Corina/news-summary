(function(exports){
  
  function ArticleList(apiResponse){
    this.articles = [];
    getArticles();
  };
  
  function getArticles(apiResponse) {
    apiResponse.response.results.forEach(function() {
      this.articles = [result.apiUrl, result.webTitle]
    })
    this.articles.push()
  }
  
  exports.ArticleList = ArticleList;
})(this);
