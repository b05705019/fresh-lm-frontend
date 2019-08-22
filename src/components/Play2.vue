<template>
  <div id="play">
		<div class="play-album">
			<img class="album-img" :src=album[category] alt="album picture" />
			<div class="play-timeout-container">
				<div class="play-timeout-bg"></div>
				<div class="play-timeout" :style="timeoutBar"></div>
				<img :src=Clock alt="" />
				<div class="timeout-num">{{timeout}}</div>
			</div>
		</div>
		<div class="play-profile">
			<img :src="$imgSrc" alt="profile picture" />
			<div class="play-profile-info">
				<div class="play-name">{{$name}}</div>
				<div>累計歌曲：{{finalScore}}</div>
			</div>
			<div class="play-score"><span>{{score}}</span>分</div>
		</div>
		<div class="play-answer">
			<div class="play-history">
				<div class="play-answer-text" v-for="item in answers" :key="item.text">
					<img class="answer-profile" :src=Belle alt="Belle"/>
					<div class="text-content"> {{item.text}} </div>
				</div>
			</div>
			<form class="play-input">
				<input class="input-text" placeholder="type your answer" v-model="inputContent" />
				<img :src=Enter alt="enter button" @click="submitAnswer"/>
			</form>
		</div>
		<audio :src=audio[category][0] class="audio_0" />
		<audio :src=audio[category][1] class="audio_1" />
		<audio :src=audio[category][2] class="audio_2" />
		<audio :src=audio[category][3] class="audio_3" />
	</div>
</template>

<script>
import s70 from '../assets/s70.png';
import s80 from '../assets/s80.png';
import s90 from '../assets/s90.png';
import s00 from '../assets/s00.png';
import Belle from '../assets/belle1.png';
import Enter from '../assets/enter.png';
import Clock from '../assets/clock.png';
import balloon from '../assets/balloon.mp3';
import waste from '../assets/waste.mp3';
import actor from '../assets/actor.mp3';
import sad from '../assets/sad.mp3';
import loveyou from '../assets/loveyou.mp3';
import tender from '../assets/tender.mp3';
import whatwrong from '../assets/whatwrong.mp3';
import { timeout } from 'q';

export default {
	name: 'Play',
	props: {
		category: Number,
		score: Number,
		finalScore: Number,
		songName: Array
	},
	data: function() {
		return {
			album: [s70, s80, s90, s00],
			Belle,
			Enter,
			Clock,
			audio: [
				[balloon, waste, actor, sad],
				[loveyou, actor, sad, tender],
				[tender, balloon, waste, loveyou],
				[waste, whatwrong, sad, actor]
			],
			answers: [
				{ text: '歌曲播放後請於下方輸入歌名' },
				{ text: '等待其他玩家進場' }
			],
			inputContent: '',
			timeout: 60,
			timeoutBarLen: 72,
			timeoutBar: { width: '72%' },
			ongoingSong: 0,
			answerSituation: [false, false, false, false],
			players: [
				{
					imgSrc: this.$imgSrc,
					name: this.$name
				}
			]
		}
	},
	mounted() {

		this.$socket.emit('join', {
			username: this.$name,
			imgSrc: this.$imgSrc
		})
		
		var audio_0 = this.$el.querySelector('.audio_0');
		// audio_0.play();
	},
	updated() {
		var answerSituation = this.answerSituation;
		if(answerSituation.filter(result => result == true).length == 4 || this.timeout == 0){
			clearInterval(this.interval);
			this.$router.push({ path: '/Score' });
		}
			
	},
	sockets: {
        connect: function () {
            console.log('socket connected')
        },
        getText: function (data) {
			this.answers.push({text: data});
			console.log('get text')
		},
		getData: function (data) {
			this.answers.push({text: data.username + ' join'});
			this.players.push({imgSrc: data.imgSrc, name: data.username});
			console.log('get data')
		},
		start: function () {
			this.answers.push({text: "start"});
			this.interval = setInterval(() => {
				this.timeout = this.timeout - 1;
				this.timeoutBarLen = this.timeoutBarLen - 1.2;
				this.timeoutBar.width = this.timeoutBarLen+'%';
			}, 1000);
			var audio_0 = this.$el.querySelector('.audio_0');
			audio_0.play()
		},
		nextSong: function () {
			// this.$emit('collectScore', 1);
			this.answerSituation[this.ongoingSong] = true;
			var audio_playing = this.$el.querySelector('.audio_'+this.ongoingSong);
			audio_playing.pause();
			this.ongoingSong = this.ongoingSong + 1;
			audio_playing = this.$el.querySelector('.audio_'+this.ongoingSong);
			audio_playing.play();
		}

    },
	methods: {
		submitAnswer() {
			this.$socket.emit('submit', this.inputContent)
			this.answers.push({text: this.inputContent});
			this.inputContent = this.$el.querySelector(".input-text").value;
			var container = this.$el.querySelector(".play-history");
			container.scrollTop = container.scrollHeight;

			// encode to unicode: TODO
			var res = [];  
			for(var i=0; i<this.inputContent.length; i++) {  
				res[i] = ( "00" + this.inputContent.charCodeAt(i).toString(16) ).slice(-4);  
			}  
			var uni_inputCnt = "\\u" + res.join("\\u");

			var res2 = [];  
			var thisSongName_list = this.songName;
			for(var i=0; i<thisSongName_list[this.category][this.ongoingSong].length; i++) {  
				res2[i] = ( "00" + thisSongName_list[this.category][this.ongoingSong].charCodeAt(i).toString(16) ).slice(-4);  
			}  
			var uni_ongoingSong = "\\u" + res2.join("\\u");

			// string comparison: TODO
			if(uni_inputCnt == uni_ongoingSong) {
				this.$socket.emit('success_method')
				this.$emit('collectScore', 1);
				this.answerSituation[this.ongoingSong] = true;
				var audio_playing = this.$el.querySelector('.audio_'+this.ongoingSong);
				audio_playing.pause();
				this.ongoingSong = this.ongoingSong + 1;
				audio_playing = this.$el.querySelector('.audio_'+this.ongoingSong);
				audio_playing.play();
			}

			this.inputContent = '';
		}
	}
	
}
</script>

