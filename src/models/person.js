import { Model } from '@vuex-orm/core';
import { Child, Adult } from './';
// Base entity.
export class Person extends Model {
	static entity = 'person'
	
	static types () {
    return {
      person: Person,
			adult: Adult,
			child: Child,
    }
  }

  static fields () {
    return {
      id: this.attr(null),
			name: this.attr(''),
			type: this.attr('person'),
    }
  }
}

export default Person;