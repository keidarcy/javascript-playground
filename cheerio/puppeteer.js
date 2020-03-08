const puppeteer = require('puppeteer-core');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://space.bilibili.com/883724/video');
  await page.screenshot({ path: 'example.png' });

  await browser.close();
})();
