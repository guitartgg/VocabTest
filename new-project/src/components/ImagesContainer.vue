<template>
  <div>
    <h1>Images Container</h1>
<div class="container">
    <image-container class="item"/>
    <image-container class="item"/>
    <image-container class="item"/>
    <image-container class="item"/>
    </div>
  </div>
</template>
<script>
import ImageContainer from "./ImageContainer";

export default {
  components: {
    ImageContainer
  }
};
</script>
<style>
.container{
    display:flex; 
    flex-direction: row;
}
</style>