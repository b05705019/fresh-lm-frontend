<template>
  <div id="rule">
		<div class="rule-title-text"><span class="rule-title-left">規</span>則</div>
		<div class="rule-title-content">
			<ul class="rule-title-content-ul">
				<li>這是一個音樂遊戲，請確認您的手機裝置音量設定正常。</li>
				<li>遊戲中，請輸入正確的歌曲名稱。</li>
				<li>累積30首歌曲將可以兌換1點的line point。</li>
			</ul>
		</div>
		<audio :src=audio[category][0] class="audio_0" />
		<audio :src=audio[category][1] class="audio_1" />
		<audio :src=audio[category][2] class="audio_2" />
		<audio :src=audio[category][3] class="audio_3" />
		<router-link to="/Play"><button class="rule-next">next</button></router-link>
	</div>
</template>

<script>
import balloon from '../assets/balloon.mp3';
import waste from '../assets/waste.mp3';
import actor from '../assets/actor.mp3';
import sad from '../assets/sad.mp3';
import loveyou from '../assets/loveyou.mp3';
import tender from '../assets/tender.mp3';
import whatwrong from '../assets/whatwrong.mp3';

export default {
	name: 'Rule',
	props: {
		category: Number,
		songName: Array
	},
	data: function() {
		return {
			audio: [
				[balloon, waste, actor, sad],
				[loveyou, actor, sad, tender],
				[tender, balloon, waste, loveyou],
				[waste, whatwrong, sad, actor]
			]
		}
	},
	components: {		
	}
}
</script>

<style>
#rule {
	font-family: 'Comfortaa', cursive;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 100vh;
}
.rule-title-text {
	font-size: 3em;
	margin-top: 60px;
}
.rule-title-left {
	color: rgb(14, 224, 114);
}
.rule-title-content {
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	margin: 20vw 0;
	/* background: pink; */
}
.rule-title-content-ul {
	font-size: 1em;
	width: 70%;
	/* background: red; */
}
.rule-title-content li {
	margin: 1em 0.5em 1em 0;
	/* background: red; */
}
.rule-next {
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
	max-height: 20px;
	min-height: 50px;
	font-size: 1em;
}
</style>
