import { Person } from './';

// Sub entity.
export class Child extends Person {
	static entity = 'child';
	static baseEntity = 'person';

  static fields () {
    return {
      id: this.attr(null),
			name: this.attr(''),
			bar: this.attr('foo'),
    }
  }
}

export default Child;