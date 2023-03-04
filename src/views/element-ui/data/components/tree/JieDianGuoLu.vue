<template>
  <div class="model-box">
    <el-input placeholder="输入关键字进行过滤" v-model="filterText"> </el-input>
    <el-tree
      class="filter-tree"
      :data="data"
      :props="defaultProps"
      default-expand-all
      :filter-node-method="filterNode"
      ref="tree"
    >
    </el-tree>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'

@Component
export default class JieDianGuoLu extends Vue {
  filterText = ''
  data = [
    {
      id: 1,
      label: '一级 1',
      children: [
        {
          id: 4,
          label: '二级 1-1',
          children: [
            { id: 9, label: '三级 1-1-1' },
            { id: 10, label: '三级 1-1-2' },
          ],
        },
      ],
    },
    {
      id: 2,
      label: '一级 2',
      children: [
        { id: 5, label: '二级 2-1' },
        { id: 6, label: '二级 2-2' },
      ],
    },
    {
      id: 3,
      label: '一级 3',
      children: [
        { id: 7, label: '二级 3-1' },
        { id: 8, label: '二级 3-2' },
      ],
    },
  ]
  defaultProps = { children: 'children', label: 'label' }

  @Watch('filterText') watchFilterText(val: any) {
    ; (this.$refs.tree as any).filter(val)
  }

  filterNode(value: any, data: any) {
    if (!value) { return true }
    return data.label.indexOf(value) !== -1
  }
}
</script>

<style lang="scss" scoped>
.el-input {
  position: relative;
  font-size: 14px;
  display: inline-block;
  width: 100%;
}
.model-box .filter-tree {
  margin-top: 20px;
}
</style>
