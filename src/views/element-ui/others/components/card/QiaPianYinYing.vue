<template>
  <div class="model-box">
    <el-row :gutter="12">
      <el-col :span="8">
        <el-card shadow="always"> 总是显示 </el-card>
      </el-col>
      <el-col :span="8">
        <el-card shadow="hover"> 鼠标悬浮时显示 </el-card>
      </el-col>
      <el-col :span="8">
        <el-card shadow="never"> 从不显示 </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class QiaPianYinYing extends Vue {}
</script>

<style lang="scss" scoped></style>
