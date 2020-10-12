import Vue from 'vue';
import Vuex from 'vuex';
import VuexORM from '@vuex-orm/core';
import { Database } from '@vuex-orm/core';
import { Person, Adult, Child } from '../models';

const database = new Database();

database.register(Person);
database.register(Adult);
database.register(Child);

Vue.use(Vuex);

const store = new Vuex.Store({
  strict: true,
  plugins: [VuexORM.install(database)],
});

export default store;