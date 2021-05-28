import faker from 'faker';
import { Mappable } from './CustomMap';

export class Company implements Mappable {
  company_name: string;
  catch_phrase: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.company_name = faker.company.companyName();
    this.catch_phrase = faker.company.catchPhrase();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }

  markerContent(): string {
    return `
		<div>
	 		<h1>Company: ${this.company_name}</h1>
			<h3>Catchphrase: ${this.catch_phrase}</h3>
		</div> 
	  `;
  }
}
