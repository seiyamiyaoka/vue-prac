import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Application from '../views/Application.vue'
import OrderFood from '../views/OrderFood.vue'
import Chat from '../views/Chat.vue'
import Robot from '../views/Robot.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/application',
    name: 'Application',
    component: Application
  },
  {
    path: '/order',
    name: 'OrderFood',
    component: OrderFood
  },
  {
    path: '/chat',
    name: 'Chat',
    component: Chat
  },
  {
    path: '/robot',
    name: 'Robot',
    component: Robot
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
