 function searchKeyword() {
            gapi.client.setApiKey('AIzaSyDmEnC0k6Qw7F0s7KV5DuFFwjQ0CPT96sE');
            gapi.client.load('youtube', 'v3', function() {
                    makeRequest();
            });
    }
    function makeRequest() {
            var q = $('#query').val();
            var request = gapi.client.youtube.search.list({
                       q: q,
                    part: 'snippet'                        
            });
            request.execute(function(response) {
                    var str = JSON.stringify(response.result);
                    $('#search-results').html('<pre>' + str + '</pre>');
            });
    }