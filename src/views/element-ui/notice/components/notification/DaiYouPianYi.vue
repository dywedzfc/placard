<template>
  <div class="model-box">
    <el-button plain @click="open"> 偏移的消息 </el-button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class DaiYouPianYi extends Vue {
  open() {
    this.$notify({ title: '偏移', message: '这是一条带有偏移的提示消息', offset: 100 })
  }
}
</script>

<style lang="scss" scoped></style>
