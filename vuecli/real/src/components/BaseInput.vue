<template>
  <div>
    <label v-if="label">{{ label }}</label>
    <input
      type="text"
      class="field"
      :value="value"
      @input="updateValue"
      v-bind="$attrs"
    />
  </div>
</template>

<script>
import { formFieldMixin } from '../mixins/formFiledMixin.js'
export default {
  mixins: [formFieldMixin],
  computed: {
    listeners() {
      return {
        ...this.$listeners,
        input: this.updateValue
      }
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
