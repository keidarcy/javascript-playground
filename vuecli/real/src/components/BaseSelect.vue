<template>
  <div>
    <label v-if="label">{{ label }}</label>
    <select
      v-on="$listeners"
      type="text"
      :value="value"
      @input="updateValue"
      v-bind="$attrs"
    >
      <option
        v-for="option in options"
        :selected="option === value"
        :key="option"
        >{{ option }}</option
      >
    </select>
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    options: {
      type: Array,
      required: true
    },
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
