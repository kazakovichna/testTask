import axios from 'axios'

export default {
  GET_PRODUCTS_FROM_API ({commit}, current_url) {
    return axios(current_url, {
      method: 'GET'
    })
      .then((products) => {
        commit('SET_PRODUCTS_TO_STATE', products.data)
        console.log('we got it');
        return products
      })
      .catch((error) => {
        console.log(error)
        return error
      })
  }
}
