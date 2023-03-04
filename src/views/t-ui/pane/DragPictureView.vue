<template>
  <div class="page-container">
    <h2 id="header">DragPicture 查询面板</h2>
    <p>展示图片的容器，可以进行放大和拖拽操作。</p>

    <page-navigation target="header">
      <page-navigation-item target="base-code">常见页面布局</page-navigation-item>
      <page-navigation-item target="drag-picture-attributes" text="DragPicture Attributes" />
    </page-navigation>

    <h3 id="base-code">基础用法</h3>
    <demo-block>
      <template v-slot:source>
        <t-drag-picture class="my-drag-picture" border :src="picture.src"></t-drag-picture>
      </template>
      <template v-slot:highlight>
        <code-line v-for="(item, index) in baseCode" :key="index" :type="item.type" :code="item.data" />
      </template>
    </demo-block>

    <h3 id="drag-picture-attributes">DragPicture Attributes</h3>
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
// import { attributes } from 'assets/config/drag-picture.config'

@Component({
  components: { CodeLine, DemoBlock, TableProps, PageNavigation, PageNavigationItem },
})
export default class DragPictureView extends Vue {
  picture = { src: '' }
  get baseCode(): object[] {
    return require('assets/config/t-ui/drag-picture.config').code.baseCode
  }
  get tableAttributes(): object[] {
    return require('assets/config/t-ui/drag-picture.config').attributes
  }

  created(): void {
    this.picture.src = require('../../../assets/logo.png')
    // this.picture.src =
    //   'http://pic3.bbzhi.com/xitongbizhi/jingpinzhencang1080pgao/computer_kuan_288841_14.jpg'

    // require('http://pic3.bbzhi.com/xitongbizhi/jingpinzhencang1080pgao/computer_kuan_288841_14.jpg')
  }
}
</script>

<style lang="scss" scoped>
.my-drag-picture {
  height: 50vh;
}
</style>
