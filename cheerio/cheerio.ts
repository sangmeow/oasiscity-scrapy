import axios from 'axios';
import cheerio from 'cheerio';

async function scrapeData(url: string): Promise<void> {
  try {
    const response = await axios.get(url);
    const $ = cheerio.load(response.data);

    // Use Cheerio selectors to extract data from the HTML
    const title = $('h1').text();
    const description = $('p').text();

    // Do something with the scraped data
    console.log('Title:', title);
    console.log('Description:', description);
  } catch (error) {
    console.error('Error:', error);
  }
}

// Usage example
const targetUrl = 'https://example.com';
scrapeData(targetUrl);