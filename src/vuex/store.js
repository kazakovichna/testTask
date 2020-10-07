import Vue from 'vue'
import Vuex from 'vuex'

import mutations from './mutations/mutations'
import getters from './getters/getters'
import api_request from './actions/api-request'
import commonAction from './actions/commonAction'

let actions = {...api_request, ...commonAction};

Vue.use(Vuex);

let store = new Vuex.Store({
  state: {
    products: [],
    urls: [
      {id: 0, url: 'http://www.binance.com/api/v1/depth?symbol=BTCUSDT&limit=500', name: 'BTCUSDT'},
      {id: 1, url: 'http://www.binance.com/api/v1/depth?symbol=BNBBTC&limit=500', name: 'BNBBTC'},
      {id: 2, url: 'http://www.binance.com/api/v1/depth?symbol=ETHBTC&limit=500', name: 'ETHBTC'}
    ],
    current_url: 'http://www.binance.com/api/v1/depth?symbol=BTCUSDT&limit=500',
    isMobile: false,
    isDesktop: true
    /*socket: {
      isConnected: false,
      message: '',
      reconnectError: false
    }*/
  },
  mutations,
  actions,
  getters
});

export default store
