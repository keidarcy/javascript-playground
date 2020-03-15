<template>
  <div>
    <h1>{{ event.title }}</h1>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios, error, params }) {
    // const response = await $axios.get('http://localhost:3001/events')
    // return {
    //   events: response.data
    // }
    // es6 destructuring
    try {
      const { data } = await $axios.get(
        'http://localhost:3001/events/' + params.id
      )
      return {
        event: data
      }
    } catch (e) {
      error({
        status: 503,
        message: 'Unable to fetch events #' + params.id
      })
    }
  },
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
