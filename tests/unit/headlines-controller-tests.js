(function() {
  var controller = new HeadlinesController(articleList);
  it("HeadlinesController sets the HTML content for headlines element", function() {
    
    dummyHeadlines = document.createElement("div");
    dummyHeadlines.innerHTML = "to be replaced";
    controller.setHtmlToElement(dummyHeadlines);
    assertEquals(dummyHeadlines.innerHTML, htmlResult);
  });
  
})();
