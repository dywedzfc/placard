<template>
  <div class="model-box">
    <el-input-number v-model="num1"></el-input-number>
    <el-input-number size="medium" v-model="num2"></el-input-number>
    <el-input-number size="small" v-model="num3"></el-input-number>
    <el-input-number size="mini" v-model="num4"></el-input-number>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class ChiCun extends Vue {
  num1 = 1
  num2 = 1
  num3 = 1
  num4 = 1
}
</script>

<style lang="scss" scoped></style>
