<template>
  <div class="model-box">
    <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
    <div style="margin: 15px 0"></div>
    <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
      <el-checkbox v-for="city in cities" :label="city" :key="city">{{ city }}</el-checkbox>
    </el-checkbox-group>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class IndeterminateZhuangTai extends Vue {
  checkAll = false
  checkedCities: any = ['上海', '北京']
  cities: any = ['上海', '北京', '广州', '深圳']
  isIndeterminate = true

  handleCheckAllChange(val: string) {
    this.checkedCities = val ? this.cities : []
    this.isIndeterminate = false
  }
  handleCheckedCitiesChange(value: string) {
    const checkedCount = value.length
    this.checkAll = checkedCount === this.cities.length
    this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length
  }
}
</script>

<style lang="scss" scoped></style>
