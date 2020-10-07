<template>
  <div class="v-binance-data">
    <div class="row__head">
      <div class="row__head__first">
        <div class="col">
          <h3>Bids</h3>
        </div>
        <div class="col">
          <h3>Asks</h3>
        </div>
      </div>
      <div class="row__head__second">
        <div class="col">
          <h4>Price</h4>
        </div>
        <div class="col">
          <h4>Amount</h4>
        </div>
        <div class="col"
             v-if="is_desktop"
        >
          <h4>Total</h4>
        </div>
        <div class="col">
          <h4>Price</h4>
        </div>
        <div class="col">
          <h4>Amount</h4>
        </div>
        <div class="col"
             v-if="is_desktop"
        >
          <h4>Total</h4>
        </div>
      </div>
    </div>
    <div class="row__main">
      <div class="col bids">
        <div class="row">
          <div class="col">
            <div class="items"
              v-for="item in product_data_bids"
             :key="product_data_bids[item]"
            >
              {{ Math.floor(Number(item[0]) * 1000000) / 1000000 }}
            </div>
          </div>
          <div class="col">
            <div class="items"
                 v-for="item in product_data_bids"
                 :key="product_data_bids[item]"
            >
              {{ Math.floor(Number(item[1]) * 1000000) / 1000000 }}
            </div>
          </div>
          <div class="col">
            <div class="items"
                v-for="item in product_data_bids"
               :key="product_data_bids[item]"
                 v-if="is_desktop"
            >
              {{ Math.floor(Number(item[0] * item[1]) * 1000000) / 1000000 }}
            </div>
          </div>
        </div>
      </div>

      <div class="col asks">
        <div class="row">
          <div class="col">
            <div class="items"
                 v-for="item in product_data_asks"
                 :key="product_data_asks[item]"
            >
              {{ Math.floor(Number(item[0]) * 1000000) / 1000000 }}
            </div>
          </div>
          <div class="col">
            <div class="items"
                 v-for="item in product_data_asks"
                 :key="product_data_asks[item]"
            >
              {{ Math.floor(Number(item[1]) * 1000000) / 1000000 }}
            </div>
          </div>
          <div class="col">
            <div class="items"
                 v-for="item in product_data_bids"
                 :key="product_data_bids[item]"
                 v-if="is_desktop"
            >
              {{ Math.floor(Number(item[0] * item[1]) * 1000000) / 1000000 }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "v-binance-data",
  props: {
    product_data_asks: {
      type: Array,
      default() {
        return {}
      }
    },
    product_data_bids: {
      type: Array,
      default() {
        return {};
      }
    },
    is_desktop: {
      type: Boolean,
      default() {
        return true
      }
    }
  }
}
</script>

<style>
</style>
