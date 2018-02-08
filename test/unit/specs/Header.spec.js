import Vue from 'vue'
import Header from '@/components/Header'

describe('Header component', () => {
  it('should render proper title', () => {
    const Constructor = Vue.extend(Header)
    const vm = new Constructor().$mount()

    expect(vm.$el.querySelector('header h1 a').textContent)
      .toEqual('Tic Tac Toe Vue')
  })
})
