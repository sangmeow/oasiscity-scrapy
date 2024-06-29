import { Worker, isMainThread } from 'worker_threads';

import file from './data.json';

let dataList: string[] = file;

const chunkFile = (data: string[], size: number) => {
  const chunkedArr = [];
  for (let i = 0; i < data.length; i += size) {
    const chunk = data.slice(i, i + size);
    chunkedArr.push(chunk);
  }
  return chunkedArr;
};

if(isMainThread) {

  const chunkedData = chunkFile(dataList, 10);

  chunkedData.forEach((chunk, index) => {
    const worker = new Worker('./worker.js');
    worker.postMessage({chunk, index});
    worker.on('message', (message) => {
      console.log(message); // Prints: Hello, world!
    });
    worker.on('error', (error) => {
      console.error(error);
    });
    worker.on('exit', (code) => {
      if(code !== 0) {
        console.error(new Error(`Worker stopped with exit code ${code}`));
      }
    });
  });

  
} else {
  console.log('end without error')
}