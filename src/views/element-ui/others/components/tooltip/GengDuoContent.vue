<template>
  <div class="model-box">
    <el-tooltip placement="top">
      <div slot="content">多行信息<br />第二行信息</div>
      <el-button>Top center</el-button>
    </el-tooltip>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class GengDuoContent extends Vue {}
</script>

<style lang="scss" scoped></style>
