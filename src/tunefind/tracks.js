/* eslint-disable no-await-in-loop,
@typescript-eslint/explicit-function-return-type */

const getDOMList = require('./helpers.js').getDOMList;

async function getTracks(episodeUrl) {
  const data = await getDOMList(episodeUrl, '.SongRow_center__3Vzso');
  const tracks = [];
  for (let i = 0; i < data.length; i += 2) {
    tracks.push({
      title: await data[i].childNodes[0].firstChild.textContent,
      artist: await data[i].childNodes[1].firstChild.textContent,
    });
  }
  return tracks;
}

module.exports = {getTracks: getTracks};
