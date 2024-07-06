
console.log('Functional Programming in TypeScript - Monad 1');
const box: number[] = [2];
const mapResult = box
  .map((x) => x + 3)
  .map((x) => x * 4)
  .map((x) => x / 5);
console.log(mapResult); // [4]

console.log('Functional Programming in TypeScript - Monad 2');
const box2: number[] = [2];
const mapResult2 = box2
  .map((x) => x + 3)
  .flatMap((x) => [x * 4, x ** 4])
  .map((x) => x / 5);
console.log(mapResult2); // [4,125]

console.log('Functional Programming in TypeScript - Monad Maybe 1');
// let x: number = 2;
//   x += 4;
//   x /= y; //. Error: y is not defined or 0
//   x *= 2;
// console.log(x);

import { Maybe } from './Maybe';
const safeDivivde = (x: number, y: number): Maybe<number | null> => {
  if (y === 0) {
    return Maybe.nothing();
  }
  return Maybe.just(x / y);
};
console.log(safeDivivde(4, 2).getOrElse(0)); // 2

const result = Maybe.just(2)
  .flatMap((x: number) => safeDivivde(x, 2))
  .flatMap((x: number) => safeDivivde(x, 0))
  .flatMap((x: number) => safeDivivde(x, 2))
  .getOrElse(0);
console.log(result); // 0