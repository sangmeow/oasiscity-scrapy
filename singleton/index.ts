import { Singleton } from './singleton';
import { doActionA } from './object-a';
import { doActionB } from './object-b';

const main = () => {
  let c: any = Singleton.getInstance();
  
  doActionA(['a1', 'a2']);
  doActionB(['b1', 'b2']);

  console.log(c.data);
};

if (require.main === module) main();