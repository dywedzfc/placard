<template>
  <div class="model-box">
    <template>
      <el-transfer
        filterable
        :filter-method="filterMethod"
        filter-placeholder="请输入城市拼音"
        v-model="value"
        :data="data"
      >
      </el-transfer>
    </template>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class KeSouSuo extends Vue {
  data: any = []
  value = []

  mounted(): void {
    this.generateData()
  }

  generateData() {
    const data: any = []
    const cities = ['上海', '北京', '广州', '深圳', '南京', '西安', '成都']
    const pinyin = ['shanghai', 'beijing', 'guangzhou', 'shenzhen', 'nanjing', 'xian', 'chengdu']
    cities.forEach((city, index) => {
      data.push({ label: city, key: index, pinyin: pinyin[index] })
    })
    this.data = data
  }
  filterMethod(query: string, item: any) {
    return item.pinyin.indexOf(query) > -1
  }
}
</script>

<style lang="scss" scoped></style>
