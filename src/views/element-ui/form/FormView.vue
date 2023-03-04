<template>
  <div class="page-container">
    <h2 id="header">Form 表单</h2>
    <p>由输入框、选择器、单选框、多选框等控件组成，用以收集、校验、提交数据</p>
    <h3 id="dian-xing-biao-dan">典型表单</h3>
    <p>包括各种表单项，比如输入框、选择器、开关、单选框、多选框等。</p>
    <demo-block>
      <template v-slot:source>
        <DianXingBiaoDan />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in dianXingBiaoDan" :key="index" :type="item.type" :code="item.data" /></template>
    </demo-block>
    <div class="tip" style=""><p>W3C 标准中有如下<a target="_blank" href="https://www.w3.org/MarkUp/html-spec/html-spec_8.html#SEC8.2">规定</a>：</p><blockquote><p><i>When there is only one single-line text input field in a form, the user agent should accept Enter in that field as a request to submit the form.</i></p></blockquote><p>即：当一个 form 元素中只有一个输入框时，在该输入框中按下回车应提交该表单。如果希望阻止这一默认行为，可以在 <code>&lt;el-form&gt;</code> 标签上添加 <code>@submit.native.prevent</code>。</p></div>
    <h3 id="xing-nei-biao-dan">行内表单</h3>
    <p>当垂直方向空间受限且表单较简单时，可以在一行内放置表单。</p>
    <demo-block>
      <template v-slot:source>
        <XingNeiBiaoDan />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in xingNeiBiaoDan" :key="index" :type="item.type" :code="item.data" /></template>
    </demo-block>
    <h3 id="dui-qi-fang-shi">对齐方式</h3>
    <p>根据具体目标和制约因素，选择最佳的标签对齐方式。</p>
    <demo-block>
      <template v-slot:source>
        <DuiQiFangShi />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in duiQiFangShi" :key="index" :type="item.type" :code="item.data" /></template>
    </demo-block>
    <h3 id="biao-dan-yan-zheng">表单验证</h3>
    <p>在防止用户犯错的前提下，尽可能让用户更早地发现并纠正错误。</p>
    <demo-block>
      <template v-slot:source>
        <BiaoDanYanZheng />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in biaoDanYanZheng" :key="index" :type="item.type" :code="item.data" /></template>
    </demo-block>
    <h3 id="zi-ding-yi-xiao-yan-gui-ze">自定义校验规则</h3>
    <p>这个例子中展示了如何使用自定义验证规则来完成密码的二次验证。</p>
    <demo-block>
      <template v-slot:source>
        <ZiDingYiXiaoYanGuiZe />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in ziDingYiXiaoYanGuiZe" :key="index" :type="item.type" :code="item.data" /></template>
    </demo-block>
    <div class="tip" style=""><p>自定义校验 callback 必须被调用。 更多高级用法可参考 <a target="_blank" href="https://github.com/yiminghe/async-validator">async-validator</a>。</p></div>
    <h3 id="dong-tai-zeng-jian-biao-dan-xiang">动态增减表单项</h3>
    <demo-block>
      <template v-slot:source>
        <DongTaiZengJianBiaoDanXiang />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in dongTaiZengJianBiaoDanXiang" :key="index" :type="item.type" :code="item.data" /></template>
    </demo-block>
    <h3 id="shu-zi-lei-xing-yan-zheng">数字类型验证</h3>
    <demo-block>
      <template v-slot:source>
        <ShuZiLeiXingYanZheng />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in shuZiLeiXingYanZheng" :key="index" :type="item.type" :code="item.data" /></template>
    </demo-block>
    <div class="tip" style=""><p>嵌套在 <code>el-form-item</code> 中的 <code>el-form-item</code> 标签宽度默认为零，不会继承 <code>el-form</code> 的 <code>label-width</code>。如果需要可以为其单独设置 <code>label-width</code> 属性。</p></div>
    <h3 id="biao-dan-nei-zu-jian-chi-cun-kong-zhi">表单内组件尺寸控制</h3>
    <p>通过设置 Form 上的 <code>size</code> 属性可以使该表单内所有可调节大小的组件继承该尺寸。Form-Item 也具有该属性。</p>
    <demo-block>
      <template v-slot:source>
        <BiaoDanNeiZuJianChiCunKongZhi />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in biaoDanNeiZuJianChiCunKongZhi" :key="index" :type="item.type" :code="item.data" /></template>
    </demo-block>
    <h3 id="form-attributes">Form Attributes</h3>
    <table-props :data="formAttributes" />
    <h3 id="form-methods">Form Methods</h3>
    <table-methods :data="formMethods" />
    <h3 id="form-events">Form Events</h3>
    <table-events :data="formEvents" />
    <h3 id="form-item-attributes">Form-Item Attributes</h3>
    <table-props :data="formItemAttributes" />
    <h3 id="form-item-slot">Form-Item Slot</h3>
    <table-slot :data="formItemSlot" />
    <h3 id="form-item-scoped-slot">Form-Item Scoped Slot</h3>
    <table-slot :data="formItemScopedSlot" />
    <h3 id="form-item-methods">Form-Item Methods</h3>
    <table-methods :data="formItemMethods" />
    <br />
    <br />
    <br />

    <page-navigation target="header">
      <page-navigation-item target="dian-xing-biao-dan">典型表单</page-navigation-item>
      <page-navigation-item target="xing-nei-biao-dan">行内表单</page-navigation-item>
      <page-navigation-item target="dui-qi-fang-shi">对齐方式</page-navigation-item>
      <page-navigation-item target="biao-dan-yan-zheng">表单验证</page-navigation-item>
      <page-navigation-item target="zi-ding-yi-xiao-yan-gui-ze">自定义校验规则</page-navigation-item>
      <page-navigation-item target="dong-tai-zeng-jian-biao-dan-xiang">动态增减表单项</page-navigation-item>
      <page-navigation-item target="shu-zi-lei-xing-yan-zheng">数字类型验证</page-navigation-item>
      <page-navigation-item target="biao-dan-nei-zu-jian-chi-cun-kong-zhi">表单内组件尺寸控制</page-navigation-item>
      <page-navigation-item target="form-attributes">Form Attributes</page-navigation-item>
      <page-navigation-item target="form-methods">Form Methods</page-navigation-item>
      <page-navigation-item target="form-events">Form Events</page-navigation-item>
      <page-navigation-item target="form-item-attributes">Form-Item Attributes</page-navigation-item>
      <page-navigation-item target="form-item-slot">Form-Item Slot</page-navigation-item>
      <page-navigation-item target="form-item-scoped-slot">Form-Item Scoped Slot</page-navigation-item>
      <page-navigation-item target="form-item-methods">Form-Item Methods</page-navigation-item>
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
import DianXingBiaoDan from './components/form/DianXingBiaoDan.vue'
import XingNeiBiaoDan from './components/form/XingNeiBiaoDan.vue'
import DuiQiFangShi from './components/form/DuiQiFangShi.vue'
import BiaoDanYanZheng from './components/form/BiaoDanYanZheng.vue'
import ZiDingYiXiaoYanGuiZe from './components/form/ZiDingYiXiaoYanGuiZe.vue'
import DongTaiZengJianBiaoDanXiang from './components/form/DongTaiZengJianBiaoDanXiang.vue'
import ShuZiLeiXingYanZheng from './components/form/ShuZiLeiXingYanZheng.vue'
import BiaoDanNeiZuJianChiCunKongZhi from './components/form/BiaoDanNeiZuJianChiCunKongZhi.vue'

