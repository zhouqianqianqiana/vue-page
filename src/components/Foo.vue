<template>
	<div v-title data-title="foo">
		<header>
			<a href="#" >&lt; 返回</a>
			<div class="center">greeter</div>
			<div class="right">me</div>
		</header>
		<div class="container">
			hhhhhhhhhh
		</div>
	</div>
</template>

<script>
</script>

<style>
	header{
		position: relative;
		height: 44px;
		background: #42B983;
		color: #fff;
		font-size: 1em;
		line-height: 44px;
	}
	header a{
		position: absolute;
		left: 15px;
	}
	header .center{
		position: absolute;
		left: 0;
		right: 0;
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
</style>