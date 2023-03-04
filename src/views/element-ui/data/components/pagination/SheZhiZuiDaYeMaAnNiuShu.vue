<template>
  <div class="model-box">
    <el-pagination :page-size="20" :pager-count="11" layout="prev, pager, next" :total="1000"> </el-pagination>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class SheZhiZuiDaYeMaAnNiuShu extends Vue {}
</script>

<style lang="scss" scoped></style>
