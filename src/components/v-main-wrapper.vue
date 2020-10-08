<template>
  <div class="v-main-wrapper">
    <div class="row">
      <div class="col-8 menu">
        <h1>Binance translation</h1>
      </div>
      <div class="col menu">
        <v-select
            :selected="selected"
            :options="URLS"
            @select="selector"
        />
      </div>
    </div>
    <div class="body">
      <v-binance-data
        :product_data_asks="PRODUCTS_ASKS"
        :product_data_bids="PRODUCTS_BIDS"
        :is_desktop="IS_DESKTOP"
      />
    </div>
  </div>
</template>

<script>
import vBinanceData from './v-binance-data'
import { mapActions, mapGetters } from 'vuex'
import vSelect from './v-select'

export default {
  name: "v-main-wrapper",
  components: {
    vBinanceData,
    vSelect
  },
  data() {
    return {
      selected: 'BTCUSDT',
    }
  },
  computed: {
    ...mapGetters([
      'PRODUCTS_ASKS',
      'PRODUCTS_BIDS',
      'URLS',
      'CURRENT_URL',
      'IS_MOBILE',
      'IS_DESKTOP'
    ]),
  },
  methods: {
    ...mapActions([
      'GET_PRODUCTS_FROM_API',
      'SET_REQUEST',
      'SET_MOBILE',
      'SET_DESKTOP'
    ]),
    selector(option) {
      this.SET_REQUEST(option)
      this.selected = option.name
    },
    getCounter () {
      this.GET_PRODUCTS_FROM_API(this.CURRENT_URL)
        .then((responde) => {
          if (responde.data) {
            console.log( 'data in a vue component ' )
          }
        })
    },
    stopTimer () {
      if (this.interval) {
        window.clearInterval(this.interval)
      }
    },
    startTimer () {
      this.stopTimer()
      this.interval = window.setInterval(() => {
        this.getCounter()
      }, 3000)
    }
  },

  mounted() {
    let vm = this;
    window.addEventListener('resize', function () {
      if (window.innerWidth > 767) {
        vm.SET_DESKTOP()
      } else {
        vm.SET_MOBILE()
      }
    })

    this.GET_PRODUCTS_FROM_API(this.CURRENT_URL)
      .then((responde) => {
        if (responde.data) {
          console.log( 'data in a vue component' )
        }
      })
    this.startTimer()
  },
  beforeDestroy() {
    this.stopTimer()
  }
}
</script>

<style>
</style>
