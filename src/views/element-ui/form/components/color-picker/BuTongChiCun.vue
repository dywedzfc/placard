<template>
  <div class="model-box">
    <el-color-picker v-model="color"></el-color-picker>
    <el-color-picker v-model="color" size="medium"></el-color-picker>
    <el-color-picker v-model="color" size="small"></el-color-picker>
    <el-color-picker v-model="color" size="mini"></el-color-picker>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class BuTongChiCun extends Vue {
  color = '#409EFF'
}
</script>

<style lang="scss" scoped></style>
