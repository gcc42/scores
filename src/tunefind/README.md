# Scraper class

Sample usage:

```
let Scraper = require('./tunefind/Scraper.js');

let scraper = new Scraper('Riverdale');
s
scraper.getTracksList().then(tracks => {
    console.dir(tracks, { depth: null });
});
```

