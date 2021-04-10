/* eslint-disable no-await-in-loop,
@typescript-eslint/explicit-function-return-type,
@typescript-eslint/no-var-requires */

const getDOMList = require('./helpers.js').getDOMList;
const getEpisodes = require('./episodes.js').getEpisodes;

async function getSeasons(tvShowUrl) {
  const data =
      await getDOMList(tvShowUrl, '.EpisodeListItem_title__1g7Tx');
  const seasons = [];
  for (let i = 0; i < data.length; i++) {
    //   console.log('season ' + String(i + 1))
    const url = tvShowUrl + '/season-' + String(i + 1);
    seasons.push({
      season: i + 1,
      url: url,
      episodes: await getEpisodes(url),
    });
  }
  return seasons;
}

module.exports = { getSeasons: getSeasons };