<style>
#play {
	display: flex;
	flex-direction: column;
	align-items: center;
	height: 100vh;
	overflow: hidden;
}
.play-album {
	width: 100vw;
	display: flex;
	flex-direction: column;
	align-items: center;
	position: relative;
}
.album-img {
	width: 100vw;
}
.play-timeout-container {
	width: 72%;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
}
.play-timeout-container img {
	width: 18px;
	position: absolute;
	bottom: 9%;
	left: 20%;
}
.play-timeout-bg {
	position: absolute;
	width: 72%;
	height: 40px;
	background: rgba(255, 255, 255, 0.673);
	/* top: 200px; */
	bottom: 5%;
	border-radius: 50px;
}
.play-timeout {
	position: absolute;
	width: 72%;
	height: 40px;
	background: rgb(14, 224, 114);
	/* top: 200px; */
	bottom: 5%;
	border-radius: 50px;
}
.timeout-num {
	font-family: 'Noto Sans TC', sans-serif;
	color: rgb(87, 87, 87);
	position: absolute;
	width: 50%;
	height: 40px;
	bottom: 2.8%;
	left: 78%;
}
.play-profile {
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	font-family: 'Noto Sans TC', sans-serif;
}
.play-name {
	font-size: 1.3em;
}
.play-profile img {
	border-radius: 100%;
	background: white;
	width: 25vw;
	border: rgb(14, 224, 114) solid 2px;
	margin: 5vw;
	margin-bottom: 0;
}
.play-score {
	color: white;
	font-size: 1em;
	margin: 0 5vw;
}
.play-score span {
	color: rgb(14, 224, 114);
	font-size: 4em;
}
.play-answer {
	margin: 2vh 0;
	width: 85%;
	border: rgb(14, 224, 114) solid 2px;
	border-radius: 20px;
	height: 45vh;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-content: flex-end;
	font-family: 'Noto Sans TC', sans-serif;
	padding: 5px;
}
.play-answer-text {
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;
}
.play-history {
	width: 97%;
	height: 90%;
	margin-left: 5px;
	/* background: white; */
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: flex-start;
	overflow: scroll;
}
.play-input {
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	height: 50px;
	width: 100%;
	/* background: yellow; */
}
.answer-profile {
	width: 20px;
	height: 20px;
	border-radius: 100%;
	background: white;
	border: rgb(14, 224, 114) solid 1px;
}
.text-content {
	display: inline-block;
	border: none;
	border-radius: 17px;
	padding: 10px;
	margin: 5px 5px;
	background: rgba(255, 255, 255, 0.406);
}
.play-input input {
	width: 70%;
	height: 30px;
	border: none;
	border-radius: 50px;
	background: rgba(255, 255, 255, 0.632);
	font-size: 1em;
	text-align: center;
	margin: 4vw;
	outline: none;
}
.play-input img {
	height: 25px;
}
</style>
