var channelName = 'TechGuyWeb';
$(document).ready(function() {
	
	$.get(
		"https://www.googleapis.com/youtube/v3/channels", {
			part: 'contentDetails',
			forUsername: channelName,
			key: "AIzaSyDmEnC0k6Qw7F0s7KV5DuFFwjQ0CPT96sE"},
			function(data) {
				$.each(data.items, function(i, item) {
					console.log(item);
					pid = items.contentDetails.relatedPlsylists.uploads;
					getVids(pid);
				})
			}
	);

	function getVids(pid) {
		$.get(
		"https://www.googleapis.com/youtube/v3/playlistItems", {
			part: 'snippet',
			maxResults: 10,
			playlistId: pid,
			key: "AIzaSyDmEnC0k6Qw7F0s7KV5DuFFwjQ0CPT96sE"},
			function(data) {
				var output;
				$.each(data.items, function(i, item) {
					console.log(item);
					videoTitle = item.snippet.title;

					output = $('<p>'+videoTitle+'</p>');

					//append to results
					$('#search-results').append(output);

				})
			}
		);
	}
});
// function search() {
// 	  var searchTerm= $('#query').val();
// 	  console.log(gapi);
// 	  var request = gapi.client.youtube.search.list({
// 	    q: searchTerm,
// 	    part: 'snippet'
// 	  });

// 	  request.execute(function(response) {
// 	    var str = JSON.stringify(response.result);
// 	    $('#search-results').html('<p>' + str + '</p>');
// 	  });
	
	
	// function handleAPILoaded() {
	//   $('#search-button').attr('disabled', false);
	// }
// }
// $(function() {

	// After the API loads, call a function to enable the search box.
	

	// Search for a specified string.
	// }

	// function getRequest(searchTerm) {
	// 	// var myApiKey = 'AIzaSyDmEnC0k6Qw7F0s7KV5DuFFwjQ0CPT96sE';
	// 	var searchTerm = $('#query').val();
	// 	var params = {
	// 		part: "snippet",
	// 		key: "AIzaSyDmEnC0k6Qw7F0s7KV5DuFFwjQ0CPT96sE",
	// 		q: searchTerm,
	// 		maxResults: 4
	// 	};

	// 	url = 'https://www.googleapis.com/youtube/v3/search';

	// 	$.getJSON(url, params, function(data) {
	// 		showResults(data.Search);
	// 	});
	// };

	// function showResults(results) {
	// 	// var html = "";
	// 	$.each(results, function(index, value) {

	// 		// html += '<p>' + value.Title + '<p>';
	// 		console.log(value.Title);

	// 	});
	// 	// $('#search-results').html(html);
	// };
// });