class Singleton {
  private static instance: Singleton;
  private static lock: boolean = false;

  // Private constructor to prevent direct class instantiation
  private constructor() {
      // Initialization code here
  }

  // Static method to get the single instance of the class
  public static getInstance(): Singleton {
      if (!Singleton.instance) {
          if (!Singleton.lock) {
              Singleton.lock = true;
              Singleton.instance = new Singleton();
              Singleton.lock = false;
          }
      }
      return Singleton.instance;
  }

  // Example method for the singleton class
  public someMethod(): void {
      console.log("Singleton method called");
  }
}

// Usage example
const singleton1 = Singleton.getInstance();
const singleton2 = Singleton.getInstance();

singleton1.someMethod();

console.log(singleton1 === singleton2); // true, both are the same instance
