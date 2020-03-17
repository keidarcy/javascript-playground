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
import { formFieldMixin } from '../mixins/formFiledMixin.js'
export default {
  mixins: [formFieldMixin],
  props: {
    options: {
      type: Array,
      required: true
    }
  }
}
</script>
