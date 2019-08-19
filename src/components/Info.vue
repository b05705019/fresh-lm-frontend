<template>
  <div id="info">
		<div class="personalInfo">
			<div class="info-name">Belle Chou</div>
			<div class="info-scores">
				<img class="profile-img" :src=Belle alt="profile picture">
				<div class="profile-right">
					<div class="info-nums">
						<div class="profile-info">
							<div class="info-num">{{finalScore}}</div>
							<div class="info-num-text">累積歌曲</div>
						</div>
						<div class="profile-info">
							<div class="info-num">150</div>
							<div class="info-num-text">可兌換額度</div>
						</div>
					</div>
					<button class="info-exchange-button">兌換 Line points</button>
					<div class="info-hint">30首歌可兌換 1 Line point</div>
				</div>
			</div>
		</div>
		<div class="info-category">
			<div class="category-text">類別</div>
			<div class="categories">
				<router-link class="info-router" to="/Rule">
					<div class="category-button s70" @click="clickOns70">
						<div class="category-button-text">柒零年代</div>
						<div class="category-button-subtext">經典傳唱</div>
						<img class="category-button-img" :src=BoomBox />
					</div>
				</router-link>
				<router-link class="info-router" to="/Rule">
					<div class="category-button s80" @click="clickOns80">
						<div class="category-button-text">捌零年代</div>
						<div class="category-button-subtext">精選金曲</div>
						<img class="category-button-img" :src=MusicPlayer />
					</div>
				</router-link>
				<router-link class="info-router" to="/Rule">
					<div class="category-button s90" @click="clickOns90">
						<div class="category-button-text">玖零年代</div>
						<div class="category-button-subtext">余憶童稚</div>
						<img class="category-button-img" :src=Disc />
					</div>
				</router-link>
				<router-link class="info-router" to="/Rule">
					<div class="category-button s00" @click="clickOns00">
						<div class="category-button-text">零零年代</div>
						<div class="category-button-subtext">我還年輕</div>
						<img class="category-button-img" :src=BoomBox />
					</div>
				</router-link>
			</div>
		</div>
		<!-- <router-link to="/Rule">To Rule</router-link> -->
	</div>
</template>

<script>
import Belle from '../assets/belle1.png';
import BoomBox from '../assets/boomBox.png';
import MusicPlayer from '../assets/musicPlayer.png';
import Disc from '../assets/disc.png';

export default {
	name: 'info',
	props: {
		category: Number,
		finalScore: Number
	},
	data: function() {
		return {
			Belle,
			BoomBox,
			MusicPlayer,
			Disc
		}
	},
	components: {
	},
	methods: {
		clickOns70() {
			this.$emit('clickOns70', 0);
		},
		clickOns80() {
			this.$emit('clickOns80', 1);
		},
		clickOns90() {
			this.$emit('clickOns90', 2);
		},
		clickOns00() {
			this.$emit('clickOns00', 3);
		}

	}
}
</script>

<style>
#info {
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	/* background: rgb(69, 69, 69); */
	width: 100vw;
	height: 100vh;
	overflow-x: hidden;
	overflow-y: scroll;

}
.info-name {
	font-size: 1.8em;
	font-family: 'Comfortaa', cursive;
	margin: 0 10px 20px 0;
}
.info-hint {
	margin: 1vw;
	font-size: 0.8em;
	font-family: 'Comfortaa', cursive;
	color: grey;
}
.personalInfo {
	width: 100%;
	height: 25%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	background: black;
	padding: 3vh 0 5vh 20vw;
	/* border-bottom-left-radius: 30px; */
	/* border-bottom-right-radius: 30px; */
	/* background: green; */
}
.profile-img {
	background: rgb(255, 255, 255);
	border: rgb(14, 224, 114) solid 3.5px;
	border-radius: 50%;
	width: 27vw;
	/* margin-right: 5vw; */
}
.info-scores {
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	align-items: center;
	width: 85%;
	/* background: red; */
}
.info-num-text {
	font-size: 0.8em;
}
.profile-right {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	/* margin-left: 3vw; */
	/* background: green; */
}
.info-nums {
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	align-items: center;
	font-family: 'Noto Sans TC', sans-serif;
	width: 100%;
	/* background: yellow; */
}
.info-num {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}
.profile-info {
	margin: 0 1.5%;
}
.info-exchange-button {
	color: white;
	background: rgb(14, 224, 114);
	border: none;
	border-radius: 5px;
	width: 45vw;
	height: 7vw;
	margin-top: 10px;
	outline: none;
	cursor: pointer;
}
.info-category {
	height: 80%;
	font-family: 'Noto Sans TC', sans-serif;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: flex-start;
	border-top-left-radius: 30px;
	border-top-right-radius: 30px;
	background: rgb(60, 60, 60);
}
.category-text {
	font-size: 1.8em;
	margin: 8% 10% 5% 10%;
	/* background: brown; */
}
.categories {
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
	font-size: 1.8em;
	color: black;
}
.category-button-subtext {
	font-size: 0.5em;
}
.category-button {
	width: 40vw;
	height: 50vw;
	border: none;
	margin: 3vw 3vw;
	border-radius: 10px;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	cursor: pointer;
}
.s70 {
	background: linear-gradient(to bottom left, rgb(96, 231, 255), rgb(1, 145, 198) 70%);
	/* border-top-left-radius: 0; */
}
.s80 {
	background: linear-gradient(to bottom right, rgb(183, 255, 82), rgb(97, 167, 0) 70%);
	/* border-top-right-radius: 0; */
}
.s90 {
	background: linear-gradient(to bottom, rgb(255, 186, 82), rgb(193, 106, 0) 70%);
	/* border-bottom-left-radius: 0; */
}
.s00 {
	background: linear-gradient(to bottom, rgb(232, 255, 82), rgb(193, 187, 0) 70%);
	/* border-bottom-right-radius: 0; */
}
.category-button-img {
	width: 25vw;
	margin: 2vw;
	margin-bottom: 0;
	filter: drop-shadow(3px 3px 5px rgba(0, 0, 0, 0.7))
}
.info-router {
	text-decoration: none;
	color: black;
	text-align: center;
}
</style>
