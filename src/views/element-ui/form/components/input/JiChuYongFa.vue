<template>
  <div class="model-box">
    <el-input v-model="input" placeholder="请输入内容"></el-input>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class JiChuYongFa extends Vue {
  input = ''
}
</script>

<style lang="scss" scoped></style>
