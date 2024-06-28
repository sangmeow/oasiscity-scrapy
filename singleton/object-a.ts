import { Singleton } from './singleton';

let a: any = Singleton.getInstance();

export const doActionA = (data: string[]):void => {
  data.forEach((item) => {
    a.data.push(item);
  });
}
