let getDOMList = require('./helpers.js').getDOMList;
let Tracks = require('./Tracks.js');

class Episodes {
    constructor(seasonUrl) {
      this.seasonUrl = seasonUrl;
    }
    async get() {
        let data = await getDOMList(this.seasonUrl, '.EpisodeListItem__title___32XUR');
        let episodes = [];
        for (let i = 0; i < data.length; i++) {
            let url = 'https://www.tunefind.com' + data[i].firstChild.href;
            let tracks = new Tracks(url);
            episodes.push({
                episode: i + 1,
                url: url,
                tracks: await tracks.get()
            });
        }
        return episodes;
    }
}

module.exports = Episodes;