<template>
  <div class="model-box">
    <el-alert title="不可关闭的 alert" type="success" :closable="false"> </el-alert>
    <el-alert title="自定义 close-text" type="info" close-text="知道了"> </el-alert>
    <el-alert title="设置了回调的 alert" type="warning" @close="hello"> </el-alert>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class ZiDingYiGuanBiAnNiu extends Vue {
  hello() {
    alert('Hello World!')
  }
}
</script>

<style lang="scss" scoped></style>
