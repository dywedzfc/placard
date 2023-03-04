<template>
  <div class="model-box">
    <div class="container">
      <div class="block">
        <span class="demonstration">周</span>
        <el-date-picker v-model="value1" type="week" format="yyyy 第 WW 周" placeholder="选择周"> </el-date-picker>
      </div>
      <div class="block">
        <span class="demonstration">月</span>
        <el-date-picker v-model="value2" type="month" placeholder="选择月"> </el-date-picker>
      </div>
    </div>
    <div class="container">
      <div class="block">
        <span class="demonstration">年</span>
        <el-date-picker v-model="value3" type="year" placeholder="选择年"> </el-date-picker>
      </div>
      <div class="block">
        <span class="demonstration">多个日期</span>
        <el-date-picker type="dates" v-model="value4" placeholder="选择一个或多个日期"> </el-date-picker>
      </div>
    </div>
    <div class="container">
      <div class="block">
        <span class="demonstration">多个月</span>
        <el-date-picker type="months" v-model="value5" placeholder="选择一个或多个月"> </el-date-picker>
      </div>
      <div class="block">
        <span class="demonstration">多个年</span>
        <el-date-picker type="years" v-model="value6" placeholder="选择一个或多个年"> </el-date-picker>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class QiTaRiQiDanWei extends Vue {
  value1 = ''
  value2 = ''
  value3 = ''
  value4 = ''
  value5 = ''
  value6 = ''
}
</script>

<style lang="scss" scoped>
.model-box {
  display: flex;
}
.block {
  text-align: center;

  &:last-child {
    border-right: none;
  }

  .demonstration {
    display: block;
    color: #8492a6;
    font-size: 14px;
    margin-bottom: 20px;
  }
}
.container {
  flex: 1;
  border-right: 1px solid #eff2f6;

  &:last-child {
    border-right: 0;
  }

  .block:last-child {
    border-top: 1px solid #eff2f6;
  }
}
</style>
