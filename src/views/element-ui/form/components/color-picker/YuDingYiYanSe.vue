<template>
  <div class="model-box">
    <el-color-picker v-model="color" show-alpha :predefine="predefineColors"> </el-color-picker>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class YuDingYiYanSe extends Vue {
  color = 'rgba(255, 69, 0, 0.68)'
  predefineColors = [
    '#ff4500',
    '#ff8c00',
    '#ffd700',
    '#90ee90',
    '#00ced1',
    '#1e90ff',
    '#c71585',
    'rgba(255, 69, 0, 0.68)',
    'rgb(255, 120, 0)',
    'hsv(51, 100, 98)',
    'hsva(120, 40, 94, 0.5)',
    'hsl(181, 100%, 37%)',
    'hsla(209, 100%, 56%, 0.73)',
    '#c7158577',
  ]
}
</script>

<style lang="scss" scoped></style>
