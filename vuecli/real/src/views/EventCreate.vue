<template>
  <div>
    <h1>Create an Event, {{ $store.state.user.name }}</h1>
    <form @submit.prevent="createEvent">
      <BaseSelect lable="Select a category" :options="categories" v-model="event.category" />
      <h3>Name & describe your event</h3>
      <BaseInput label="Tisssssle" v-model="event.title" laceholder="Title" />
      <BaseInput label="Description" v-model="event.description" placeholder="Description" />
      <BaseInput label="Location" v-model="event.location" placeholder="Location" />
      <h3>When is your event?</h3>
      <BaseSelect lable="Select a time" :options="times" v-model="event.time" />
      <BaseButton type="submit" cool="cool" buttonClass="button -fill-gradient" >submit</BaseButton>
    </form>
  </div>
</template>

<script>
import { datepicker } from 'vuejs-datepicker'
export default {
  components: {
    datepicker
  },
  data() {
    const times = []
    for (let i = 1; i <= 24; i++) {
      times.push(i + ':00')
    }
    return {
      event: this.createFreshEvent(),
      times,
      categories: this.$store.state.categories
    }
  },
  methods: {
    createEvent() {
      this.$store
        .dispatch('event/createEvent', this.event)
        .then(() => {
          this.$router.push({
            name: 'event-show',
            params: { id: this.event.id }
          })
          this.event = this.createFreshEventObject()
        })
        .catch(() => console.log('EEEROR'))
    },
    createFreshEvent() {
      const user = this.$store.state.user.user
      return {
        category: '',
        organizer: user,
        title: '',
        description: '',
        location: '',
        date: '',
        time: '',
        attendees: []
      }
    }
  }
}
</script>

<style scoped>
.feild {
  margin-bottom: 24px;
}
</style>
