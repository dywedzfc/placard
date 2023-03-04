<template>
  <div class="page-container">
    <h2 id="header">Skeleton 骨架屏</h2>
    <p>在需要等待加载内容的位置设置一个骨架屏，某些场景下比 Loading 的视觉效果更好。</p>
    <h3 id="ji-chu-yong-fa">基础用法</h3>
    <p>基础的骨架效果。</p>
    <demo-block>
      <template v-slot:source>
        <JiChuYongFa />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in jiChuYongFa" :key="index" :type="item.type" :code="item.data" /></template>
    </demo-block>
    <h3 id="geng-duo-can-shu">更多参数</h3>
    <p>可以配置骨架屏段落数量，以便更接近真实渲染效果。首行会被渲染一个长度 33% 的段首。</p>
    <demo-block>
      <template v-slot:source>
        <GengDuoCanShu />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in gengDuoCanShu" :key="index" :type="item.type" :code="item.data" /></template>
    </demo-block>
    <h3 id="dong-hua-xiao-guo">动画效果</h3>
    <p>显示动画效果。</p>
    <demo-block>
      <template v-slot:source>
        <DongHuaXiaoGuo />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in dongHuaXiaoGuo" :key="index" :type="item.type" :code="item.data" /></template>
    </demo-block>
    <h3 id="zi-ding-yi-yang-shi">自定义样式</h3>
    <p>Element 提供的排版模式有时候并不满足要求，当您想要用自己定义的模板时，可以通过一个具名 Slot 来自己设定模板。</p>
    <p>我们提供了不同的模板单元可供使用，具体可选值请看 API 详细描述。 建议在描述模板的时候，尽量靠近真实的 DOM 结构，这样可以避免 DOM 高度差距引起的抖动。</p>
    <demo-block>
      <template v-slot:source>
        <ZiDingYiYangShi />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in ziDingYiYangShi" :key="index" :type="item.type" :code="item.data" /></template>
    </demo-block>
    <h3 id="loading-zhuang-tai">Loading 状态</h3>
    <p>当 Loading 结束之后，我们往往需要显示真实的 UI，可以通过 <code>loading</code> 的值来控制是否显示真实的 DOM。然后通过
