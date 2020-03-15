<template>
  <div>
    <h1>{{ event.title }}</h1>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  async fetch({ store, error, params }) {
    try {
      await store.dispatch('events/fetchEvent', params.id)
    } catch (e) {
      error({
        status: 503,
        message: 'Unable to fetch events #' + params.id
      })
    }
  },
  computed: mapState({
    event: (state) => state.events.event
  }),
  head() {
    return {
      title: 'Event # ' + this.event.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'WHAT about event #' + this.event.title
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped></style>
