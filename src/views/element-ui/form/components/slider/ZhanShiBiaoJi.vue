<template>
  <div class="model-box">
    <div class="block">
      <el-slider v-model="value" range :marks="marks"> </el-slider>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class ZhanShiBiaoJi extends Vue {
  value = [30, 60]
  marks = {
    0: '0°C',
    8: '8°C',
    37: '37°C',
    50: { style: { color: '#1989FA' }, label: this.$createElement('strong', '50%') },
  }
}
</script>

<style lang="scss" scoped></style>
