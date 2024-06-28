import playwright from 'playwright';

async function scrapeData() {
  const browser = await playwright.chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto('https://example.com');
  const title = await page.textContent('h1');
  const description = await page.textContent('p');

  console.log('Title:', title);
  console.log('Description:', description);

  await browser.close();
}

scrapeData();