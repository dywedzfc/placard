<template>
  <div class="page-container">
    <h2 id="header">Table 表格</h2>
    <p>用于展示多条结构类似的数据，可对数据进行排序、筛选、对比或其他自定义操作。</p>
    <h3 id="ji-chu-biao-ge">基础表格</h3>
    <p>基础的表格展示用法。</p>
    <demo-block>
      <template v-slot:source>
        <JiChuBiaoGe />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in jiChuBiaoGe" :key="index" :type="item.type" :code="item.data" /></template>
    </demo-block>
    <h3 id="dai-ban-ma-wen-biao-ge">带斑马纹表格</h3>
    <p>使用带斑马纹的表格，可以更容易区分出不同行的数据。</p>
    <demo-block>
      <template v-slot:source>
        <DaiBanMaWenBiaoGe />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in daiBanMaWenBiaoGe" :key="index" :type="item.type" :code="item.data" /></template>
    </demo-block>
    <h3 id="dai-bian-kuang-biao-ge">带边框表格</h3>
    <demo-block>
      <template v-slot:source>
        <DaiBianKuangBiaoGe />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in daiBianKuangBiaoGe" :key="index" :type="item.type" :code="item.data" /></template>
    </demo-block>
    <h3 id="dai-zhuang-tai-biao-ge">带状态表格</h3>
    <p>可将表格内容 highlight 显示，方便区分「成功、信息、警告、危险」等内容。</p>
    <demo-block>
      <template v-slot:source>
        <DaiZhuangTaiBiaoGe />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in daiZhuangTaiBiaoGe" :key="index" :type="item.type" :code="item.data" /></template>
    </demo-block>
    <h3 id="gu-ding-biao-tou">固定表头</h3>
    <p>纵向内容过多时，可选择固定表头。</p>
    <demo-block>
      <template v-slot:source>
        <GuDingBiaoTou />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in guDingBiaoTou" :key="index" :type="item.type" :code="item.data" /></template>
    </demo-block>
    <h3 id="gu-ding-lie">固定列</h3>
    <p>横向内容过多时，可选择固定列。</p>
    <demo-block>
      <template v-slot:source>
        <GuDingLie />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in guDingLie" :key="index" :type="item.type" :code="item.data" /></template>
    </demo-block>
    <h3 id="gu-ding-lie-he-biao-tou">固定列和表头</h3>
    <p>横纵内容过多时，可选择固定列和表头。</p>
    <demo-block>
      <template v-slot:source>
        <GuDingLieHeBiaoTou />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in guDingLieHeBiaoTou" :key="index" :type="item.type" :code="item.data" /></template>
    </demo-block>
    <h3 id="liu-ti-gao-du">流体高度</h3>
    <p>当数据量动态变化时，可以为 Table 设置一个最大高度。</p>
    <demo-block>
      <template v-slot:source>
        <LiuTiGaoDu />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in liuTiGaoDu" :key="index" :type="item.type" :code="item.data" /></template>
    </demo-block>
    <h3 id="duo-ji-biao-tou">多级表头</h3>
    <p>数据结构比较复杂的时候，可使用多级表头来展现数据的层次关系。</p>
    <demo-block>
      <template v-slot:source>
        <DuoJiBiaoTou />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in duoJiBiaoTou" :key="index" :type="item.type" :code="item.data" /></template>
    </demo-block>
    <h3 id="dan-xuan">单选</h3>
    <p>选择单行数据时使用色块表示。</p>
    <demo-block>
      <template v-slot:source>
        <DanXuan />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in danXuan" :key="index" :type="item.type" :code="item.data" /></template>
    </demo-block>
    <h3 id="duo-xuan">多选</h3>
    <p>选择多行数据时使用 Checkbox。</p>
    <demo-block>
      <template v-slot:source>
        <DuoXuan />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in duoXuan" :key="index" :type="item.type" :code="item.data" /></template>
    </demo-block>
    <h3 id="pai-xu">排序</h3>
    <p>对表格进行排序，可快速查找或对比数据。</p>
    <demo-block>
      <template v-slot:source>
        <PaiXu />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in paiXu" :key="index" :type="item.type" :code="item.data" /></template>
    </demo-block>
    <h3 id="shai-xuan">筛选</h3>
    <p>对表格进行筛选，可快速查找到自己想看的数据。</p>
    <demo-block>
      <template v-slot:source>
        <ShaiXuan />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in shaiXuan" :key="index" :type="item.type" :code="item.data" /></template>
    </demo-block>
    <h3 id="zi-ding-yi-lie-mo-ban">自定义列模板</h3>
    <p>自定义列的显示内容，可组合其他组件使用。</p>
    <demo-block>
      <template v-slot:source>
        <ZiDingYiLieMoBan />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in ziDingYiLieMoBan" :key="index" :type="item.type" :code="item.data" /></template>
    </demo-block>
    <h3 id="zhan-kai-xing">展开行</h3>
    <p>当行内容过多并且不想显示横向滚动条时，可以使用 Table 展开行功能。</p>
    <demo-block>
      <template v-slot:source>
        <ZhanKaiXing />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in zhanKaiXing" :key="index" :type="item.type" :code="item.data" /></template>
    </demo-block>
    <h3 id="shu-xing-shu-ju-yu-lan-jia-zai">树形数据与懒加载</h3>
    <demo-block>
      <template v-slot:source>
        <ShuXingShuJuYuLanJiaZai />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in shuXingShuJuYuLanJiaZai" :key="index" :type="item.type" :code="item.data" /></template>
    </demo-block>
    <h3 id="zi-ding-yi-biao-tou">自定义表头</h3>
    <p>表头支持自定义。</p>
    <demo-block>
      <template v-slot:source>
        <ZiDingYiBiaoTou />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in ziDingYiBiaoTou" :key="index" :type="item.type" :code="item.data" /></template>
    </demo-block>
    <h3 id="biao-wei-he-ji-xing">表尾合计行</h3>
    <p>若表格展示的是各类数字，可以在表尾显示各列的合计。</p>
    <demo-block>
      <template v-slot:source>
        <BiaoWeiHeJiXing />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in biaoWeiHeJiXing" :key="index" :type="item.type" :code="item.data" /></template>
    </demo-block>
    <h3 id="he-bing-xing-huo-lie">合并行或列</h3>
    <p>多行或多列共用一个数据时，可以合并行或列。</p>
    <demo-block>
      <template v-slot:source>
        <HeBingXingHuoLie />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in heBingXingHuoLie" :key="index" :type="item.type" :code="item.data" /></template>
    </demo-block>
    <h3 id="zi-ding-yi-suo-yin">自定义索引</h3>
    <p>自定义 <code>type=index</code> 列的行号。</p>
    <demo-block>
      <template v-slot:source>
        <ZiDingYiSuoYin />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in ziDingYiSuoYin" :key="index" :type="item.type" :code="item.data" /></template>
    </demo-block>
    <h3 id="table-attributes">Table Attributes</h3>
    <table-props :data="tableAttributes" />
    <h3 id="table-events">Table Events</h3>
    <table-events :data="tableEvents" />
    <h3 id="table-methods">Table Methods</h3>
    <table-methods :data="tableMethods" />
    <h3 id="table-slot">Table Slot</h3>
    <table-slot :data="tableSlot" />
    <h3 id="table-column-attributes">Table-column Attributes</h3>
    <table-props :data="tableColumnAttributes" />
    <h3 id="table-column-scoped-slot">Table-column Scoped Slot</h3>
    <table-slot :data="tableColumnScopedSlot" />
    <br />
    <br />
    <br />

    <page-navigation target="header">
      <page-navigation-item target="ji-chu-biao-ge">基础表格</page-navigation-item>
      <page-navigation-item target="dai-ban-ma-wen-biao-ge">带斑马纹表格</page-navigation-item>
      <page-navigation-item target="dai-bian-kuang-biao-ge">带边框表格</page-navigation-item>
      <page-navigation-item target="dai-zhuang-tai-biao-ge">带状态表格</page-navigation-item>
      <page-navigation-item target="gu-ding-biao-tou">固定表头</page-navigation-item>
      <page-navigation-item target="gu-ding-lie">固定列</page-navigation-item>
      <page-navigation-item target="gu-ding-lie-he-biao-tou">固定列和表头</page-navigation-item>
      <page-navigation-item target="liu-ti-gao-du">流体高度</page-navigation-item>
      <page-navigation-item target="duo-ji-biao-tou">多级表头</page-navigation-item>
      <page-navigation-item target="dan-xuan">单选</page-navigation-item>
      <page-navigation-item target="duo-xuan">多选</page-navigation-item>
      <page-navigation-item target="pai-xu">排序</page-navigation-item>
      <page-navigation-item target="shai-xuan">筛选</page-navigation-item>
      <page-navigation-item target="zi-ding-yi-lie-mo-ban">自定义列模板</page-navigation-item>
      <page-navigation-item target="zhan-kai-xing">展开行</page-navigation-item>
      <page-navigation-item target="shu-xing-shu-ju-yu-lan-jia-zai">树形数据与懒加载</page-navigation-item>
      <page-navigation-item target="zi-ding-yi-biao-tou">自定义表头</page-navigation-item>
      <page-navigation-item target="biao-wei-he-ji-xing">表尾合计行</page-navigation-item>
      <page-navigation-item target="he-bing-xing-huo-lie">合并行或列</page-navigation-item>
      <page-navigation-item target="zi-ding-yi-suo-yin">自定义索引</page-navigation-item>
      <page-navigation-item target="table-attributes">Table Attributes</page-navigation-item>
      <page-navigation-item target="table-events">Table Events</page-navigation-item>
      <page-navigation-item target="table-methods">Table Methods</page-navigation-item>
      <page-navigation-item target="table-slot">Table Slot</page-navigation-item>
      <page-navigation-item target="table-column-attributes">Table-column Attributes</page-navigation-item>
      <page-navigation-item target="table-column-scoped-slot">Table-column Scoped Slot</page-navigation-item>
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
import JiChuBiaoGe from './components/table/JiChuBiaoGe.vue'
import DaiBanMaWenBiaoGe from './components/table/DaiBanMaWenBiaoGe.vue'
import DaiBianKuangBiaoGe from './components/table/DaiBianKuangBiaoGe.vue'
import DaiZhuangTaiBiaoGe from './components/table/DaiZhuangTaiBiaoGe.vue'
import GuDingBiaoTou from './components/table/GuDingBiaoTou.vue'
import GuDingLie from './components/table/GuDingLie.vue'
import GuDingLieHeBiaoTou from './components/table/GuDingLieHeBiaoTou.vue'
import LiuTiGaoDu from './components/table/LiuTiGaoDu.vue'
import DuoJiBiaoTou from './components/table/DuoJiBiaoTou.vue'
import DanXuan from './components/table/DanXuan.vue'
import DuoXuan from './components/table/DuoXuan.vue'
import PaiXu from './components/table/PaiXu.vue'
import ShaiXuan from './components/table/ShaiXuan.vue'
import ZiDingYiLieMoBan from './components/table/ZiDingYiLieMoBan.vue'
import ZhanKaiXing from './components/table/ZhanKaiXing.vue'
import ShuXingShuJuYuLanJiaZai from './components/table/ShuXingShuJuYuLanJiaZai.vue'
import ZiDingYiBiaoTou from './components/table/ZiDingYiBiaoTou.vue'
import BiaoWeiHeJiXing from './components/table/BiaoWeiHeJiXing.vue'
import HeBingXingHuoLie from './components/table/HeBingXingHuoLie.vue'
import ZiDingYiSuoYin from './components/table/ZiDingYiSuoYin.vue'