具名 Slot 来设置当 loading 结束之后需要展示的 UI。</p>
    <demo-block>
      <template v-slot:source>
        <LoadingZhuangTai />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in loadingZhuangTai" :key="index" :type="item.type" :code="item.data" /></template>
    </demo-block>
    <h3 id="xuan-ran-duo-tiao-shu-ju">渲染多条数据</h3>
    <p>大多时候, 骨架屏都被用来渲染列表, 当我们需要在从服务器获取数据的时候来渲染一个假的 UI。利用 <code>count</code> 这个属性就能控制渲染多少条假的数据在页面上</p>
    <div class="tip"><p>请注意, 请尽可能的将 <code>count</code> 的大小保持在最小状态, 即使是假的 UI, DOM 元素多了之后, 照样会引起性能问题, 并且在骨架屏销毁时所消耗的时间也会更长(相对的)。</p></div>
    <demo-block>
      <template v-slot:source>
        <XuanRanDuoTiaoShuJu />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in xuanRanDuoTiaoShuJu" :key="index" :type="item.type" :code="item.data" /></template>
    </demo-block>
    <h3 id="fang-zhi-xuan-ran-dou-dong">防止渲染抖动</h3>
    <p>有的时候，API 的请求回来的特别快，往往骨架占位刚刚被渲染，真实的数据就已经回来了，用户的界面会突然一闪，此时为了避免这种情况，就需要通过 <code>throttle</code> 属性来避免这个问题。</p>
    <demo-block>
      <template v-slot:source>
        <FangZhiXuanRanDouDong />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in fangZhiXuanRanDouDong" :key="index" :type="item.type" :code="item.data" /></template>
    </demo-block>
    <h3 id="skeleton-attributes">Skeleton Attributes</h3>
    <table-props :data="skeletonAttributes" />
    <h3 id="skeleton-item-attributes">Skeleton Item Attributes</h3>
    <table-props :data="skeletonItemAttributes" />
    <h3 id="skeleton-slots">Skeleton Slots</h3>
    <table-slot :data="skeletonSlots" />
    <br />
    <br />
    <br />

    <page-navigation target="header">
      <page-navigation-item target="ji-chu-yong-fa">基础用法</page-navigation-item>
      <page-navigation-item target="geng-duo-can-shu">更多参数</page-navigation-item>
      <page-navigation-item target="dong-hua-xiao-guo">动画效果</page-navigation-item>
      <page-navigation-item target="zi-ding-yi-yang-shi">自定义样式</page-navigation-item>
      <page-navigation-item target="loading-zhuang-tai">Loading 状态</page-navigation-item>
      <page-navigation-item target="xuan-ran-duo-tiao-shu-ju">渲染多条数据</page-navigation-item>
      <page-navigation-item target="fang-zhi-xuan-ran-dou-dong">防止渲染抖动</page-navigation-item>
      <page-navigation-item target="skeleton-attributes">Skeleton Attributes</page-navigation-item>
      <page-navigation-item target="skeleton-item-attributes">Skeleton Item Attributes</page-navigation-item>
      <page-navigation-item target="skeleton-slots">Skeleton Slots</page-navigation-item>
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
import JiChuYongFa from './components/skeleton/JiChuYongFa.vue'
import GengDuoCanShu from './components/skeleton/GengDuoCanShu.vue'
import DongHuaXiaoGuo from './components/skeleton/DongHuaXiaoGuo.vue'
import ZiDingYiYangShi from './components/skeleton/ZiDingYiYangShi.vue'
import LoadingZhuangTai from './components/skeleton/LoadingZhuangTai.vue'
import XuanRanDuoTiaoShuJu from './components/skeleton/XuanRanDuoTiaoShuJu.vue'
import FangZhiXuanRanDouDong from './components/skeleton/FangZhiXuanRanDouDong.vue'

@Component({ components: { CodeLine, DemoBlock, TableProps, TableMethods, TableEvents, TableSlot, PageNavigation, PageNavigationItem, JiChuYongFa, GengDuoCanShu, DongHuaXiaoGuo, ZiDingYiYangShi, LoadingZhuangTai, XuanRanDuoTiaoShuJu, FangZhiXuanRanDouDong }})
export default class SkeletonView extends Vue {
  get jiChuYongFa(): object[] { return require('assets/config/element-ui/skeleton.config.json').code.jiChuYongFa }
  get gengDuoCanShu(): object[] { return require('assets/config/element-ui/skeleton.config.json').code.gengDuoCanShu }
  get dongHuaXiaoGuo(): object[] { return require('assets/config/element-ui/skeleton.config.json').code.dongHuaXiaoGuo }
  get ziDingYiYangShi(): object[] { return require('assets/config/element-ui/skeleton.config.json').code.ziDingYiYangShi }
  get loadingZhuangTai(): object[] { return require('assets/config/element-ui/skeleton.config.json').code.loadingZhuangTai }
  get xuanRanDuoTiaoShuJu(): object[] { return require('assets/config/element-ui/skeleton.config.json').code.xuanRanDuoTiaoShuJu }
  get fangZhiXuanRanDouDong(): object[] { return require('assets/config/element-ui/skeleton.config.json').code.fangZhiXuanRanDouDong }
  get skeletonAttributes(): object[] { return require('assets/config/element-ui/skeleton.config.json').skeletonAttributes }
  get skeletonItemAttributes(): object[] { return require('assets/config/element-ui/skeleton.config.json').skeletonItemAttributes }
  get skeletonSlots(): object[] { return require('assets/config/element-ui/skeleton.config.json').skeletonSlots }
}
</script>