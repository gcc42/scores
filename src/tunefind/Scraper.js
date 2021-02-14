let convertTitleToKey = require('./helpers.js').convertTitleToKey;
let Seasons = require('./Seasons.js');

class Scraper {
    constructor(title) {
      this.title = title;
    }
    async getTracksList() {
        let tvShowUrl = 'https://www.tunefind.com/show/' + convertTitleToKey(this.title);
        let seasons = new Seasons(tvShowUrl);
        return await seasons.get();
    }
}

module.exports = Scraper;