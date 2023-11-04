interface Computer {
    ram: number; // GB
    hdd: number; // GB
    cpu: number; // GHz
    type: string;
    toString(): string;
  }
  
  class PC implements Computer {
    constructor(public ram: number, public hdd: number, public cpu: number) {
      this.type = 'PC';
    }
  
    toString(): string {
      return `Type: ${this.type}, RAM: ${this.ram} GB, HDD: ${this.hdd} GB, CPU: ${this.cpu} GHz`;
    }
  }
  
  class Server implements Computer {
    constructor(public ram: number, public hdd: number, public cpu: number) {
      this.type = 'Server';
    }
  
    toString(): string {
      return `Type: ${this.type}, RAM: ${this.ram} GB, HDD: ${this.hdd} GB, CPU: ${this.cpu} GHz`;
    }
  }
  
  interface ComputerFactory {
    createComputer(ram: number, hdd: number, cpu: number): Computer;
  }
  
  class PCFactory implements ComputerFactory {
    createComputer(ram: number, hdd: number, cpu: number): Computer {
      return new PC(ram, hdd, cpu);
    }
  }
  
  class ServerFactory implements ComputerFactory {
    createComputer(ram: number, hdd: number, cpu: number): Computer {
      return new Server(ram, hdd, cpu);
    }
  }
  
  // Exemplo de uso:
  function createAndShowComputer(factory: ComputerFactory, ram: number, hdd: number, cpu: number) {
    const computer = factory.createComputer(ram, hdd, cpu);
    console.log(computer.toString());
  }
  
  const pcFactory = new PCFactory();
  const serverFactory = new ServerFactory();
  
  createAndShowComputer(pcFactory, 8, 512, 3.2);
  createAndShowComputer(serverFactory, 32, 1024, 2.4);
  