<template>
  <div id="app">
    <router-view 
      :category=category 
      :score=score
      :songName=songName
      :finalScore=finalScore
      @clickOns70="clickOns70" 
      @clickOns80="clickOns80"
      @clickOns90="clickOns90"
      @clickOns00="clickOns00"
      @collectScore="collectScore"
    />
  </div>
</template>

<script>

export default {
  name: 'App',
  beforeCreate () {
    // console.log(this.$liff)
    this.$liff.init(function (data) {})
  },
  data: function() {
    return {
      category: 2,
      score: 0,
      finalScore: 120,
			songName: [
				['告白氣球', '浪費', '演員', '我難過'],
				['說愛你', '演員', '我難過', '溫柔'],
				['溫柔', '告白氣球', '浪費', '說愛你'],
				['浪費', '怎麼了', '我難過', '演員']
			]
    }
  },
  components: {
  },
  methods: {
    clickOns70(data) {
      this.category = data;
      console.log('category: ', this.category);
    },
    clickOns80(data) {
      this.category = data;
      console.log('category: ', this.category);
    },
    clickOns90(data) {
      this.category = data;
      console.log('category: ', this.category);
    },
    clickOns00(data) {
      this.category = data;
      console.log('category: ', this.category);
    },
    collectScore(data) {
      this.score = this.score + data;
      this.finalScore = this.finalScore + this.score;
    }
  }
}
</script>

<style>
body {
  margin: 0;
  background: black;
  color: white;
}
</style>
