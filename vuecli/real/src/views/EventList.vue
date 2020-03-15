<template>
  <div>
    <h1>Events Listing {{ user.user.name }}</h1>
    <!-- <ul>
      <li v-for="cat in categories" :key="cat">{{ cat }}</li>
    </ul>
    <p>{{ catLength }}</p>
    <p>{{ getEventById(2) }}</p> -->
    <EventCard v-for="event in event.events" :key="event.id" :event="event" />
    <template v-if="page != 1">
      <router-link
        :to="{ name: 'event-list', query: { page: page - 1 } }"
        rel="prev"
        >Prev Page</router-link
      >
    </template>
    <br />
    <router-link
      :to="{ name: 'event-list', query: { page: page + 1 } }"
      rel="next"
      >Next Page</router-link
    >
  </div>
</template>

<script>
import EventCard from '@/components/EventCard.vue'
import { mapState, mapGetters } from 'vuex'

export default {
  components: {
    EventCard
  },
  // data() {
  //   return {
  //     events: []
  //   }
  //
  // computed: {
  //   userName() {
  //     return this.$store.state.user.name
  //   },
  //   userId() {
  //     return this.$store.state.user.id
  //   }
  // }
  // computed: mapState({
  //   // userName: state => state.user.name,
  //   // userId: state => state.user.id,
  //   user: 'user',
  //   categories: 'categories'
  // })
  computed: {
    // catLength() {
    //   return this.$store.getters.activeTodosCount
    // },
    // getEvent() {
    //   return this.$store.getters.getEventById
    // },
    ...mapState(['event', 'categories', 'events', 'user']),
    ...mapGetters(['getEventById']),
    page() {
      return parseInt(this.$route.query.page) || 1
    }
  },
  created() {
    this.$store.dispatch('event/fetchEvents', {
      perPage: 3,
      page: this.page
    })
  }
}
</script>
