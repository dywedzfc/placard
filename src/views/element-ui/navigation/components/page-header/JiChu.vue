<template>
  <div class="model-box">
    <el-page-header @back="goBack" content="详情页面"> </el-page-header>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class JiChu extends Vue {
  goBack() {
    console.log('go back')
  }
}
</script>

<style lang="scss" scoped></style>
