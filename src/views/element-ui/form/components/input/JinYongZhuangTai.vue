<template>
  <div class="model-box">
    <el-input placeholder="请输入内容" v-model="input" :disabled="true"> </el-input>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class JinYongZhuangTai extends Vue {
  input = ''
}
</script>

<style lang="scss" scoped></style>
