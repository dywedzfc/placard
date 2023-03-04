<template>
  <div class="model-box">
    <div class="custom-tree-container">
      <div class="block">
        <p>使用 render-content</p>
        <el-tree
          :data="data"
          show-checkbox
          node-key="id"
          default-expand-all
          :expand-on-click-node="false"
          :render-content="renderContent"
        >
        </el-tree>
      </div>
      <div class="block">
        <p>使用 scoped slot</p>
        <el-tree :data="data" show-checkbox node-key="id" default-expand-all :expand-on-click-node="false">
          <span class="custom-tree-node" slot-scope="{ node, data }">
            <span>{{ node.label }}</span>
            <span>
              <el-button type="text" size="mini" @click="() => append(data)"> Append </el-button>
              <el-button type="text" size="mini" @click="() => remove(node, data)"> Delete </el-button>
            </span>
          </span>
        </el-tree>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

let id = 1000
@Component
export default class ZiDingYiJieDianNeiRong extends Vue {
  data: any = []

  mounted(): void {
    this.data = JSON.parse(
      JSON.stringify([
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
      ])
    )
  }

  append(data: any) {
    const newChild = { id: id++, label: 'testtest', children: [] }
    if (!data.children) { this.$set(data, 'children', []) }

    data.children.push(newChild)
  }
  remove(node: any, data: any) {
    const parent = node.parent
    const children = parent.data.children || parent.data
    const index = children.findIndex((d: any) => d.id === data.id)
    children.splice(index, 1)
  }
  renderContent(h: any, { node, data, store }: any) {
    return h('span', { class: 'custom-tree-node' }, [
      h('span', node.label),
      h('span', [
        h('el-button', { props: { size: 'mini', type: 'text' }, on: { click: () => this.append(data) } }, 'Append'),
        h(
          'el-button',
          { props: { size: 'mini', type: 'text' }, on: { click: () => this.remove(node, data) } },
          'Delete'
        ),
      ]),
    ])
    // return `<span class="custom-tree-node">
    //     <span>${node.label}</span>
    //     <span>
    //       <el-button size="mini" type="text" on-click=${() => this.append(data)}>
    //         Append
    //       </el-button>
    //       <el-button size="mini" type="text" on-click=${() => this.remove(node, data)}>
    //         Delete
    //       </el-button>
    //     </span>
    //   </span>`
  }
}
</script>

<style lang="scss" scoped>
.custom-tree-container {
  display: flex;
  margin: -24px;

  .block {
    flex: 1;
    padding: 8px 24px 24px;

    &:first-child {
      border-right: 1px solid #eff2f6;
    }

    > p {
      text-align: center;
      margin: 0;
      line-height: 4;
    }
  }
}
.custom-tree-node,
::v-deep .custom-tree-node {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  padding-right: 8px;
}
</style>
