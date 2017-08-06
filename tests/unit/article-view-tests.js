(function(){
  var contentToHtml = "<div>I am very interested to hear that Philip Larkin’s flat is being honoured with a blue plaque (Report, 17 July).\n\nWhat people should also know is that the composer John Joubert lived in this same flat in the 1960s when a lecturer in music at Hull University and is a composer of 160 works including two symphonies, violin, piano, cello, oboe and bassoon concertos, and seven operas. He has a major choral output including Christmas carols.\n\nHis most famous carol is Torches, which was written for his wife who was teaching at a school in Hull. Joubert is 90 and still composing. I would like to suggest that another blue plaque be added to the same building to celebrate its other famous inhabitant.\n\nLinda Gresham\n\nBirmingham\n\n• Read more Guardian letters – click here to visit gu.com/letters</div>"

  var articleView = new ArticleView(mockAylienResponse);
  it("ArticleView return a string of HTML containing the summary of the article", function() {
    assertEquals(articleView.getHtml(), contentToHtml);
  });
})();
