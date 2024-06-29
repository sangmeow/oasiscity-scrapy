function getRandomInt(max: number) : number {
  return Math.floor(Math.random() * max);
}

const asyncFunction = (idx: number) => {
  return new Promise((resolve,reject) => {
    try{
      const time: number = getRandomInt(1000);
      console.log(`start asyncFunction-${idx}-${time}`);
      setTimeout(() => {
        const message = `asyncFunction-${idx}-${time}`;
        console.log(message);
        console.log(`end asyncFunction-${idx}-${time}`);
        resolve(message);
      }, time);
    } catch(e){
      reject(e);
    }
  });
}

export default asyncFunction;