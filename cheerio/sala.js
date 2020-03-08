const axios = require('axios');
const cheerio = require('cheerio');
// const $ = require('cheerio');

const list = [];
const lists = [];
const item = {};

const showLastest = async num => {
  const url = `https://www.green-japan.com/search_key/01?keyword=php&page=${num}`;
  const html = await axios.get(url);
  const $ = await cheerio.load(html.data);
  // const text = $('a.title').html();
  $('.card-info__detail-area__box__title').each((i, elem) => {
    list[i] = {
      company: $(elem).text()
    };
  });
  $('ul.job-offer-meta-tags li:first-child').each((i, elem) => {
    list[i].salary = $(elem)
      .text()
      .trim();
  });
  lists.push(list);
  console.log(list);
};

[...Array(10).keys()].forEach(i => {
  showLastest(i);
  console.log(i);
});

console.log(lists);
