<template>
  <div class="model-box">
    <el-button plain @click="open1"> 右上角 </el-button>
    <el-button plain @click="open2"> 右下角 </el-button>
    <el-button plain @click="open3"> 左下角 </el-button>
    <el-button plain @click="open4"> 左上角 </el-button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class ZiDingYiDanChuWeiZhi extends Vue {
  open1() {
    this.$notify({ title: '自定义位置', message: '右上角弹出的消息' })
  }
  open2() {
    this.$notify({ title: '自定义位置', message: '右下角弹出的消息', position: 'bottom-right' })
  }
  open3() {
    this.$notify({ title: '自定义位置', message: '左下角弹出的消息', position: 'bottom-left' })
  }
  open4() {
    this.$notify({ title: '自定义位置', message: '左上角弹出的消息', position: 'top-left' })
  }
}
</script>

<style lang="scss" scoped></style>
