<template>
  <div class="model-box">
    <div class="demo-input-suffix">
      属性方式：
      <el-input placeholder="请选择日期" suffix-icon="el-icon-date" v-model="input1"> </el-input>
      <el-input placeholder="请输入内容" prefix-icon="el-icon-search" v-model="input2"> </el-input>
    </div>
    <div class="demo-input-suffix">
      slot 方式：
      <el-input placeholder="请选择日期" v-model="input3">
        <i slot="suffix" class="el-input__icon el-icon-date"></i>
      </el-input>
      <el-input placeholder="请输入内容" v-model="input4">
        <i slot="prefix" class="el-input__icon el-icon-search"></i>
      </el-input>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class DaiIconDeShuRuKuang extends Vue {
  input1 = ''
  input2 = ''
  input3 = ''
  input4 = ''
}
</script>

<style lang="scss" scoped>
.demo-input-suffix {
  margin-bottom: 15px;
}
</style>
