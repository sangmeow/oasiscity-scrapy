export class Singleton {
  private static instance: Singleton;
  
  private constructor() {
    // Private constructor to prevent instantiation from outside the class
  }
  
  public static getInstance(): Singleton {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }
    
    return Singleton.instance;
  }
  
  public data: any[] = [];
}