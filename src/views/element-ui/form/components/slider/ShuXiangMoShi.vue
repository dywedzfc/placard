<template>
  <div class="model-box">
    <div class="block">
      <el-slider v-model="value" vertical height="200px"> </el-slider>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class ShuXiangMoShi extends Vue {
  value = 0
}
</script>

<style lang="scss" scoped></style>
