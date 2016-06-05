void (function () {
    var keywords = prompt('Enter keywords:').split(' ');
    var posts = document.getElementsByClassName('athing');
    var results = [];
    for (var i = 0; i < posts.length; i++){ 
        var keywordMatches = 0;
        for (var j = 0; j < keywords.length; j++) {
            if (posts[i].innerText.toLowerCase().indexOf(keywords[j].toLowerCase()) > -1) {
                keywordMatches++;
            } 
        }
        if (keywordMatches == keywords.length) {
            results.push(posts[i])
        }
    }
    var showNextForCurrentPost = function(currentPost) {
        currentPost.onclick = function() {
            var currentPostIndex = results.indexOf(currentPost);
            var nextPostIndex = currentPostIndex + 1;
            var nextPost = results[nextPostIndex];
            nextPost.scrollIntoView();
        }
    }
    for (var i = 0; i < results.length; i++) {
        results[i].style.backgroundColor = 'orange';
        showNextForCurrentPost(results[i])
    }
    results[0].scrollIntoView();
})()
