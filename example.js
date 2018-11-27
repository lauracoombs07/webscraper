const puppeteer = require('puppeteer');
//const puppeteer = require('puppeteer-core');
//const url = process.argv[2];
// if (!url) {
//     throw "Please provide a URL as the first argument";
// } 
(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://www.nbcnews.com/');
  await page.pdf({path: 'screenshots/testfalse.pdf'});
  await page.setRequestInterception(false);
        page.on('request', request => {
        request.respond({
        status: 404,
        contentType: 'text/plain',
        body: 'Not Found!'
  });
});
  await browser.close();
})();

// async function run () {
//   const browser = await puppeteer.launch();
//   const page = await browser.newPage();
//   await page.goto(url);
//   await page.screenshot({path: 'screenshot.png'});
//   browser.close();
// }
// run();

