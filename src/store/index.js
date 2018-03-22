import Vuex from 'vuex'
import Vue from 'vue'
import List from './modules/list.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    List
  }
})
