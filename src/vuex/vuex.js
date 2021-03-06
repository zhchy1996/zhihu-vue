import Vue from 'vue';
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    newsId: '',
    date: '',
    lastData: '',
    today: ''
  },
  mutations: {
    changeId(state, id) {
      state.newsId = id;
    },
    changeDate(state, date) {
      state.date = date;
    },
    setLastData(state, date) {
      state.lastData = date;
    },
    setToday(state, date) {
      state.today = date
    }
  },

})
