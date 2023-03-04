<template>
  <div class="page-container">
    <h2 id="header">Button 按钮</h2>
    <p>常用的操作按钮。</p>
    <h3 id="ji-chu-yong-fa">基础用法</h3>
    <p>基础的按钮用法。</p>
    <demo-block>
      <template v-slot:source>
        <JiChuYongFa />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in jiChuYongFa" :key="index" :type="item.type" :code="item.data" /></template>
    </demo-block>
    <h3 id="jin-yong-zhuang-tai">禁用状态</h3>
    <p>按钮不可用状态。</p>
    <demo-block>
      <template v-slot:source>
        <JinYongZhuangTai />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in jinYongZhuangTai" :key="index" :type="item.type" :code="item.data" /></template>
    </demo-block>
    <h3 id="wen-zi-an-niu">文字按钮</h3>
    <p>没有边框和背景色的按钮。</p>
    <demo-block>
      <template v-slot:source>
        <WenZiAnNiu />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in wenZiAnNiu" :key="index" :type="item.type" :code="item.data" /></template>
    </demo-block>
    <h3 id="tu-biao-an-niu">图标按钮</h3>
    <p>带图标的按钮可增强辨识度（有文字）或节省空间（无文字）。</p>
    <demo-block>
      <template v-slot:source>
        <TuBiaoAnNiu />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in tuBiaoAnNiu" :key="index" :type="item.type" :code="item.data" /></template>
    </demo-block>
    <h3 id="an-niu-zu">按钮组</h3>
    <p>以按钮组的方式出现，常用于多项类似操作。</p>
    <demo-block>
      <template v-slot:source>
        <AnNiuZu />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in anNiuZu" :key="index" :type="item.type" :code="item.data" /></template>
    </demo-block>
    <h3 id="jia-zai-zhong">加载中</h3>
    <p>点击按钮后进行数据加载操作，在按钮上显示加载状态。</p>
    <demo-block>
      <template v-slot:source>
        <JiaZaiZhong />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in jiaZaiZhong" :key="index" :type="item.type" :code="item.data" /></template>
    </demo-block>
    <h3 id="bu-tong-chi-cun">不同尺寸</h3>
    <p>Button 组件提供除了默认值以外的三种尺寸，可以在不同场景下选择合适的按钮尺寸。</p>
    <demo-block>
      <template v-slot:source>
        <BuTongChiCun />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in buTongChiCun" :key="index" :type="item.type" :code="item.data" /></template>
    </demo-block>
    <h3 id="attributes">Attributes</h3>
    <table-props :data="attributes" />
    <br />
    <br />
    <br />

    <page-navigation target="header">
      <page-navigation-item target="ji-chu-yong-fa">基础用法</page-navigation-item>
      <page-navigation-item target="jin-yong-zhuang-tai">禁用状态</page-navigation-item>
      <page-navigation-item target="wen-zi-an-niu">文字按钮</page-navigation-item>
      <page-navigation-item target="tu-biao-an-niu">图标按钮</page-navigation-item>
      <page-navigation-item target="an-niu-zu">按钮组</page-navigation-item>
      <page-navigation-item target="jia-zai-zhong">加载中</page-navigation-item>
      <page-navigation-item target="bu-tong-chi-cun">不同尺寸</page-navigation-item>
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
import JiChuYongFa from './components/button/JiChuYongFa.vue'
import JinYongZhuangTai from './components/button/JinYongZhuangTai.vue'
import WenZiAnNiu from './components/button/WenZiAnNiu.vue'
import TuBiaoAnNiu from './components/button/TuBiaoAnNiu.vue'
import AnNiuZu from './components/button/AnNiuZu.vue'
import JiaZaiZhong from './components/button/JiaZaiZhong.vue'
import BuTongChiCun from './components/button/BuTongChiCun.vue'

@Component({ components: { CodeLine, DemoBlock, TableProps, TableMethods, TableEvents, TableSlot, PageNavigation, PageNavigationItem, JiChuYongFa, JinYongZhuangTai, WenZiAnNiu, TuBiaoAnNiu, AnNiuZu, JiaZaiZhong, BuTongChiCun }})
export default class ButtonView extends Vue {
  get jiChuYongFa(): object[] { return require('assets/config/element-ui/button.config.json').code.jiChuYongFa }
  get jinYongZhuangTai(): object[] { return require('assets/config/element-ui/button.config.json').code.jinYongZhuangTai }
  get wenZiAnNiu(): object[] { return require('assets/config/element-ui/button.config.json').code.wenZiAnNiu }
  get tuBiaoAnNiu(): object[] { return require('assets/config/element-ui/button.config.json').code.tuBiaoAnNiu }
  get anNiuZu(): object[] { return require('assets/config/element-ui/button.config.json').code.anNiuZu }
  get jiaZaiZhong(): object[] { return require('assets/config/element-ui/button.config.json').code.jiaZaiZhong }
  get buTongChiCun(): object[] { return require('assets/config/element-ui/button.config.json').code.buTongChiCun }
  get attributes(): object[] { return require('assets/config/element-ui/button.config.json').attributes }
}
</script>