(function () {
  var socket = io();

  var listHashtag = document.querySelector('.list-hashtag');
  var tweetCount = document.querySelector('.tweet-count');
  var tweetHashtag = document.querySelector('.tweet-hashtag');
  var tweets = document.querySelector('.tweets');
  var offline = document.querySelector('.offline');

  var hashtagTitle = document.querySelector('.hashtag-title');
  // hashtag buttons
  var uelBtn = document.querySelector('.uel');
  var uelfinalBtn = document.querySelector('.uelfinal');
  var ajamanBtn = document.querySelector('.ajaman');
  var mufc = document.querySelector('.mufc');
  var afcajax = document.querySelector('.afcajax');

  socket.on('tweet_list', function (hashtag) {
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
    uelBtn.addEventListener('click', function(e) {
      e.preventDefault();

      var hashname = 'uel';

      socket.emit('send-hash', hashname);

      hashtagTitle.innerHTML = '#' + hashtag[0].name;



      socket.on('tweet_list', function (hashtag) {
        hashtag.forEach(function(object) {
          if(object.name == hashname) {
            console.log(object);

            for (var i = 0; i < object.tweets.length; i++) {
              var li = document.createElement('li');
              li.innerHTML = object.tweets[i];
              tweets.appendChild(li);
            }
          }
        });
      });
    });
    uelfinalBtn.addEventListener('click', function(e) {
      e.preventDefault();

      var hashname = 'uelfinal';

      socket.emit('send-hash', hashname);

      hashtagTitle.innerHTML = '#' + hashtag[0].name;



      socket.on('tweet_list', function (hashtag) {
        hashtag.forEach(function(object) {
          if(object.name == hashname) {
            console.log(object);

            for (var i = 0; i < object.tweets.length; i++) {
              var li = document.createElement('li');
              li.innerHTML = object.tweets[i];
              tweets.appendChild(li);
            }
          }
        });
        // hashtag.forEach(function(e) {
        //   console.log(e);
        //   var li = document.createElement('li');
        //   li.innerHTML = e.tweets;
        //   tweets.appendChild(li);
        //   tweets.scrollIntoView(true);
        // });
        // console.log(selectedHash)

      });
    });
    mufc.addEventListener('click', function(e) {
      e.preventDefault();

      var hashname = 'mufc';

      socket.emit('send-hash', hashname);

      hashtagTitle.innerHTML = '#' + hashtag[0].name;



      socket.on('tweet_list', function (hashtag) {
        hashtag.forEach(function(object) {
          if(object.name == hashname) {
            console.log(object);

            for (var i = 0; i < object.tweets.length; i++) {
              var li = document.createElement('li');
              li.innerHTML = object.tweets[i];
              tweets.appendChild(li);
            }
          }
        });
        // hashtag.forEach(function(e) {
        //   console.log(e);
        //   var li = document.createElement('li');
        //   li.innerHTML = e.tweets;
        //   tweets.appendChild(li);
        //   tweets.scrollIntoView(true);
        // });
        // console.log(selectedHash)

      });
    });
    ajamanBtn.addEventListener('click', function(e) {
      e.preventDefault();

      var hashname = 'ajaman';

      socket.emit('send-hash', hashname);

      hashtagTitle.innerHTML = '#' + hashtag[0].name;



      socket.on('tweet_list', function (hashtag) {
        hashtag.forEach(function(object) {
          if(object.name == hashname) {
            console.log(object);

            for (var i = 0; i < object.tweets.length; i++) {
              var li = document.createElement('li');
              li.innerHTML = object.tweets[i];
              tweets.appendChild(li);
            }
          }
        });
        // hashtag.forEach(function(e) {
        //   console.log(e);
        //   var li = document.createElement('li');
        //   li.innerHTML = e.tweets;
        //   tweets.appendChild(li);
        //   tweets.scrollIntoView(true);
        // });
        // console.log(selectedHash)

      });
    });
    afcajax.addEventListener('click', function(e) {
      e.preventDefault();

      var hashname = 'afcajax';

      socket.emit('send-hash', hashname);

      hashtagTitle.innerHTML = '#' + hashtag[0].name;

      hashtag.forEach(function(object) {
        if(object.name == hashname) {
          console.log(object);

          for (var i = 0; i < object.tweets.length; i++) {
            var li = document.createElement('li');
            li.innerHTML = object.tweets[i];
            tweets.appendChild(li);
          }
        }


      // socket.on('tweet_list', function (hashtag) {
      //   hashtag.forEach(function(object) {
      //     if(object.name == hashname) {
      //       console.log(object);
      //
      //       for (var i = 0; i < object.tweets.length; i++) {
      //         var li = document.createElement('li');
      //         li.innerHTML = object.tweets[i];
      //         tweets.appendChild(li);
      //       }
      //     }
      //   });
        // hashtag.forEach(function(e) {
        //   console.log(e);
        //   var li = document.createElement('li');
        //   li.innerHTML = e.tweets;
        //   tweets.appendChild(li);
        //   tweets.scrollIntoView(true);
        // });
        // console.log(selectedHash)

      });
    });

    // tweetCount.innerHTML = hashtag;
    // tweetHashtag.innerHTML = hashtag.name;
  });

  window.addEventListener('offline', function() {
  	offline.classList.remove('hide');
  }.bind(this));

  window.addEventListener('online', function() {
  	offline.classList.add('hide');
  }.bind(this));

  // Error handler
  socket.on('error_handle', function (errMsg) {
    offline.classList.add('hide');
  });

  // disconnect
  socket.on('disconnect', function (disconnect) {
    offline.classList.add('hide');
  });

})();
