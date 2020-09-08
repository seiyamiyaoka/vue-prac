<template>
  <div class="home">
    <canvas></canvas>
    <button @click="upmove">上</button>
    <button @click="leftmove">右</button>
    <button @click="rightmove">左</button>
    <button @click="downmove">下</button>
    <button @click="fire">attack</button>
  </div>
</template>

<script>
// @ is an alias to /src
import image from "../assets/diversan.png"
import fireImage from "../assets/fire.png"

export default {
  name: 'Robot',
  data() {
    return {
      canvas: null,
      ctx: null,
      imgTag: null,
      up: 0,
      right: 0,
      bottom: 0,
      left: 0,
      defaultX: 10,
      defaultY: 0
    }
  },
  mounted() {
    this.imgTag = new Image();
    this.canvas = document.getElementsByTagName("canvas")[0]
    let ctx = this.canvas.getContext("2d");
    let x = this.canvas.width;
    let y = 0;
    const setImage = this.imgTag

    setImage.onload = animate;
    setImage.src = image;

    function animate() {
      ctx.clearRect(0, 0, 500, 500);  // clear canvas
      ctx.drawImage(setImage, x, y, 20, 20);                       // draw image at current position
      x -= 4;
      if (x > 10) requestAnimationFrame(animate)        // loop
    }
  },
  methods: {
    upmove() {
      this.canvas = document.getElementsByTagName("canvas")[0]
      let ctx = this.canvas.getContext("2d");
      ctx.clearRect(0, 0, 500, 500)
      this.up -= 5
      this.defaultY += this.up
      ctx.drawImage(this.imgTag, this.defaultX, this.defaultY, 20, 20)
    },
    downmove() {
      this.canvas = document.getElementsByTagName("canvas")[0]
      let ctx = this.canvas.getContext("2d");
      ctx.clearRect(0, 0, 500, 500)
      this.up += 5
      this.defaultY += this.up
      ctx.drawImage(this.imgTag, this.defaultX, this.defaultY, 20, 20)
    },
    rightmove() {
      this.canvas = document.getElementsByTagName("canvas")[0]
      let ctx = this.canvas.getContext("2d");
      ctx.clearRect(0, 0, 500, 500)
      this.right -= 5
      this.defaultX += this.right
      ctx.drawImage(this.imgTag, this.defaultX, this.defaultY, 20, 20)
    },
    leftmove() {
      this.canvas = document.getElementsByTagName("canvas")[0]
      let ctx = this.canvas.getContext("2d");
      ctx.clearRect(0, 0, 500, 500)
      this.right += 5
      this.defaultX += this.right
      ctx.drawImage(this.imgTag, this.defaultX , this.defaultY, 20, 20)
    },
    fire() {
      this.fireImageTag = new Image();
      this.canvas = document.getElementsByTagName("canvas")[0]
      let ctx = this.canvas.getContext("2d");
      let x = this.defaultX;
      const setImage = this.fireImageTag

      setImage.onload = animate;
      setImage.src = fireImage;
      function animate() {
        ctx.drawImage(setImage, x + 10, 30, 20, 20);
        x += 1;
        if (x < 250) requestAnimationFrame(animate)
        if (x > 250) {
          ctx.clearRect(0, 0, 500, 500)
          ctx.drawImage(this.imgTag, this.defaultX , this.defaultY, 20, 20)
        }
      }
    }
  }
}
</script>

<style scoped>
canvas {
  width: 500px;
  height: 500px;
  background-color: antiquewhite;
}
</style>
