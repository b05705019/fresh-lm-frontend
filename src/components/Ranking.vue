<template>
  	<div id="ranking">
		<div class="ranking"></div>
		<router-link to="/Point">To point</router-link>
	</div>
</template>

<script>
export default {
	name: 'Ranking',
	props: {
		category: String,
		score: Number,
		finalScore: Number,
		songName: Array
	},
	components: {
	}
}
</script>

<style>

</style>
