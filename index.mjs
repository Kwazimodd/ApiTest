import { faker as _faker } from '@faker-js/faker';

console.log(_faker.person.firstName('female'));
console.log(_faker.internet.username({firstName: 'John', lastName: 'Doe'}));