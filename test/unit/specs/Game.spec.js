import Vue from 'vue'
import Game from '@/components/Game'
import store from '@/store/index'

describe('Game component', () => {
  const Constructor = Vue.extend({...Game, store})
  const vm = new Constructor().$mount()

  it('should have disabled restart button on initial render', () => {
    expect(vm.$el.querySelector('.actions-new').getAttribute('disabled'))
      .toEqual('disabled')
  })

  it('should have disabled prev button on initial render', () => {
    expect(vm.$el.querySelector('.actions-prev').getAttribute('disabled'))
      .toEqual('disabled')
  })

  it('should have disabled next button on initial render', () => {
    expect(vm.$el.querySelector('.actions-next').getAttribute('disabled'))
      .toEqual('disabled')
  })
})
