(function () {
  var socket = io();

  var listHashtag = document.querySelector('.list-hashtag');
  var tweetCount = document.querySelector('.tweet-count');
  var tweetHashtag = document.querySelector('.tweet-hashtag');

  socket.on('tweet_list_count', function (hashtag) {
    // console.log(hashtag);

    // for (var i = 0; i < hashtag.length; i++) {
    //   tweetCount.innerHTML = hashtag[i].count;
    //   tweetHashtag.innerHTML = hashtag[i].name;
    // }
    // for (var key in hashtag) {
    //   var createList = document.createElement("li");
    //   var newList = hashtagHashtag.appendChild(createList);
    //
    //   newList = (hashtag[key].count + hashtag[key].name)

      // tweetCount.innerHTML = hashtag[key].count;
    // }
    for (var i = 0; i < hashtag.length; i++) {
      // Update hashtag when their is an update is available.]
      if (hashtag[i].count !== 0) {

        // console.log(hashtag[i].name , hashtag[i].count, hashtag[i].tweets)

        var countUel = document.querySelector('.count-uel');
        var countUelfinal = document.querySelector('.count-uelfinal');
        var countAjaman = document.querySelector('.count-ajaman');
        var countMufc = document.querySelector('.count-mufc');
        var countAfcajax = document.querySelector('.count-afcajax');

        countUel.innerHTML = hashtag[0].count;
        countUelfinal.innerHTML = hashtag[1].count;
        countAjaman.innerHTML = hashtag[2].count;
        countMufc.innerHTML = hashtag[3].count;
        countAfcajax.innerHTML = hashtag[4].count;

        // console.log(hashtag)
        // hashtag.forEach(function(e) {
        //   console.log(e);
        //   var countUel = document.querySelector('.count-uel');
        //   var countUelfinal = document.querySelector('.count-uelfinal');
        //   var countAjaman = document.querySelector('.count-ajaman');
        //   var countMufc = document.querySelector('.count-mufc');
        //   var countAfcajax = document.querySelector('.count-afcajax');
        //
        //
        //   countMufc.innerHTML = countMufc.innerHTML.replace(e.count);
        //   // var li = document.createElement('li');
        //   // li.innerHTML = "";
        //   // li.innerHTML = e.name + " " + e.count;
        //   // tweetHashtag.appendChild(li);
        //
        //   // li.innerHTML = e.count;
        //   // tweetHashtag.appendChild(li)
        //   // tweetCount.innerHTML = e.count;
        // })
        // tweetCount.innerHTML = hashtag[i].count;
        // tweetHashtag.innerHTML = hashtag[i].name;

        // for (var i = 0; i < hashtag.length; i++) {
        //   tweetCount.innerHTML = hashtag[i].count;
        //   tweetHashtag.innerHTML = hashtag[i].name;
        // }
      }
    }

    // tweetCount.innerHTML = hashtag;
    // tweetHashtag.innerHTML = hashtag.name;
  });

  // Error handler
  // socket.on('error_handle', functon() {
  //  console.log('Wrong...');
  // });

})();
