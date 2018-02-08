import Vue from 'vue'
import Router from 'vue-router'
import Game from '@/components/Game'
import Rules from '@/components/Rules'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Game',
      component: Game
    },
    {
      path: '/rules',
      name: 'Rules',
      component: Rules
    }
  ]
})
