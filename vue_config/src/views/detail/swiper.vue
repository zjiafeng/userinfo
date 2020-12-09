<template>
	<!-- Swiper -->
	<div class="swiper-container">
		<div class="swiper-wrapper">
			<div class="swiper-slide"></div>
			<div class="swiper-slide"></div>
			<div class="swiper-slide"></div>
			<div class="swiper-slide"></div>
			<div class="swiper-slide"></div>
			<div class="swiper-slide">
				<!-- <input type="text"> -->
				<button @click="()=>{this.$router.push('/love')}">进入</button>
			</div>
		</div>
		<!-- Add Pagination -->
		<div class="swiper-pagination"></div>
	</div>

</template>

<script>
	import Swiper from 'swiper/js/swiper.js';
	export default {
		name: "swiper",
		data() {
			return {

			}
		},
		methods: {

		},
		mounted: function() {
			new Swiper('.swiper-container', {
				pagination: {
					el: '.swiper-pagination',
				},
				effect: 'coverflow',
				grabCursor: true,
				centeredSlides: true,
				slidesPerView: 'auto',
				coverflow: {
					rotate: 50,
					stretch: 0,
					depth: 100,
					modifier: 1,
					slideShadows: true
				}
			});
		},
	}
</script>

<style scoped="scoped" lang="less">
	button{
		margin: 0 auto;
		display: block;
		margin-top: 70vh;
		width: 2rem;
		height:2rem;
		background-color: #0076FF;
		border-radius:100%;
		font-size: 0.64rem;
		color: #eee;
	}
	input{
		width: 40%;
		margin-top: 52vh;
		padding: 0 0.533333rem;
		height:1rem;
		border: #0076FF 0.1rem solid;
		border-radius: 0.533333rem;
	}
	body {
		background: #fff;
		font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
		font-size: 14px;
		color: #000;
		margin: 0;
		padding: 0;
	}

	.swiper-container {
		width: 100%;
	}

	.swiper-slide {
		background-position: center;
		background-size: cover;
		width: 100%;
		height: 100vh;

		&:nth-child(1) {
			background: url(../../assets/images/text1.png) no-repeat;
		}

		&:nth-child(2) {
			background: url(../../assets/images/text4.png) no-repeat;
		}

		&:nth-child(3) {
			background: url(../../assets/images/text2.png) no-repeat;
		}

		&:nth-child(4) {
			background: url(../../assets/images/text5.png) no-repeat;
		}

		&:nth-child(5) {
			background: url(../../assets/images/text3.png) no-repeat;
		}

		&:nth-child(6) {
			background: url(../../assets/images/text6.png) no-repeat;
		}
	}
</style>
