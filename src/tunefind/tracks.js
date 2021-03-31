/* eslint-disable no-await-in-loop */
const getDOMList = require('./helpers.js').getDOMList

class Tracks {
  constructor(episodeUrl) {
    this.episodeUrl = episodeUrl
  }

  async get() {
    const data = await getDOMList(this.episodeUrl, '.SongRow_center__3Vzso')
    const tracks = []
    for (let i = 0; i < data.length; i += 2) {
      tracks.push({
        title: await data[i].childNodes[0].firstChild.textContent,
        author: await data[i].childNodes[1].firstChild.textContent,
      })
    }
    return tracks
  }
}

module.exports = Tracks
