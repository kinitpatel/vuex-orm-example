<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import { Person, Adult, Child } from './models';

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  async created() {
    await Person.insert({
      data: {
        id: 'poe',
        name: 'Poe',
        type: 'adult',
      }
    });

    await Adult.insert({
      data: {
        id: 'addy',
        name: 'Addy',
      }
    })

    await Child.insert({
      data: {
        id: 'chad',
        name: 'Chad',
      }
    });

    const persons = await Person.all();

    console.log('persons', persons);
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
