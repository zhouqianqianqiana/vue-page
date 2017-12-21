// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false;
Vue.directive('title', {
	inserted: function (el, binding) {
		document.title = el.dataset.title
	}
});
let bRouter;
Vue.directive('back', function (el, binding) {
	el.addEventListener('click', function () {
		bRouter.goBack()
	})
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  mounted () {
  	bRouter = this.$router;
//	console.log(bRouter)
  }
})
