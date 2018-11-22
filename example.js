const puppeteer = require('puppeteer');
//const puppeteer = require('puppeteer-core');
 
(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://google.com');
  await page.screenshot({path: 'screenshots/google3.png', fullPage: true});
 
  await browser.close();
})();