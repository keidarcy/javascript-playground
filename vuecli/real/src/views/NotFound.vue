<template>
  <div>
    <h1>Opps</h1>
    <h3>{{ resource }}</h3>
    <router-link :to="{ name:'event-list' }">Back</router-link>
      <!-- <router-link :to="{ name: 'event-list' }">List</router-link> -->
  </div>
</template>

<script>
export default {
  props: {
    resource: {
      type: String
    }
  }
}
</script>
