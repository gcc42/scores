# Scraper class

Sample usage:

```
let Scraper = require('./tunefind/scraper.js');

let scraper = new Scraper('Riverdale');

scraper.getTracksList().then(tracks => {
    console.dir(tracks, { depth: null });
});
```

