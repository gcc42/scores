/* eslint-disable no-await-in-loop,
@typescript-eslint/explicit-function-return-type,
@typescript-eslint/no-var-requires */

const getDOMList = require('./helpers.js').getDOMList;
const getTracks = require('./tracks.js').getTracks;

async function getEpisodes(seasonUrl) {
  const data =
      await getDOMList(seasonUrl, '.EpisodeListItem_title__1g7Tx');
  const episodes = [];
  for (let i = 0; i < data.length; i++) {
    const url = 'https://www.tunefind.com' + data[i].firstChild.href;
    episodes.push({
      episode: i + 1,
      url: url,
      tracks: await getTracks(url),
    });
  }
  return episodes;
};

module.exports = { getEpisodes: getEpisodes };
