// import Vue from 'vue'
import axios from 'axios'
import { HOME_BANNER, NEWS_LIST } from '../../axiosApi/Index'

const state = {
  newsList: {data: []},
  sliderList: [],
  params: {}
}

const getters = {
  getNewsList: state => state.newsList,
  getSliderList: state => state.sliderList
}

const actions = {
  fetchList ({ commit, state }) {
    axios.get(HOME_BANNER)
      .then((response) => {
        // 存储数据
        commit('resetBannerList', response.data.data.pc_feed_focus)
      })
      .catch(function (error) {
        console.log(error)
      })
  },
  loadNewsList ({ commit, state }) {
    axios.get(NEWS_LIST, {params: state.params})
      .then((response) => {
        // 存储数据
        commit('resetNewsList', response.data)
      })
      .catch(function (error) {
        console.log(error)
      })
  }
}

// 同步 commit调用
const mutations = {
  resetBannerList (state, sliderList) {
    state.sliderList = sliderList
  },
  resetNewsList (state, newsList) {
    state.newsList = {
      data: state.newsList.data.concat(newsList.data),
      has_more: newsList.has_more,
      message: newsList.message
    }
    console.log(state)
  },
  changeParams (state, params) {
    state.params = params
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
