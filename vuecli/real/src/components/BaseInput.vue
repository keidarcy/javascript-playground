<template>
    <div>
      <label v-if="label">{{ label }}</label>
      <input type="text" class="field" :value="value" @input="updateValue" v-bind="$attrs">
    </div>
</template>
    
<script>
export default {
  inheritAttrs: false,
  props: {
    label: {
      type: String,
      default: ''
    },
    value: [String, Number]
  },
  methods: {
    updateValue() {
      this.$emit('input', event.target.value)
    }
  }
}
</script>
    
<style scoped>
.icon-wrapper {
  display: inline-flex;
  align-items: center;
  color: rgba(0, 0, 0, 0.4);
  font-size: 1rem;
  font-weight: 600;
}
.icon {
  stroke: currentColor;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
  fill: none;
  margin-right: 6px;
}
</style>
