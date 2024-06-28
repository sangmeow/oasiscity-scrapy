import playwright from 'playwright';

async function scrapeData(url: string) {
  const browser = await playwright.chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto(url);
  const title = await page.textContent('h1');
  const description = await page.textContent('p');

  console.log('Title:', title);
  console.log('Description:', description);

  await browser.close();
}

const url: string = "https://www.coupang.com/np/categories/497135";
scrapeData(url);