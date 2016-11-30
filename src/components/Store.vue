<template>
  <div class="Store">
    <p> Store Incremet , Decrement </p>
    <p>{{ $store.state.count }}</p>
    <p>
      <button @click="increment">+</button>
      <button @click="decrement">-</button>
    </p>
    <hr>
  </div>
</template>

<script>
export default {
  name: 'Store',
  data () {
    return {
      msg: 'สัวสดี Store Component'
    }
  },
  methods: {
    increment () {
      this.$store.commit('increment')
    },
    decrement () {
      this.$store.commit('decrement')
    }
  }
}
</script>