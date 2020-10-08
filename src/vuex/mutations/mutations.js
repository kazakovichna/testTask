export default {
  SET_PRODUCTS_TO_STATE: (state, products) => {
    state.products.asks = products.asks;
    state.products.bids = products.bids;
  },
  SET_CURRENT_URL: (state, option) => {
    state.current_url = option.url;
  },
  SWITCH_MOBILE: (state) => {
    state.isMobile = true
    state.isDesktop = false
  },
  SWITCH_DESKTOP: (state) => {
    state.isMobile = false
    state.isDesktop = true
  }
}
