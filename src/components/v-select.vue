<template>
 <div class="v-select">
   <div class="option"
      @click="areOptionVisible = !areOptionVisible"
   >
     <h4>{{selected}}</h4>
   </div>
   <div class="option"
        v-if="areOptionVisible"
   >
     <p
        v-for="option in options"
        :key="options.id"
        @click="selectOption(option)"
     >{{option.name}}</p>
   </div>
 </div>
</template>

<script>
export default {
  name: "v-select",
  data() {
    return {
      areOptionVisible: false
    }
  },
  props: {
    options: {
      type: Array,
      default() {
        return {}
      }
    },
    selected: {
      type: String,
      default: ''
    }
  },
  methods: {
    selectOption (option) {
      this.$emit('select', option)
      this.areOptionVisible = false
    }
  }
}
</script>

<style>
</style>