@Component({ components: { CodeLine, DemoBlock, TableProps, TableMethods, TableEvents, TableSlot, PageNavigation, PageNavigationItem, DianXingBiaoDan, XingNeiBiaoDan, DuiQiFangShi, BiaoDanYanZheng, ZiDingYiXiaoYanGuiZe, DongTaiZengJianBiaoDanXiang, ShuZiLeiXingYanZheng, BiaoDanNeiZuJianChiCunKongZhi }})
export default class FormView extends Vue {
  get dianXingBiaoDan(): object[] { return require('assets/config/element-ui/form.config.json').code.dianXingBiaoDan }
  get xingNeiBiaoDan(): object[] { return require('assets/config/element-ui/form.config.json').code.xingNeiBiaoDan }
  get duiQiFangShi(): object[] { return require('assets/config/element-ui/form.config.json').code.duiQiFangShi }
  get biaoDanYanZheng(): object[] { return require('assets/config/element-ui/form.config.json').code.biaoDanYanZheng }
  get ziDingYiXiaoYanGuiZe(): object[] { return require('assets/config/element-ui/form.config.json').code.ziDingYiXiaoYanGuiZe }
  get dongTaiZengJianBiaoDanXiang(): object[] { return require('assets/config/element-ui/form.config.json').code.dongTaiZengJianBiaoDanXiang }
  get shuZiLeiXingYanZheng(): object[] { return require('assets/config/element-ui/form.config.json').code.shuZiLeiXingYanZheng }
  get biaoDanNeiZuJianChiCunKongZhi(): object[] { return require('assets/config/element-ui/form.config.json').code.biaoDanNeiZuJianChiCunKongZhi }
  get formAttributes(): object[] { return require('assets/config/element-ui/form.config.json').formAttributes }
  get formMethods(): object[] { return require('assets/config/element-ui/form.config.json').formMethods }
  get formEvents(): object[] { return require('assets/config/element-ui/form.config.json').formEvents }
  get formItemAttributes(): object[] { return require('assets/config/element-ui/form.config.json').formItemAttributes }
  get formItemSlot(): object[] { return require('assets/config/element-ui/form.config.json').formItemSlot }
  get formItemScopedSlot(): object[] { return require('assets/config/element-ui/form.config.json').formItemScopedSlot }
  get formItemMethods(): object[] { return require('assets/config/element-ui/form.config.json').formItemMethods }
}
</script>