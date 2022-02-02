<template>
  <div>
    <img id="speaker" src="../assets/noun-speaker.png">
<div class="container">
    <image-container class="item"/>
    <image-container class="item"/>
    <image-container class="item"/>
    <image-container class="item"/>
    <!-- <img src="this.Image1"> -->
    <!-- <image-container class="item" v-for="item in imgArray2" :key="item.imgArray2" src="item.imgArray2">{{item.imgArray2}}</image-container> -->
    <!-- <button @click="test()">test</button> -->
    </div>
  </div>
</template>
<script>
import ImageContainer from "./ImageContainer";
import Image1 from "../assets/child-soccer.jpg"
import Image2 from "../assets/rock-climbing.jpg"
import Image3 from "../assets/spaghetti.jpg"
import Image4 from "../assets/tennis.jpg"
import Image5 from "../assets/noun-speaker.png"

 imgArray2 : [Image1, Image2, Image3, Image4]
export default {
  components: {
    ImageContainer
  },
};
</script>
<style>
.container{
    display:flex; 
    flex-direction: row;
     flex-wrap: wrap;
justify-content: center;
}
.item {
  order: 5;
  margin: 1rem;
 
}
#speaker{
  height: 4rem;
  width: 4rem;
}
</style>