@Component({ components: { CodeLine, DemoBlock, TableProps, TableMethods, TableEvents, TableSlot, PageNavigation, PageNavigationItem, JiChuBiaoGe, DaiBanMaWenBiaoGe, DaiBianKuangBiaoGe, DaiZhuangTaiBiaoGe, GuDingBiaoTou, GuDingLie, GuDingLieHeBiaoTou, LiuTiGaoDu, DuoJiBiaoTou, DanXuan, DuoXuan, PaiXu, ShaiXuan, ZiDingYiLieMoBan, ZhanKaiXing, ShuXingShuJuYuLanJiaZai, ZiDingYiBiaoTou, BiaoWeiHeJiXing, HeBingXingHuoLie, ZiDingYiSuoYin }})
export default class TableView extends Vue {
  get jiChuBiaoGe(): object[] { return require('assets/config/element-ui/table.config.json').code.jiChuBiaoGe }
  get daiBanMaWenBiaoGe(): object[] { return require('assets/config/element-ui/table.config.json').code.daiBanMaWenBiaoGe }
  get daiBianKuangBiaoGe(): object[] { return require('assets/config/element-ui/table.config.json').code.daiBianKuangBiaoGe }
  get daiZhuangTaiBiaoGe(): object[] { return require('assets/config/element-ui/table.config.json').code.daiZhuangTaiBiaoGe }
  get guDingBiaoTou(): object[] { return require('assets/config/element-ui/table.config.json').code.guDingBiaoTou }
  get guDingLie(): object[] { return require('assets/config/element-ui/table.config.json').code.guDingLie }
  get guDingLieHeBiaoTou(): object[] { return require('assets/config/element-ui/table.config.json').code.guDingLieHeBiaoTou }
  get liuTiGaoDu(): object[] { return require('assets/config/element-ui/table.config.json').code.liuTiGaoDu }
  get duoJiBiaoTou(): object[] { return require('assets/config/element-ui/table.config.json').code.duoJiBiaoTou }
  get danXuan(): object[] { return require('assets/config/element-ui/table.config.json').code.danXuan }
  get duoXuan(): object[] { return require('assets/config/element-ui/table.config.json').code.duoXuan }
  get paiXu(): object[] { return require('assets/config/element-ui/table.config.json').code.paiXu }
  get shaiXuan(): object[] { return require('assets/config/element-ui/table.config.json').code.shaiXuan }
  get ziDingYiLieMoBan(): object[] { return require('assets/config/element-ui/table.config.json').code.ziDingYiLieMoBan }
  get zhanKaiXing(): object[] { return require('assets/config/element-ui/table.config.json').code.zhanKaiXing }
  get shuXingShuJuYuLanJiaZai(): object[] { return require('assets/config/element-ui/table.config.json').code.shuXingShuJuYuLanJiaZai }
  get ziDingYiBiaoTou(): object[] { return require('assets/config/element-ui/table.config.json').code.ziDingYiBiaoTou }
  get biaoWeiHeJiXing(): object[] { return require('assets/config/element-ui/table.config.json').code.biaoWeiHeJiXing }
  get heBingXingHuoLie(): object[] { return require('assets/config/element-ui/table.config.json').code.heBingXingHuoLie }
  get ziDingYiSuoYin(): object[] { return require('assets/config/element-ui/table.config.json').code.ziDingYiSuoYin }
  get tableAttributes(): object[] { return require('assets/config/element-ui/table.config.json').tableAttributes }
  get tableEvents(): object[] { return require('assets/config/element-ui/table.config.json').tableEvents }
  get tableMethods(): object[] { return require('assets/config/element-ui/table.config.json').tableMethods }
  get tableSlot(): object[] { return require('assets/config/element-ui/table.config.json').tableSlot }
  get tableColumnAttributes(): object[] { return require('assets/config/element-ui/table.config.json').tableColumnAttributes }
  get tableColumnScopedSlot(): object[] { return require('assets/config/element-ui/table.config.json').tableColumnScopedSlot }
}
</script>