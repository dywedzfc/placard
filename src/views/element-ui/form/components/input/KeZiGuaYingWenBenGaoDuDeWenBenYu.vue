<template>
  <div class="model-box">
    <el-input type="textarea" autosize placeholder="请输入内容" v-model="textarea1"> </el-input>
    <div style="margin: 20px 0"></div>
    <el-input type="textarea" :autosize="{ minRows: 2, maxRows: 4 }" placeholder="请输入内容" v-model="textarea2">
    </el-input>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class KeZiGuaYingWenBenGaoDuDeWenBenYu extends Vue {
  textarea1 = ''
  textarea2 = ''
}
</script>

<style lang="scss" scoped></style>
