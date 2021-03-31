/* eslint-disable no-await-in-loop */

const getDOMList = require('./helpers.js').getDOMList
const Episodes = require('./episodes.js')

class Seasons {
  constructor(tvShowUrl) {
    this.tvShowUrl = tvShowUrl
  }

  async get() {
    const data = await getDOMList(this.tvShowUrl, '.EpisodeListItem_title__1g7Tx')
    const seasons = []
    for (let i = 0; i < data.length; i++) {
    //   console.log('season ' + String(i + 1))
      const url = this.tvShowUrl + '/season-' + String(i + 1)
      const episodes = new Episodes(url)
      seasons.push({
        season: i + 1,
        url: url,
        episodes: await episodes.get(),
      })
    }
    return seasons
  }
}

module.exports = Seasons
