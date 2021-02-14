let getDOMList = require('./helpers.js').getDOMList;
let Episodes = require('./Episodes.js');

class Seasons {
    constructor(tvShowUrl) {
      this.tvShowUrl = tvShowUrl;
    }
    async get() {
        let data = await getDOMList(this.tvShowUrl, '.EpisodeListItem__title___32XUR');
        let seasons = [];
        for (let i = 0; i < data.length; i++) {
            console.log('season ' + String(i + 1));
            let url = this.tvShowUrl + '/season-' + String(i + 1);
            let episodes = new Episodes(url);
            seasons.push({
                season: i + 1,
                url: url,
                episodes: await episodes.get()
            });
        }
        return seasons;
    }
}

module.exports = Seasons;