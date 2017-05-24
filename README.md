# Realtime Web - Minor Webdevelopment 2017 - Herkansing
Nooroel Imamdi | 500706701

## Algemeen
Deze repository betreft het vak *Realtime Web* gedurende het derde blok van de *Minor Webdevelopment* aan de *Hogeschool van Amsterdam*. Dit vak staat in het teken van het inzichtelijk en toegankelijk maken van realtime data voor de eindgebruiker.

## Opdracht
*Maak een app waarbij Realtime data wordt getoond met ondersteuning voor meerdere gebruikers, constante verbinding tussen source en server met sockets of pollen, en constante verbinding tussen client en server met sockets en interface dat bepaald wordt op basis van gebruikerskeuze*

## Concept
In deze app worden de meest gebruikte hashtag rondom de Europa League-final tussen Ajax en Manchester United getoond. De gebruiker ziet realtime hoeveel tweets een bepaalde hashtag bevat en heeft vervolgens de keuze om per hashtag realtime te zien welke tweets daarover binnenkomen.

## Data lifecycle
1. De gebruiker opent de app

2. Via de server wordt een request gedaan naar de relevante hashtags.

```
twitter.stream('statuses/filter', params);
```
3. Indien er een nieuw tweet binnenkomt, dan wordt deze binnengehaald met de volgende code.

```
stream.on('tweet', function (tweet) {}
```

4. Op basis van het resultaat worden vervolgens drie onderdelen opgeslagen in een array: hashtagnaam, count en bijhorende tweets.
```
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
]
```

5. Vervolgens wordt de data vanaf de `server` doorgestuurd naar de `client` middels `socket.io`.
```
io.emit('tweet_list_count', hashtag);
```

6. Deze data wordt dan opgehaald en verwerkt in de client.

```
socket.on('tweet_list_count', function (hashtag) {}
```

7. Op de `client` ziet realtime de gebruiker hoevaak er over een bepaalde tweet wordt gesproken op dat moment middels de counter die wordt door gestuurd vanuit de `server`.

## Features
- Bekijk wat er allemaal wordt gezegd over Ajax-Manchester United
- Ontvang realtime updates, middels `socket`
- Verkijg tweets op basis van #hastag
- Melding indien app offline is

## Wishlist
- Data verwerken in grafiek middels `D3.js`

## Twitter API
Deze app maakt gebruik van een `Twitter API` via `Node.js`.
[Meer informatie](https://www.npmjs.com/package/twit)

## Installtie

1. Clone repo
```
git clone https://github.com/nooroel-imamdi/real-time-web-twitter
cd real-time-web-twitter
```

2. Installeer dependencies

```
npm install
```

3. Maak een `.env`-file om de API call

```
CONSUMER_KEY=CONSUMER_KEY
CONSUMER_SECRET=CONSUMER_SECRET
ACCESS_TOKEN=ACCESS_TOKEN
ACCESS_TOKEN_SECRET=ACCESS_TOKEN_SECRET

```

4. Start server
```
npm start
```

## Tooling
- [Socket.io](https://socket.io/)
- [Express](https://expressjs.com/)
- [EJS](https://www.npmjs.com/package/ejs)
- [Twitter API](https://www.npmjs.com/package/twit)
