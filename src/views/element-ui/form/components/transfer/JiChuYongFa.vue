<template>
  <div class="model-box">
    <template>
      <el-transfer v-model="value" :data="data"></el-transfer>
    </template>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class JiChuYongFa extends Vue {
  data: any = []
  value = [1, 4]

  mounted(): void {
    this.generateData()
  }

  generateData() {
    const data: any = []
    for (let i = 1; i <= 15; i++) {
      data.push({ key: i, label: `备选项 ${i}`, disabled: i % 4 === 0 })
    }
    this.data = data
  }
}
</script>

<style lang="scss" scoped></style>
