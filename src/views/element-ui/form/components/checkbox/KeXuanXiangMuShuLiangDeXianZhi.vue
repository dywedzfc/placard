<template>
  <div class="model-box">
    <el-checkbox-group v-model="checkedCities" :min="1" :max="2">
      <el-checkbox v-for="city in cities" :label="city" :key="city">{{ city }}</el-checkbox>
    </el-checkbox-group>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class KeXuanXiangMuShuLiangDeXianZhi extends Vue {
  checkedCities = ['上海', '北京']
  cities = ['上海', '北京', '广州', '深圳']
}
</script>

<style lang="scss" scoped></style>
