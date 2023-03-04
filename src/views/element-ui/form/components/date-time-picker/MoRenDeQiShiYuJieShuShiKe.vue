<template>
  <div class="model-box">
    <div class="block">
      <span class="demonstration">起始日期时刻为 12:00:00</span>
      <el-date-picker
        v-model="value1"
        type="datetimerange"
        start-placeholder="开始日期"
        end-placeholder="结束日期"
        :default-time="['12:00:00']"
      >
      </el-date-picker>
    </div>
    <div class="block">
      <span class="demonstration">起始日期时刻为 12:00:00，结束日期时刻为 08:00:00</span>
      <el-date-picker
        v-model="value2"
        type="datetimerange"
        align="right"
        start-placeholder="开始日期"
        end-placeholder="结束日期"
        :default-time="['12:00:00', '08:00:00']"
      >
      </el-date-picker>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class MoRenDeQiShiYuJieShuShiKe extends Vue {
  value1 = ''
  value2 = ''
}
</script>

<style lang="scss" scoped>
.model-box {
  display: flex;
}
.block {
  text-align: center;
  border-right: 1px solid #eff2f6;
  flex: 1;

  &:last-child {
    border-right: none;
  }
}

.el-date-editor--datetimerange.el-input__inner {
  width: 380px;
}
</style>
