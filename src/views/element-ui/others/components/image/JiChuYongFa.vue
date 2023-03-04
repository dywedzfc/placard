<template>
  <div class="model-box">
    <div class="demo-image">
      <div class="block" v-for="fit in fits" :key="fit">
        <span class="demonstration">{{ fit }}</span>
        <el-image
          style="width: 100px; height: 100px"
          :src="url"
          :fit="fit"
        ></el-image>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class JiChuYongFa extends Vue {
  fits = ['fill', 'contain', 'cover', 'none', 'scale-down']
  url =
    'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
}
</script>

<style lang="scss" scoped>
.demo-image .block {
  width: 20%;
}
</style>
