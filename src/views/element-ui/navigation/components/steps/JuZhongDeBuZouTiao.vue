<template>
  <div class="model-box">
    <el-steps :active="2" align-center>
      <el-step title="步骤1" description="这是一段很长很长很长的描述性文字"></el-step>
      <el-step title="步骤2" description="这是一段很长很长很长的描述性文字"></el-step>
      <el-step title="步骤3" description="这是一段很长很长很长的描述性文字"></el-step>
      <el-step title="步骤4" description="这是一段很长很长很长的描述性文字"></el-step>
    </el-steps>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class JuZhongDeBuZouTiao extends Vue {}
</script>

<style lang="scss" scoped></style>
