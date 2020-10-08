export default {
  PRODUCTS_ASKS (state) {
    return state.products.asks;
  },
  PRODUCTS_BIDS (state) {
    return state.products.bids;
  },
  URLS(state) {
    return state.urls
  },
  CURRENT_URL(state) {
    return state.current_url
  },
  IS_MOBILE(state) {
    return state.isMobile;
  },
  IS_DESKTOP(state) {
    return state.isDesktop;
  }
}
