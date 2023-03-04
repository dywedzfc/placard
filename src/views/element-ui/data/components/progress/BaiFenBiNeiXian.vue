<template>
  <div class="model-box">
    <el-progress :text-inside="true" :stroke-width="26" :percentage="70"></el-progress>
    <el-progress :text-inside="true" :stroke-width="24" :percentage="100" status="success"></el-progress>
    <el-progress :text-inside="true" :stroke-width="22" :percentage="80" status="warning"></el-progress>
    <el-progress :text-inside="true" :stroke-width="20" :percentage="50" status="exception"></el-progress>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class BaiFenBiNeiXian extends Vue {}
</script>

<style lang="scss" scoped></style>
