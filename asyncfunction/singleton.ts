export class Singleton {
  private static instance: Singleton;
  private static lock: boolean = false;
  
  private constructor() {
    // Private constructor to prevent instantiation from outside the class
  }
  
  public static getInstance(): Singleton {
    if (!Singleton.instance) {
      // thread safe
      if (!Singleton.lock) {
        Singleton.lock = true;
        Singleton.instance = new Singleton();
        Singleton.lock = false;
      }
    }
    
    return Singleton.instance;
  }
  
  public data: any[] = [];
}