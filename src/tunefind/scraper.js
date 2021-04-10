/* eslint-disable @typescript-eslint/explicit-function-return-type,
@typescript-eslint/no-var-requires */

const convertTitleToKey = require('./helpers.js').convertTitleToKey;
const Seasons = require('./seasons.js');

class Scraper {
  constructor(title) {
    this.title = title;
  }

  async getTracksList() {
    const tvShowUrl =
        'https://www.tunefind.com/show/' + convertTitleToKey(this.title);
    const seasons = new Seasons(tvShowUrl);
    return seasons.get();
  }
}

module.exports = Scraper;
