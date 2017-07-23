
window.onload = function() {
  function handleGuardianApiResponse(response) {
    var articleList = new ArticleList(response);
    controller = new HeadlinesController(articleList)
    headlines = document.getElementById("headlines");
    controller.setHtmlToElement(headlines);
  }
  
  if (window.location.href.substring(0, 8) ==  "file:///") {
    handleGuardianApiResponse(mockGuardianApiResponse);
    controller.showArticleContentOnClick(headlines)
    
  } else {
    var xhttp = new XMLHttpRequest();
    
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var a = JSON.parse(this.response);
        handleGuardianApiResponse(JSON.parse(this.response));
        controller.showArticleContentOnClick(headlines)
      }
    };
    xhttp.open("GET", "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/uk-news?show-fields=body", true);
    xhttp.send();
    
    
    
  }
}
