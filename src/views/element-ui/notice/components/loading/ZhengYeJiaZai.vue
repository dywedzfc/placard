<template>
  <div class="model-box">
    <el-button type="primary" @click="openFullScreen1" v-loading.fullscreen.lock="fullscreenLoading">
      指令方式
    </el-button>
    <el-button type="primary" @click="openFullScreen2"> 服务方式 </el-button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class ZhengYeJiaZai extends Vue {
  fullscreenLoading = false

  openFullScreen1() {
    this.fullscreenLoading = true
    setTimeout(() => {
      this.fullscreenLoading = false
    }, 2000)
  }
  openFullScreen2() {
    const loading = this.$loading({
      lock: true,
      text: 'Loading',
      spinner: 'el-icon-loading',
      background: 'rgba(0, 0, 0, 0.7)',
    })
    setTimeout(() => {
      loading.close()
    }, 2000)
  }
}
</script>

<style lang="scss" scoped></style>
