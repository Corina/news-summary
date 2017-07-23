(function(exports) {
  function Article(apiUrl, title, content){
    this.apiUrl = apiUrl;
    this.title = title;
    this.content = content;
  }
  
  exports.Article = Article;
})(this);
