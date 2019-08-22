import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import routes from './router.js';
import VueSocketIO from 'vue-socket.io'
// Vue.prototype.$liff = window.liff
console.log(window.liff)
Vue.use(new VueSocketIO({
  debug: true,
  connection: 'https://beta-fresh-linemusic-game.herokuapp.com/'
  // options: { path: "/my-app/" } //Optional options
}))

// Vue.use(VueSocketIO, "http://localhost:5000/")
Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  base: '/dist/',
	routes
});

new Vue({
	router,
	render: h => h(App),
}).$mount('#app')
