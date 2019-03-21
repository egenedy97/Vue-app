import Vue from 'vue'
import Router from 'vue-router'
import First from '@/components/First'
// import First from '@/componets/First'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/First',
      name: 'First',
      component: First
    },
    
  ]
})
