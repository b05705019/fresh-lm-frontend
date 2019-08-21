<template>
	<div id="score">
		<div class="score-profile">
			<div class="score-crown-container">
				<img class="score-crown" :src=Crown alt="" />
			</div>
			<div class="score-title">戰果</div>
			<img class="score-img" :src=Belle alt="Belle Chou" />
			<div class="score-name">Belle Chou</div>
			<div class="score-container">
				<div class="score-info">
					<div class="score-info-num score-single-num">{{score}}</div>
					<div class="score-info-text">單場積分</div>
				</div>
				<div class="score-info">
					<div class="score-info-num">{{finalScore}}</div>
					<div class="score-info-text">累計歌曲</div>
				</div>
				<div class="score-info">
					<div class="score-info-num">180</div>
					<div class="score-info-text">可兌換額度</div>
				</div>
			</div>
		</div>

		<div class="score-songs">
			<div class="score-songs-title">再聽一次</div>
			<div class="score-songs-content" v-for="item in song_list" :key=item >
				<img :src=JJLin alt="album"/>
				<div class="score-song-text">{{item}}</div>
			</div>
		</div>
		<!-- <router-link to="/Ranking">To point</router-link> -->
		<button class="score-ok">OK</button>
	</div>
</template>

<script>
import Belle from '../assets/belle1.png';
import Crown from '../assets/crown.png';
import JJLin from '../assets/JJLin.png';

export default {
	name: 'Score',
	props: {
		category: Number,
		score: Number,
		finalScore: Number,
		songName: Array
    },
    data: function() {
        return {
            Belle,
            Crown,
            JJLin,
            song_list: []
        }
    },
	components: {
    },
    mounted() {
        var songName = this.songName;
        this.song_list = songName[this.category];
    }
}
</script>

<style>
#score {
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: 'Comfortaa', cursive;
}
.score-profile {
    color: rgb(0, 162, 162);
    width: 90%;
	max-height: 350px;
    border-radius: 16px;
    background: linear-gradient(to bottom, rgb(57, 255, 252) 20%, rgb(0, 255, 195) 80%);

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 3vw 0;
    margin: 5vw 0;
}
.score-title {
    font-size: 1.8em;
    /* color: rgb(242, 235, 35); */
}
.score-name {
    font-size: 1.5em;
}
.score-crown-container {
    width: 30%;
	height: 25%;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
}
.score-crown {
    width: 30px;
	height: 30px;
    transform: rotate(25deg);
}
.score-img {
    width: 25vw;
    border: rgb(0, 162, 162) solid 2px;
    border-radius: 100%;
    background: white;
    margin: 2vw;
}
.score-container {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: flex-end;
	margin: 10px;
}
.score-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 2.5vw 1vw 0 1vw;
    font-size: 0.8em;
}
.score-info-num {
    color: white;
    font-size: 3em;
}
.score-single-num {
    color: rgb(218, 211, 2);
    font-size: 5em;
}
.score-songs {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
}
.score-songs-title {
    font-size: 2em;
    margin: 3vw 4vw;
}
.score-songs-content {
    width: 90vw;;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    padding: 1.5vw;
    margin: 1vw;
    border-radius: 15px; 
    background: rgba(255, 255, 255, 0.139);
}
.score-songs-content img {
    width: 10vw;
    margin: 10px;
}
.score-ok {
    width: 35vw;
    height: 10vw;
    background: linear-gradient(to bottom, rgb(14, 224, 114), rgb(10, 165, 85));
    color: white;
    border: none;
    border-radius: 50px;
    outline: none;
    margin: 3vw;
}
</style>
