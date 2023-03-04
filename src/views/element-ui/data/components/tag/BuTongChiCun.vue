<template>
  <div class="model-box">
    <el-tag closable>默认标签</el-tag>
    <el-tag size="medium" closable>中等标签</el-tag>
    <el-tag size="small" closable>小型标签</el-tag>
    <el-tag size="mini" closable>超小标签</el-tag>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class BuTongChiCun extends Vue {}
</script>

<style lang="scss" scoped></style>
