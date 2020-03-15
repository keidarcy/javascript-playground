<template>
  <div>
    <transition-group
      appear
      @before-enter="beforeEnter"
      @enter="enter"
      :css="false"
    >
      <div class="card" v-for="card in cards" :key="card.id">
        <p>{{ card.title }}</p>
      </div>
    </transition-group>
    <transition appear @before-enter="beforeEnter" @enter="enter" :css="false">
      <div class="card"></div>
    </transition>
    <button v-show="loggedIn">Logout</button>
  </div>
</template>

<script>
import Velocity from 'velocity-animate'
import gsap from 'gsap'
export default {
  data() {
    return {
      loggedIn: false,
      cards: [
        { title: 'Could contain anything', id: 123 },
        { title: 'Endless possibilities', id: 456 }
      ]
    }
  },
  methods: {
    beforeEnter(el) {
      el.style.opacity = 0
      el.style.width = '0em'
    },
    enter(el, done) {
      Velocity(
        el,
        { opacity: 1, width: '12em', rotateZ: '3deg' },
        { duration: 1000, easing: [70, 8], complete: done }
      )
    }
    // beforeEnter(el) {
    //   el.style.opacity = 0
    //   el.style.transform = 'scale(0,0)'
    // },
    // enter(el, done) {
    //   gsap.to(el, {
    //     duration: 1,
    //     opacity: 1,
    //     scale: 1,
    //     ease: 'bounce.out',
    //     onComplete: done
    //   })
    // }
  }
}
</script>
