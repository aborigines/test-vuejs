<template>
<div id="main">
      <div class="col-md-12">
      <Store />
    <p>
      <button @click="getApiText">getApiText</button>
    </p>
      </div>
  </div>
</template>

<script>
import Store from './Store'
import Api from './../Api'

export default {
  name: 'Content',
  components: {
    Store
  },
  data () {
    return {
      msg: 'สัวสดี Test Component'
    }
  },
  methods: {
    getApiText () {
      Api.xyz()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
