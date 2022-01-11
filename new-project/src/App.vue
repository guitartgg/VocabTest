<template>
  <div id="app">
  <app-header/>
  <!-- <slot></slot> -->
  <div v-if="!!awesome">
    Welcome!
    <div>
      <button @click="begin">
        Start
      </button>
    </div>
  </div>
  <div v-if="!awesome">
    Components
  </div>
  <app-footer/>
  </div>
</template>

<script>
import AppHeader from '../src/components/AppHeader'
import AppFooter from '../src/components/AppFooter'
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    AppHeader,
    AppFooter
  },
  props:{
    awesome: {
      type: Boolean,
      default: true
    }
  }, 
  methods: {
    begin() {
      this.awesome=!this.awesome
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
