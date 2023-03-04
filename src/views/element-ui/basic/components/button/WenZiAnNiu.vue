<template>
  <div class="model-box">
    <el-button type="text">文字按钮</el-button>
    <el-button type="text" disabled>文字按钮</el-button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class WenZiAnNiu extends Vue {}
</script>

<style lang="scss" scoped></style>
