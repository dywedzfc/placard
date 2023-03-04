<template>
  <div class="model-box">
    <el-button :plain="true" @click="openCenter">文字居中</el-button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class WenZiJuZhong extends Vue {
  openCenter() {
    this.$message({ message: '居中的文字', center: true })
  }
}
</script>

<style lang="scss" scoped></style>
