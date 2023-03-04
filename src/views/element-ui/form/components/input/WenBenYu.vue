<template>
  <div class="model-box">
    <el-input type="textarea" :rows="2" placeholder="请输入内容" v-model="textarea"> </el-input>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class WenBenYu extends Vue {
  textarea = ''
}
</script>

<style lang="scss" scoped></style>
