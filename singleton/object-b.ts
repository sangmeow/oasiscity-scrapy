import { Singleton } from './singleton';

let b: any = Singleton.getInstance();

export const doActionB = (data: string[]):void => {
  data.forEach((item) => {
    b.data.push(item);
  });
}
