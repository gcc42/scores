/* eslint-disable no-await-in-loop,
@typescript-eslint/explicit-function-return-type,
@typescript-eslint/no-var-requires */

const getDOMList = require('./helpers.js').getDOMList;
const Tracks = require('./tracks.js');

class Episodes {
  constructor(seasonUrl) {
    this.seasonUrl = seasonUrl;
  }

  async get() {
    const data =
        await getDOMList(this.seasonUrl, '.EpisodeListItem_title__1g7Tx');
    const episodes = [];
    for (let i = 0; i < data.length; i++) {
      const url = 'https://www.tunefind.com' + data[i].firstChild.href;
      const tracks = new Tracks(url);
      episodes.push({
        episode: i + 1,
        url: url,
        tracks: await tracks.get(),
      });
    }
    return episodes;
  }
}

module.exports = Episodes;
