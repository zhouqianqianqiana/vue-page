import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Greeter from '@/components/Greeter';
import Foo from '@/components/Foo';
import Bar from '@/components/Bar';
import PageA from '@/components/pageA';
import PageB from '@/components/pageB';
import Index from '@/components/Index';
import PageTransition from '@/components/PageTransition';

Vue.use(Router)

Router.prototype.goBack = function () {
	this.isBack = true;
	window.history.go(-1);
}



export default new Router({
  routes: [
    {
      path: '/',
      name: 'PageTransition',
      component: PageTransition,
      children: [{
      	path: '/greeter',
	    component: Greeter
      },{
      	path: '',
	    component: Index
      },{
      	path: '/pageA',
	    component: PageA
      },{
      	path: '/pageB',
	    component: PageB
      }]
    },
    {
	    path: '/foo',
	    component: Foo
    }
  ]
})
