<template>
  <div class="model-box">
    <template>
      <el-transfer v-model="value" :props="{ key: 'value', label: 'desc' }" :data="data"> </el-transfer>
    </template>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class ShuJuXiangShuXingBieMing extends Vue {
  data: any = []
  value = []

  mounted(): void {
    this.generateData()
  }

  generateData() {
    const data: any = []
    for (let i = 1; i <= 15; i++) {
      data.push({ value: i, desc: `备选项 ${i}`, disabled: i % 4 === 0 })
    }
    this.data = data
  }
}
</script>

<style lang="scss" scoped></style>
