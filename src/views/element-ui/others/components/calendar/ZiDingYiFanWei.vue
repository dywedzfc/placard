<template>
  <div class="model-box">
    <el-calendar :range="['2019-03-04', '2019-03-24']"></el-calendar>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class ZiDingYiFanWei extends Vue {}
</script>

<style lang="scss" scoped></style>
