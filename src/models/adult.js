import { Person } from './';
// Base entity.
export class Adult extends Person {
	static entity = 'adult';
	static baseEntity = 'person';

  static fields () {
    return {
      id: this.attr(null),
			name: this.attr(''),
			foo: this.attr('bar'),
    }
  }
}

export default Adult;