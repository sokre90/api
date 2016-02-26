// title search is working but can only fetch one title not all of them
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
                    maxResults: 5,
                    type: 'video' });

	    request.execute (function(item) {	
		    var str = JSON.stringify(item.items[0].snippet.title);
	    	$('#search-results').append('<p>' + str + '</p>');
  	
	    });
} 

	


        


// var searchTerm = $('#query').val();
// $(function(){

// 	function searchKeyword() {
// 	        gapi.client.setApiKey('AIzaSyCWNxek5Rd0cdkpWoqxrKMYLu4mGsS6GZY');
// 	        gapi.client.load('youtube', 'v3', function() {
// 	        	getRequest();
// 	        });
// 	}

// 	function getRequest(searchTerm){
// 		  var params = ({
// 		        q: searchTerm,
// 		        part: 'snippet',
// 		        maxResults: 2  
// 		  });
// 		  // url = 'https://www.googleapis.com/youtube/v3/search';

// 		  $.get(url, params, function(data){
// 		    showResults(data.Search);
// 		  });
// 	}

// 	function showResults(results){
// 		  var html = "";
// 		  $.each(results, function(index,value){
// 		    html += '<p>' + value.Title + '</p>';
// 		    console.log(value.Title);
// 		  });
// 		  $('#search-results').html(html);
// 	} 
// })