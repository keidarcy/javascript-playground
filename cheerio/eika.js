const $ = require('cheerio');
// const cheerio = require('cheerio');
const axios = require('axios');

const url = 'https://eiga.com/now/all/rank/';

const titles_arr = [];

const linkStart = async () => {
  const html = await axios.get(url);
  // const $ = await cheerio.load(html.data);
  $('.title', html.data).each((i, elem) => {
    titles_arr[i] = $(elem).text();
  });
  console.log(titles_arr);
};
linkStart();
