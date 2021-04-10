/* eslint-disable @typescript-eslint/explicit-function-return-type,
@typescript-eslint/no-var-requires */

const convertTitleToKey = require('./helpers.js').convertTitleToKey;
const getSeasons = require('./seasons.js').getSeasons;

class Scraper {
  constructor(title) {
    this.title = title;
  }

  async getTracksList() {
    const tvShowUrl =
        'https://www.tunefind.com/show/' + convertTitleToKey(this.title);
    return getSeasons(tvShowUrl);
  }
}

module.exports = Scraper;
