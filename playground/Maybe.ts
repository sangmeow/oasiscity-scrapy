export class Maybe<T> {
  private value: T;

  constructor(value: T) {
    this.value = value;
  }

  // Unit (or Return)
  static just<U>(value: U) {
    return new Maybe(value);
  }

  // Unit (or Return)
  static nothing() {
    return new Maybe(null);
  }
  
  isNothing() {
    return this.value === null || this.value === undefined;
  }

  // Functor
  map(fn: Function) {
    if (this.isNothing()) {
      return Maybe.nothing();
    }
    return Maybe.just(fn(this.value));
  }

  // Bind (or FlatMap)
  flatMap(fn: Function) {
    if (this.isNothing()) {
      return Maybe.nothing();
    }
    return fn(this.value);
  }

  getOrElse(defaultValue: any) {
    if (this.isNothing()) {
      return defaultValue;
    }
    return this.value;
  }
}