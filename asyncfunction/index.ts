// Add the file extension to the module path
import asyncFunction from './function';
import { Singleton } from './singleton';

const dataList = Singleton.getInstance();

const main = async() => {
  console.log('main start');
  await asyncFunction(0);
  console.log('main end');

  let arr: object[] = [];
  for(let i = 0; i < 20; i++){
    arr.push(asyncFunction(i));
  }
  
  Promise.allSettled(arr).then((results) => {
    results.forEach((result) => {
      if(result.status === 'fulfilled'){
        dataList.data.push(result.value);
      } else {
        console.log(result.reason);
        // throw new Error(result.reason);
      }
    });
    console.log(dataList.data);
  });

}

main();