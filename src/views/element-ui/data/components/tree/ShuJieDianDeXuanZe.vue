<template>
  <div class="model-box">
    <el-tree
      :data="data"
      show-checkbox
      default-expand-all
      node-key="id"
      ref="tree"
      highlight-current
      :props="defaultProps"
    >
    </el-tree>
    <div class="buttons">
      <el-button @click="getCheckedNodes">通过 node 获取</el-button>
      <el-button @click="getCheckedKeys">通过 key 获取</el-button>
      <el-button @click="setCheckedNodes">通过 node 设置</el-button>
      <el-button @click="setCheckedKeys">通过 key 设置</el-button>
      <el-button @click="resetChecked">清空</el-button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class ShuJieDianDeXuanZe extends Vue {
  data() {
    return {
      data: [
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
      ],
      defaultProps: { children: 'children', label: 'label' },
    }
  }

  getCheckedNodes() {
    console.log((this.$refs.tree as any).getCheckedNodes())
  }
  getCheckedKeys() {
    console.log((this.$refs.tree as any).getCheckedKeys())
  }
  setCheckedNodes() {
    ; (this.$refs.tree as any).setCheckedNodes([
      { id: 5, label: '二级 2-1' },
      { id: 9, label: '三级 1-1-1' },
    ])
  }
  setCheckedKeys() {
    ; (this.$refs.tree as any).setCheckedKeys([3])
  }
  resetChecked() {
    ; (this.$refs.tree as any).setCheckedKeys([])
  }
}
</script>

<style lang="scss" scoped>
.model-box .buttons {
  margin-top: 20px;
}
</style>
