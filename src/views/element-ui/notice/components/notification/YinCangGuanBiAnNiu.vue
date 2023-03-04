<template>
  <div class="model-box">
    <el-button plain @click="open"> 隐藏关闭按钮 </el-button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class YinCangGuanBiAnNiu extends Vue {
  open() {
    this.$notify.success({ title: 'Info', message: '这是一条没有关闭按钮的消息', showClose: false })
  }
}
</script>

<style lang="scss" scoped></style>
