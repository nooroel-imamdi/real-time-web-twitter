(function () {
  var socket = io();

  var listHashtag = document.querySelector('.list-hashtag');
  var tweetCount = document.querySelector('.tweet-count');
  var tweetHashtag = document.querySelector('.tweet-hashtag');

  socket.on('tweet_list_count', function (list) {
    // console.log(list);
    // for (var i = 0; i < list.length; i++) {
    //   tweetCount.innerHTML = list[i].count;
    //   tweetHashtag.innerHTML = list[i].name;
    // }
    // for (var key in list) {
    //   var createList = document.createElement("li");
    //   var newList = listHashtag.appendChild(createList);
    //
    //   newList = (list[key].count + list[key].name)

      // tweetCount.innerHTML = list[key].count;
    // }
    for (var i = 0; i < list.length; i++) {
      // Update country when their is an update is available.
      if (list[i].count !== 0) {

        console.log(list[i].name , list[i].count, list[i].tweets)
        // console.log(list)
        list.forEach(function(e) {

          var li = document.createElement('li');
          li.innerHTML = "";
          li.innerHTML = e.name + " " + e.count;
          tweetHashtag.appendChild(li);

          // li.innerHTML = e.count;
          // tweetHashtag.appendChild(li)
          // tweetCount.innerHTML = e.count;
        })
        // tweetCount.innerHTML = list[i].count;
        // tweetHashtag.innerHTML = list[i].name;

        // for (var i = 0; i < list.length; i++) {
        //   tweetCount.innerHTML = list[i].count;
        //   tweetHashtag.innerHTML = list[i].name;
        // }
      }
    }

    // tweetCount.innerHTML = list;
    // tweetHashtag.innerHTML = list.name;
  });

  // Error handler
  // socket.on('error_handle', functon() {
  //  console.log('Wrong...');
  // });

})();
