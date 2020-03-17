import EventService from '@/services/EventService.js'

export const namespaced = true

export const state = {
  events: [],
  event: {}
}
export const mutations = {
  ADD_EVENT(state, event) {
    state.events.push(event)
  },
  SET_EVENTS(state, events) {
    state.events = events
  },
  SET_EVENT(state, event) {
    state.event = event
  }
}
export const actions = {
  createEvent({ commit }, event) {
    return EventService.postEvent(event).then(() => commit('ADD_EVENT', event))
  },
  fetchEvents({ commit, dispatch }, { perPage, page }) {
    EventService.getEvents(perPage, page)
      .then(res => commit('SET_EVENTS', res.data))
      .catch(err => {
        const notification = {
          type: 'error',
          message: 'BIIIG problems' + err.message
        }
        dispatch('notification/add', notification, { root: true })
      })
  },
  fetchEvent({ commit, getters }, id) {
    const event = getters.getEventById(id)
    if (event) {
      commit('SET_EVENT', event)
    }
    return EventService.getEvent(id).then(res => {
      commit('SET_EVENT', res.data)
      return res.data
    })
  }
}
export const getters = {
  catLength: state => state.categories.length,
  doneTodos: state => state.todos.filter(todo => todo.done),
  // activeTodosCount: (state, getters) =>
  //   state.todos.length - getters.doneTodos.length
  activeTodosCount: state => state.todos.filter(todo => !todo.done).length,
  getEventById: state => id => state.events.find(event => event.id === id)
}
