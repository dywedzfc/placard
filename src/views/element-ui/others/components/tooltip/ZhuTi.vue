<template>
  <div class="model-box">
    <el-tooltip content="Top center" placement="top">
      <el-button>Dark</el-button>
    </el-tooltip>
    <el-tooltip content="Bottom center" placement="bottom" effect="light">
      <el-button>Light</el-button>
    </el-tooltip>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class ZhuTi extends Vue {}
</script>

<style lang="scss" scoped></style>
