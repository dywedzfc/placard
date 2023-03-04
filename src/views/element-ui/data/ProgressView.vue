<template>
  <div class="page-container">
    <h2 id="header">Progress 进度条</h2>
    <p>用于展示操作进度，告知用户当前状态和预期。</p>
    <h3 id="xian-xing-jin-du-tiao">线形进度条</h3>
    <demo-block>
      <template v-slot:source>
        <XianXingJinDuTiao />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in xianXingJinDuTiao" :key="index" :type="item.type" :code="item.data" /></template>
    </demo-block>
    <h3 id="bai-fen-bi-nei-xian">百分比内显</h3>
    <p>百分比不占用额外控件，适用于文件上传等场景。</p>
    <demo-block>
      <template v-slot:source>
        <BaiFenBiNeiXian />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in baiFenBiNeiXian" :key="index" :type="item.type" :code="item.data" /></template>
    </demo-block>
    <h3 id="zi-ding-yi-yan-se">自定义颜色</h3>
    <p>可以通过 <code>color</code> 设置进度条的颜色，<code>color</code> 可以接受颜色字符串，函数和数组。</p>
    <demo-block>
      <template v-slot:source>
        <ZiDingYiYanSe />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in ziDingYiYanSe" :key="index" :type="item.type" :code="item.data" /></template>
    </demo-block>
    <h3 id="huan-xing-jin-du-tiao">环形进度条</h3>
    <p>Progress 组件可通过 <code>type</code> 属性来指定使用环形进度条，在环形进度条中，还可以通过 <code>width</code> 属性来设置其大小。</p>
    <demo-block>
      <template v-slot:source>
        <HuanXingJinDuTiao />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in huanXingJinDuTiao" :key="index" :type="item.type" :code="item.data" /></template>
    </demo-block>
    <h3 id="yi-biao-pan-xing-jin-du-tiao">仪表盘形进度条</h3>
    <demo-block>
      <template v-slot:source>
        <YiBiaoPanXingJinDuTiao />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in yiBiaoPanXingJinDuTiao" :key="index" :type="item.type" :code="item.data" /></template>
    </demo-block>
    <h3 id="attributes">Attributes</h3>
    <table-props :data="attributes" />
    <br />
    <br />
    <br />

    <page-navigation target="header">
      <page-navigation-item target="xian-xing-jin-du-tiao">线形进度条</page-navigation-item>
      <page-navigation-item target="bai-fen-bi-nei-xian">百分比内显</page-navigation-item>
      <page-navigation-item target="zi-ding-yi-yan-se">自定义颜色</page-navigation-item>
      <page-navigation-item target="huan-xing-jin-du-tiao">环形进度条</page-navigation-item>
      <page-navigation-item target="yi-biao-pan-xing-jin-du-tiao">仪表盘形进度条</page-navigation-item>
      <page-navigation-item target="attributes">Attributes</page-navigation-item>
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
import XianXingJinDuTiao from './components/progress/XianXingJinDuTiao.vue'
import BaiFenBiNeiXian from './components/progress/BaiFenBiNeiXian.vue'
import ZiDingYiYanSe from './components/progress/ZiDingYiYanSe.vue'
import HuanXingJinDuTiao from './components/progress/HuanXingJinDuTiao.vue'
import YiBiaoPanXingJinDuTiao from './components/progress/YiBiaoPanXingJinDuTiao.vue'

@Component({ components: { CodeLine, DemoBlock, TableProps, TableMethods, TableEvents, TableSlot, PageNavigation, PageNavigationItem, XianXingJinDuTiao, BaiFenBiNeiXian, ZiDingYiYanSe, HuanXingJinDuTiao, YiBiaoPanXingJinDuTiao }})
export default class ProgressView extends Vue {
  get xianXingJinDuTiao(): object[] { return require('assets/config/element-ui/progress.config.json').code.xianXingJinDuTiao }
  get baiFenBiNeiXian(): object[] { return require('assets/config/element-ui/progress.config.json').code.baiFenBiNeiXian }
  get ziDingYiYanSe(): object[] { return require('assets/config/element-ui/progress.config.json').code.ziDingYiYanSe }
  get huanXingJinDuTiao(): object[] { return require('assets/config/element-ui/progress.config.json').code.huanXingJinDuTiao }
  get yiBiaoPanXingJinDuTiao(): object[] { return require('assets/config/element-ui/progress.config.json').code.yiBiaoPanXingJinDuTiao }
  get attributes(): object[] { return require('assets/config/element-ui/progress.config.json').attributes }
}
</script>