<template>
  <form @submit.prevent="submit">
    <input
      @blur="$v.email.$touch()"
      type="email"
      placeholder="What's your email"
      v-model="email"
      :class="{ error: $v.email.$error }"
    />
    <p v-if="!$v.email.email" class="errorMessage">
      Please enter a valid email address.
    </p>
    <p v-if="!$v.email.required" class="errorMessage">Email is required.</p>
    <button :disabled="$v.$invalid" type="submit">Submit!</button>
    <p v-if="$v.$anyError" class="errorMessage">
      Please fill out the required fields
    </p>
  </form>
</template>

<script>
import { required, email } from 'vuelidate/lib/validators'

export default {
  data() {
    return {
      email: null
    }
  },
  validations: {
    email: {
      required,
      email
    }
  },
  methods: {
    submit() {
      this.$v.$touch()
      if (!this.$v.$invalid) {
        console.log('Form Submission:', this.email)
      }
    }
  }
}
</script>
