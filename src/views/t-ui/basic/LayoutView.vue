<template>
  <div class="page-container">
    <h2 id="header">Layout 边界布局</h2>
    <p>用于整体布局，方便快速搭建页面的基础结构。</p>

    <page-navigation target="header">
      <page-navigation-item target="base-code">基础布局</page-navigation-item>
      <page-navigation-item target="border-code">边框线</page-navigation-item>
      <page-navigation-item target="show-code">侧边面板展示与隐藏</page-navigation-item>
      <page-navigation-item target="layout-attributes" text="Layout Attributes" />
    </page-navigation>

    <h3 id="base-code">基础布局</h3>
    <demo-block>
      <template v-slot:source>
        <t-layout class="my-layout" left="200" right="200">
          <template #header>header</template>
          <template #left>left</template>
          <template>body</template>
          <template #right>right</template>
          <template #footer>footer</template>
        </t-layout>
      </template>
      <template v-slot:highlight>
        <code-line v-for="(item, index) in baseCode" :key="index" :type="item.type" :code="item.data" />
      </template>
    </demo-block>

    <h3 id="border-code">边框线</h3>
    <demo-block>
      <template v-slot:source>
        <t-layout class="my-layout my-layout__border" border left="200" right="200">
          <template #header>header</template>
          <template #left>left</template>
          <template>body</template>
          <template #right>right</template>
          <template #footer>footer</template>
        </t-layout>

        <t-layout class="my-layout my-layout__border" innter-border left="200" right="200">
          <template #header>header</template>
          <template #left>left</template>
          <template>body</template>
          <template #right>right</template>
          <template #footer>footer</template>
        </t-layout>
      </template>
      <template v-slot:highlight>
        <code-line v-for="(item, index) in borderCode" :key="index" :type="item.type" :code="item.data" />
      </template>
    </demo-block>

    <h3 id="show-code">侧边面板展示与隐藏</h3>
    <demo-block>
      <template v-slot:source>
        <t-layout class="my-layout" left="200" left-strip right="200" right-strip>
          <template #header>header</template>
          <template #left>left</template>
          <template>body</template>
          <template #right>right</template>
          <template #footer>footer</template>
        </t-layout>
      </template>
      <template v-slot:highlight>
        <code-line v-for="(item, index) in sideCode" :key="index" :type="item.type" :code="item.data" />
      </template>
    </demo-block>

    <h3 id="drag-code">拖拽底部面板</h3>
    <demo-block>
      <template v-slot:source>
        <t-layout class="my-layout" left="200" right="200" footer-strip>
          <template #header>header</template>
          <template #left>left</template>
          <template>body</template>
          <template #right>right</template>
          <template #footer>footer</template>
        </t-layout>
      </template>
      <template v-slot:highlight>
        <code-line v-for="(item, index) in footerCode" :key="index" :type="item.type" :code="item.data" />
      </template>
    </demo-block>

    <h3 id="layout-attributes">Layout Attributes</h3>
    <table-props :data="tableAttributes" />
    <br />
    <br />
    <br />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import CodeLine from 'components/CodeLine.vue'
import DemoBlock from 'components/DemoBlock.vue'
import TableProps from 'components/TableProps.vue'
import PageNavigation from 'components/PageNavigation.vue'
import PageNavigationItem from 'components/PageNavigationItem.vue'

@Component({
  components: { CodeLine, DemoBlock, TableProps, PageNavigation, PageNavigationItem },
})
export default class LayoutView extends Vue {
  get baseCode(): object[] {
    return require('assets/config/t-ui/layout.config').code.baseCode
  }
  get borderCode(): object[] {
    return require('assets/config/t-ui/layout.config').code.borderCode
  }
  get sideCode(): object[] {
    return require('assets/config/t-ui/layout.config').code.sideCode
  }
  get footerCode(): object[] {
    return require('assets/config/t-ui/layout.config').code.footerCode
  }
  get tableAttributes(): object[] {
    return require('assets/config/t-ui/layout.config').attributes
  }
}
</script>

<style lang="scss" scoped>
.my-layout {
  background-color: #ffffff;
  height: 300px;

  &__border.t-border {
    border-color: #8497ad;
    margin-bottom: 40px;

    ::v-deep .t-layout-header,
    ::v-deep .t-layout-left,
    ::v-deep .t-layout-right,
    ::v-deep .t-layout-footer {
      border-color: #8497ad;
    }
  }

  &__border::v-deep {
    .t-layout-header.t-border,
    .t-layout-left.t-border,
    .t-layout-right.t-border,
    .t-layout-footer.t-border {
      border-color: #8497ad;
    }
  }
}
.my-layout::v-deep {
  .t-layout-header {
    background-color: #b3c0d1;
  }
  .t-layout-left {
    background-color: #d3dce6;
  }
  .t-layout-body {
    background-color: #e9eef3;
  }
  .t-layout-right {
    background-color: #d3dce6;
  }
  .t-layout-footer {
    background-color: #b3c0d1;
  }
  .t-layout-header,
  .t-layout-left .t-layout-wrapper,
  .t-layout-body,
  .t-layout-right .t-layout-wrapper,
  .t-layout-footer {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
