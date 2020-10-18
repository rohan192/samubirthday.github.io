import Vue from 'vue'
import VueRouter from 'vue-router'
// import home from '../views/home.vue'
import friend from '../views/friend.vue'
import me from '../views/me.vue'
import welcome from '../views/welcome.vue'
import family from '../views/family.vue'
import child from '../views/child.vue'


Vue.use(VueRouter)

const routes = [
 {
   path:'/',
   name:'welcome',
   component:welcome
 },
 {
  path:'/fry',
  name:'fry',
  component:friend
},
{
  path:'/me',
  name:'me',
  component:me
},
{
  path:'/family',
  name:'family',
  component:family
},
{
  path:'/child',
  name:'child',
  component:child
},
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
