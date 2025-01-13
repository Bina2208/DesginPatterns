// Implementation example of the Facade Pattern
class SubsystemA {
    operationA() {
      console.log("Subsystem A operation.");
    }
  }
  
  class SubsystemB {
    operationB() {
      console.log("Subsystem B operation.");
    }
  }
  
  class Facade {
    constructor() {
      this.subsystemA = new SubsystemA();
      this.subsystemB = new SubsystemB();
    }
  
    operation() {
      this.subsystemA.operationA();
      this.subsystemB.operationB();
    }
  }
  
  const facade = new Facade();
  facade.operation(); // Output: "Subsystem A operation." "Subsystem B operation."