import { parentPort } from 'worker_threads';

type message = {
  chunk: string[];
  index: number;
}

async function worker() {
  if(parentPort) {
    parentPort?.on('message', (message: message) => {
      const a = message.chunk.join('-');
      parentPort?.postMessage(`message - ${message.index} [${a}]`);
      parentPort?.close();
    });
  };
}

worker();