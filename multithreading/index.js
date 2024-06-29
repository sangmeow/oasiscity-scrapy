"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const worker_threads_1 = require("worker_threads");
const data_json_1 = __importDefault(require("./data.json"));
let dataList = data_json_1.default;
const chunkFile = (data, size) => {
    const chunkedArr = [];
    for (let i = 0; i < data.length; i += size) {
        const chunk = data.slice(i, i + size);
        chunkedArr.push(chunk);
    }
    return chunkedArr;
};
if (worker_threads_1.isMainThread) {
    const chunkedData = chunkFile(dataList, 10);
    chunkedData.forEach((chunk, index) => {
        const worker = new worker_threads_1.Worker('./worker.js');
        worker.postMessage({ chunk, index });
        worker.on('message', (message) => {
            console.log(message); // Prints: Hello, world!
        });
        worker.on('error', (error) => {
            console.error(error);
        });
        worker.on('exit', (code) => {
            if (code !== 0) {
                console.error(new Error(`Worker stopped with exit code ${code}`));
            }
        });
    });
}
else {
    console.log('end without error');
}
