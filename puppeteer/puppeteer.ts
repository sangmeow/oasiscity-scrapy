import puppeteer from 'puppeteer';

async function scrapeData(url: string): Promise<void> {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto(url);
  const title = await page.$eval('h1', (el) => el.textContent);
  const description = await page.$eval('p', (el) => el.textContent);

  console.log('Title:', title);
  console.log('Description:', description);

  await browser.close();
}

scrapeData('https://example.com');
