// search is working but the results are not scrabbled
function searchKeyword() {
        gapi.client.setApiKey('AIzaSyCWNxek5Rd0cdkpWoqxrKMYLu4mGsS6GZY');
        gapi.client.load('youtube', 'v3', function() {
        	makeRequest();
        });
}
function makeRequest() {
        var searchTerm = $('#query').val();
        var request = gapi.client.youtube.search.list ({
                    q: searchTerm,
                    part: 'snippet',
                    maxResults: 1,
                    type: 'video' });

        request.execute(function(item) {
                var str = JSON.stringify(item.items);
                $('#search-results').append('<p>' + str + '</p>');
        });
}
// function showTitle(object, [key, value]) {

// }

 // $(function(){
// 	  $('#search-button').click(function(event){
// 	    event.preventDefault();
// 	    var searchTerm = $('#query').val();
// 	    getRequest(searchTerm);
// 	  });
// });

// function getRequest(searchTerm){
// 	  var params = {
// 	        q: searchTerm,
// 	        part: 'snippet',
// 	        maxResults: 2  
// 	  };
// 	  url = 'https://www.googleapis.com/youtube/v3/search';

// 	  $.getJSON(url, params, function(data){
// 	    showResults(data.Search);
// 	  });
// }

// function showResults(results){
// 	  var html = "";
// 	  $.each(results, function(index,value){
// 	    html += '<p>' + value.Title + '</p>';
// 	    console.log(value.Title);
// 	  });
// 	  $('#search-results').html(html);
// } 