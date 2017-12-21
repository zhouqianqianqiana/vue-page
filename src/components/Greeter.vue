<template>
	<transition name="transitionName" keep-alive>
		<div v-title data-title="greeter" class="red-color">
			<header>
				<div class="back" v-back>&lt; 返回</div>
				<div class="center">greeter</div>
				<div class="right">me</div>
			</header>
			<div class="swiper-container">
			  <div class="swiper-wrapper">
			    <div class="swiper-slide">slider1</div>
			    <div class="swiper-slide">slider2</div>
			    <div class="swiper-slide">slider3</div>
			  </div>
			  <div class="swiper-pagination"></div>
			</div>
			<div class="link">
				<div @click="linkClick(1,'v-a')" :class="{'active':ind == 1}" class="foo">/foo</div>
				<div @click="linkClick(2,'v-b')" :class="{'active':ind == 2}" class="foo">/bar</div>
			</div>
			
			<transition name="slide-fade"> <p v-show="show">{{result}}</p></transition>
			
			<transition name="component-fade" mode="out-in">
				<component v-bind:is="view"></component>
			</transition>
		</div>
	</transition>
	
	
</template>
<script>
//	import Swiper from 'swiper';
//	import Swiper from '@/../static/js/swiper.js';
	export default {
		name: 'greeter',
		data() {
			return {
				msg: 'hello zhouqian',
				ind: 1,
				result: 'aaaa',
				show: true,
				view: 'v-a'
			}
		},
		components: {
			'v-a': {
				template: `<div>
					<div style="float:left;width:50%;background:#ccc;border:1px solid #ddd;box-sizing:border-box;" v-for="el in items">
						<div :class="{'item':true}" @click="iClick">click me {{message1}}</div>
						<span>{{el.name}}</span>
						<p>{{el.year}}</p>
						<p>{{el.id}}</p>
					</div>
				</div>`,
				data() {
					return {
						message1: 'component A',
						items: [{'name': 'alice','year': 16,'id':1},
						{'name': 'jay','year': 14,'id':2},
						{'name': 'chen','year': 15,'id':3}]
					}
					
				},
				methods: {
					iClick: function () {
						console.log(111)
					}
				}
			},
			'v-b': {
				template:`<div>
					<div style="float:left;width:50%;background:#ccc;border:1px solid #ddd;box-sizing:border-box;" v-for="el in items">
						<div :class="{'item':true}" @click="iClick">click me {{message1}}</div>
						<span>{{el.name}}</span>
						<p>{{el.year}}</p>
						<p>{{el.id}}</p>
					</div>
				</div>`,
				data() {
					return {
						message1: 'component A',
						items: [{'name': 'alice','year': 16,'id':1},
						{'name': 'jay','year': 14,'id':2},
						{'name': 'chen','year': 15,'id':3}]
					}
					
				},methods: {
					iClick: function () {
						console.log(111)
					}
				}
			}
		},
		mounted () {
			this.lunbo();
		},
		methods: {
			linkClick: function (index,str) {
				this.ind = index;
				this.result = str;
				this.view = str;
			},
			lunbo() {
				var swiper = new Swiper('.swiper-container',{
					autoplay: 2000,
					pagination : '.swiper-pagination',
					loop:true
				})
				
//				console.log(swiper)
			},
			
		}
	}
</script>
<style scoped>
	/*@import url('../../static/css/swiper.css');*/
	header{
		position: relative;
		height: 44px;
		background: #42B983;
		color: #fff;
		font-size: 1em;
		line-height: 44px;
	}
	header .back{
		position: absolute;
		left: 15px;
		z-index: 5;
	}
	header .center{
		position: absolute;
		left: 0px;
		right: 0px;
		top: 0;
		height: 44px;
		text-align: center;
		font-size: 1.2em;
	}
	header .right{
		position: absolute;
		right: 15px;
	}
	a{
		text-decoration: none;
		color: #fff;
	}
	.red-color{
		color:red;
	}
	.link .active{
		color: #000;
		background: #007AFF;
		transition: all .3s ease;
	}
	.float{
		float: left;
		width: 50%;
	}
	.item{
		color: #000;
	}
	.swiper-container{
		height: 8em;
		background: #ccc;
		line-height: 8em;
	}
	.link{
		display: flex;
	}
	.link div{
		flex: 1;
		background: orange;
		color: #fff;
		height: 2em;
		line-height: 2em;
	}
	.component-fade-enter-active, .component-fade-leave-active {
	  transition: all .2s ease;
	}
	.component-fade-enter
	/* .component-fade-leave-active for below version 2.1.8 */ {
	  opacity: 0;
	  transform: translateX(-10%);
	}
	.component-fade-leave-to{
		opacity: 0;
	  transform: translateX(10%);
	}
</style>