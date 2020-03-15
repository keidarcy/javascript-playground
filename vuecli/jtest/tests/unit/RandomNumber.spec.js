import RandomNumber from '@/components/RandomNumber.vue'
import { mount } from '@vue/test-utils'

describe('RandomNumber', () => {
  test('By default, randomNumber data value shouble be 0', async () => {
    const wrapper = mount(RandomNumber)
    await wrapper.vm.$nextTick()
    expect(wrapper.html()).toContain('<span>0</span>')
  })

  test('By default, randomNumber data value shouble be 0', async () => {
    const wrapper = mount(RandomNumber)
    wrapper.find('button').trigger('click')
    await wrapper.vm.$nextTick()
    const randomNumber = Number(wrapper.find('span').element.textContent)
    expect(randomNumber).toBeGreaterThanOrEqual(1)
    expect(randomNumber).toBeLessThanOrEqual(10)
  })

  test('By default, randomNumber data value shouble be 0', async () => {
    const wrapper = mount(RandomNumber, {
      propsData: {
        min: 200,
        max: 300
      }
    })
    wrapper.find('button').trigger('click')
    await wrapper.vm.$nextTick()
    const randomNumber = Number(wrapper.find('span').element.textContent)
    expect(randomNumber).toBeGreaterThanOrEqual(200)
    expect(randomNumber).toBeLessThanOrEqual(300)
  })
})
