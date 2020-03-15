<template>
  <div>
    <h1>event</h1>
    <EventCard
      v-for="(event, index) in events"
      :key="index"
      :event="event"
      :data-index="index"
    />
  </div>
</template>
<script>
import EventCard from '@/components/EventCard.vue'
export default {
  components: { EventCard },
  async asyncData({ $axios, error }) {
    // const response = await $axios.get('http://localhost:3001/events')
    // return {
    //   events: response.data
    // }
    // es6 destructuring
    try {
      const { data } = await $axios.get('http://localhost:3001/events')
      return {
        events: data
      }
    } catch (e) {
      error({
        status: 503,
        message: 'Unable to fetch events'
      })
    }
  },
  head() {
    return {
      title: 'Event listing events'
    }
  }
}
</script>
