<template>
  <div class="page-container">
    <h2 id="header">Image 图片</h2>
    <p>图片容器，在保留原生img的特性下，支持懒加载，自定义占位、加载失败等</p>
    <h3 id="ji-chu-yong-fa">基础用法</h3>
    <demo-block>
      <template v-slot:source>
        <JiChuYongFa />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in jiChuYongFa" :key="index" :type="item.type" :code="item.data" /></template>
    </demo-block>
    <h3 id="zhan-wei-nei-rong">占位内容</h3>
    <demo-block>
      <template v-slot:source>
        <ZhanWeiNeiRong />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in zhanWeiNeiRong" :key="index" :type="item.type" :code="item.data" /></template>
    </demo-block>
    <h3 id="jia-zai-shi-bai">加载失败</h3>
    <demo-block>
      <template v-slot:source>
        <JiaZaiShiBai />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in jiaZaiShiBai" :key="index" :type="item.type" :code="item.data" /></template>
    </demo-block>
    <h3 id="lan-jia-zai">懒加载</h3>
    <demo-block>
      <template v-slot:source>
        <LanJiaZai />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in lanJiaZai" :key="index" :type="item.type" :code="item.data" /></template>
    </demo-block>
    <h3 id="da-tu-yu-lan">大图预览</h3>
    <demo-block>
      <template v-slot:source>
        <DaTuYuLan />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in daTuYuLan" :key="index" :type="item.type" :code="item.data" /></template>
    </demo-block>
    <h3 id="attributes">Attributes</h3>
    <table-props :data="attributes" />
    <h3 id="events">Events</h3>
    <table-events :data="events" />
    <h3 id="slots">Slots</h3>
    <table-slot :data="slots" />
    <br />
    <br />
    <br />

    <page-navigation target="header">
      <page-navigation-item target="ji-chu-yong-fa">基础用法</page-navigation-item>
      <page-navigation-item target="zhan-wei-nei-rong">占位内容</page-navigation-item>
      <page-navigation-item target="jia-zai-shi-bai">加载失败</page-navigation-item>
      <page-navigation-item target="lan-jia-zai">懒加载</page-navigation-item>
      <page-navigation-item target="da-tu-yu-lan">大图预览</page-navigation-item>
      <page-navigation-item target="attributes">Attributes</page-navigation-item>
      <page-navigation-item target="events">Events</page-navigation-item>
      <page-navigation-item target="slots">Slots</page-navigation-item>
    </page-navigation>
  </div>
</template>
        
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import CodeLine from 'components/CodeLine.vue'
import DemoBlock from 'components/DemoBlock.vue'
import TableProps from 'components/TableProps.vue'
import TableMethods from 'components/TableMethods.vue'
import TableEvents from 'components/TableEvents.vue'
import TableSlot from 'components/TableSlot.vue'
import PageNavigation from 'components/PageNavigation.vue'
import PageNavigationItem from 'components/PageNavigationItem.vue'
import JiChuYongFa from './components/image/JiChuYongFa.vue'
import ZhanWeiNeiRong from './components/image/ZhanWeiNeiRong.vue'
import JiaZaiShiBai from './components/image/JiaZaiShiBai.vue'
import LanJiaZai from './components/image/LanJiaZai.vue'
import DaTuYuLan from './components/image/DaTuYuLan.vue'

@Component({ components: { CodeLine, DemoBlock, TableProps, TableMethods, TableEvents, TableSlot, PageNavigation, PageNavigationItem, JiChuYongFa, ZhanWeiNeiRong, JiaZaiShiBai, LanJiaZai, DaTuYuLan }})
export default class ImageView extends Vue {
  get jiChuYongFa(): object[] { return require('assets/config/element-ui/image.config.json').code.jiChuYongFa }
  get zhanWeiNeiRong(): object[] { return require('assets/config/element-ui/image.config.json').code.zhanWeiNeiRong }
  get jiaZaiShiBai(): object[] { return require('assets/config/element-ui/image.config.json').code.jiaZaiShiBai }
  get lanJiaZai(): object[] { return require('assets/config/element-ui/image.config.json').code.lanJiaZai }
  get daTuYuLan(): object[] { return require('assets/config/element-ui/image.config.json').code.daTuYuLan }
  get attributes(): object[] { return require('assets/config/element-ui/image.config.json').attributes }
  get events(): object[] { return require('assets/config/element-ui/image.config.json').events }
  get slots(): object[] { return require('assets/config/element-ui/image.config.json').slots }
}
</script>