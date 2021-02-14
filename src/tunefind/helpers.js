const got = require('got');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

function convertTitleToKey(title) {
    return title.toLowerCase().split(' ').join('-');
}

async function getDOMList(url, className) {
    let response = await got(url);
    let dom = new JSDOM(response.body);
    return dom.window.document.querySelectorAll(className);
}

module.exports = {
    convertTitleToKey: convertTitleToKey,
    getDOMList: getDOMList
}