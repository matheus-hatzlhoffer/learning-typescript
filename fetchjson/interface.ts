/* eslint-disable class-methods-use-this */
interface Vehicle {
  name: string;
  year: number;
  broken: boolean;
}

const oldCivic = {
  name: 'civic',
  year: 2000,
  broken: true,
};

const printVehicle = (vehicle: Vehicle): void => {
  console.log(`Nome : ${vehicle.name}`);
  console.log(`Ano : ${vehicle.year}`);
  console.log(`Está quebrado? : ${vehicle.broken}`);
};

printVehicle(oldCivic);

class Car {
  constructor(public document: string) {}

  public getDocument(): string {
    return this.document;
  }

  public honk(): void {
    console.log('BEEEEEEEEE');
  }
}

const car = new Car('secret');
car.honk();
console.log(car.getDocument());
