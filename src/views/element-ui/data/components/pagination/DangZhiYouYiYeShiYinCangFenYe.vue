<template>
  <div class="model-box">
    <div>
      <el-switch v-model="value"> </el-switch>
      <el-pagination :hide-on-single-page="value" :total="5" layout="prev, pager, next"> </el-pagination>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class DangZhiYouYiYeShiYinCangFenYe extends Vue {
  value = false
}
</script>

<style lang="scss" scoped></style>
