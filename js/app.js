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

 	
	    request.execute(function(item) {	
	    	
	    	var titles = [];  
	    	var thumbnails = [];
	    	var videoURL = [];
	    	var baseURL = 'https://www.youtube.com/watch?v=';

  			JSON.stringify(item.items);
  			// console.log(item.items);
	  		for (var i = 0; i < item.items.length; i++){

	  			titles.push(item.items[i].snippet.title);
	  			thumbnails.push(item.items[i].snippet.thumbnails.medium.url);
	  			videoURL.push(item.items[i].id.videoId);
	  			
	  			$('#search-results').append('<p>' +titles[i]+ '</p>' + '<a href='+baseURL + videoURL[i]+'><img src='+thumbnails[i]+'></a>' + '<br>');
	  		}  		   	
  		   	

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