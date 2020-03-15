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
import { mapState } from 'vuex'
import EventCard from '@/components/EventCard.vue'
export default {
  components: { EventCard },
  async fetch({ store, error }) {
    try {
      await store.dispatch('events/fetchEvents')
    } catch (e) {
      error({
        status: 503,
        message: 'Unable to fetch events'
      })
    }
  },
  computed: mapState({
    events: (state) => state.events.events
  }),
  head() {
    return {
      title: 'Event listing events'
    }
  }
}
</script>
