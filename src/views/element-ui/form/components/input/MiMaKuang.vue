<template>
  <div class="model-box">
    <el-input placeholder="请输入密码" v-model="input" show-password></el-input>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class MiMaKuang extends Vue {
  input = ''
}
</script>

<style lang="scss" scoped></style>
