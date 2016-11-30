import Vue from 'vue'

export default {
  xyz: function () {
    Vue.axios.get('//api.icndb.com/jokes/random').then((response) => {
      console.log(response.data)
    })
  }
}
