<template>
  <div id="point">
		<!-- <div class="point-content">
			<img :src=plus alt="plus sign" class="point-plus" />
			<div class="point-icon"><div class="point-icon-text">P</div></div>
			<div class="point-one">1</div>
		</div> -->
		<div class="point-text-container">
			<div class="point-text"><span class="point-play">Play</span> and <br/> get <span class="point-1">1</span> Line point.</div>
			<button @click="getProfile()">Get Profile</button>
		</div>
		<router-link to="/Info"><button class="point-next">next</button></router-link>
	</div>
</template>

<script>
import plus from '../assets/plus.svg';
export default {
	name: 'Point',
	data: function() {
		return {
			plus
		}
	},
	components: {

	},
	methods: {
		getProfile () {
			liff.getProfile().then(function (profile) {
				_this.profile = profile
			}).catch(function (error) {
				alert('Error getting profile: ' + error)
			})
		}
	},
	mounted() {
		liff.init(res => {
			console.log(res.context.userId)
			this.userId = res.context.userId;
			this.token = liff.getAccessToken();
			this.getUserStatus(this.token);
		},
		err => {
			this.token="";
			console.log(err);
		})
	}
}
</script>

<style>
#point {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 100vh;
	font-family: 'Comfortaa', cursive;
}
.point-content {
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	width: 80%;
	/* background: yellow; */
}
.point-plus {
	margin: 25px;
	margin-top: 35px;
	/* background: blue; */
}
.point-icon {
	background: linear-gradient(to bottom, rgb(14, 224, 114), rgb(9, 121, 63) 100%);
	width: 10vw;
	min-width: 90px;
	height: 10vw;
	min-height: 90px;
	border-radius: 100%;
	font-size: 4em;
	position: relative;
}
.point-icon-text {
	position: absolute;
	top: 20%;
	left: 30%;
}
.point-one {
	margin: 0 20px;
	padding-top: 15px;
	font-size: 5.5em;
	/* background: red; */
}
.point-text-container {
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	/* background: red; */
}
.point-text {
	font-size: 1.68em;
	width: 80%;
	margin: 10vw 0;
	/* background: pink; */
}
.point-1 {
	color:  rgb(14, 224, 114);
	font-size: 2.5em;
}
.point-play {
	font-size: 4em;
}
.point-next {
	color: white;
	background: linear-gradient(to bottom, rgb(14, 224, 114), rgb(9, 121, 63) 100%);
	border: none;
	text-decoration: none;
	font-family: 'Comfortaa', cursive;
	border-radius: 100px;
	width: 20vw;
	max-width: 50px;
	min-width: 90px;
	height: 10vw;
	min-height: 50px;
	max-height: 20px;
	font-size: 1em;
}
</style>
