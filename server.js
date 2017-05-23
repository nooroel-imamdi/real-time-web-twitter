// Packages
var bodyParser = require('body-parser');
var dotenv = require('dotenv');
var express = require('express');
var ngrok = require('ngrok');
var path = require('path');
var socketio = require('socket.io');
var Twit = require('twit');

// Config
dotenv.config();
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);
app.use(bodyParser.urlencoded({ extended: false }));

// View Engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));

// Set Static Path
app.use(express.static(path.join(__dirname, './public')));

// Twitter API
var twitter = new Twit({
  consumer_key:         process.env.CONSUMER_KEY,
  consumer_secret:      process.env.CONSUMER_SECRET,
  access_token:         process.env.ACCESS_TOKEN,
  access_token_secret:  process.env.ACCESS_TOKEN_SECRET,
  timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
});

var params = {
  track: ['#uelfinal', '#uel', '#ajaman', '#afcaajax', '#mufc', '@afcaajax', '@manutd']
};

var stream = twitter.stream('statuses/filter', params);

var tweetCounts = 0;
// var uelfinal = 0;
// var uel = 0;
// var ajaman = 0;
// var mufc = 0;
// var afcajax = 0;

var hashtag = [
  {
    name: "UEL",
    count: 0,
    tweets: []
  },
  {
    name: "UELfinal",
    count: 0,
    tweets: []
  },
  {
    name: "ajaman",
    count: 0,
    tweets: ['ajaman']
  },
  {
    name: "mufc",
    count: 0,
    tweets: []
  },
  {
    name: "afcajax",
    count: 0,
    tweets: []
  },
];

// Check when a Tweet is placed on Twitter
stream.on('tweet', function (tweet) {
  // console.log(tweet);
  if(tweet) {

    var tweetHashtags = tweet.entities.hashtags;
    // if it contains a hashtag, run code
    if(tweetHashtags.length >= 1) {
      // console.log(tweetHashtags);
      for(var h = 0; h < tweetHashtags.length; h++) {
        // Get hashtag text and convert to lowercase and remove ' + "
        var getHashTag = tweetHashtags[h].text.toLowerCase().replace(/"/g, '').replace(/'/g, '');



        for(var i = 0; i < hashtag.length; i++)
          if(hashtag[i].name === getHashTag) {
            hashtag[i].count++;
            hashtag[i].tweets.push(tweet.text);
            tweetCounts++;
            io.emit('tweet_list_count', hashtag);
          }
          // if(getHashTag === 'ajaman') {
          //   ajaman++;
          // }
          // if(getHashTag === 'uel')  {
          //   uel++;
          // }
          // if(getHashTag === 'uelfinal')  {
          //   uelfinal++;
          // }
          // if(getHashTag === 'afcajax')  {
          //   uelfinal++;
          // }
        }
      }
      var tweetText = tweet.text;
      // console.log(tweetText);

      // if()
  }
});

// User connects to website
// io.on('connection', function (socket) {
//   io.to(socket.id).emit('tweet_list_count', hashtag);
// });

// Error handeling
stream.on('error', function (errMsg) {
  io.emit('error_handle', errMsg);
  console.log('someting went wrong');
});

// Connection to streaming API
stream.on('connected', function () {
  console.log('We are connected with Twitter API');
});

// Disconnected Twitter API and emit to client
stream.on('disconnect', function (disconnect) {
  io.emit('error_handle', disconnect);
  console.log('disconnected');
});

app.get('/', function (req, res) {
  // req.locals.hashtag = hashtag;
  res.render('index.ejs', {hashtag: hashtag});
})

// Run Server
server.listen(process.env.PORT || 3000);
console.log('server running... port 3000');
