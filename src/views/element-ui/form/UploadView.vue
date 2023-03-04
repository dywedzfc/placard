<template>
  <div class="page-container">
    <h2 id="header">Upload 上传</h2>
    <p>通过点击或者拖拽上传文件</p>
    <h3 id="dian-ji-shang-chuan">点击上传</h3>
    <demo-block>
      <template v-slot:source>
        <DianJiShangChuan />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in dianJiShangChuan" :key="index" :type="item.type" :code="item.data" /></template>
    </demo-block>
    <h3 id="yong-hu-tou-xiang-shang-chuan">用户头像上传</h3>
    <p>使用 <code>before-upload</code> 限制用户上传的图片格式和大小。</p>
    <demo-block>
      <template v-slot:source>
        <YongHuTouXiangShangChuan />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in yongHuTouXiangShangChuan" :key="index" :type="item.type" :code="item.data" /></template>
    </demo-block>
    <h3 id="zhao-pian-qiang">照片墙</h3>
    <p>使用 <code>list-type</code> 属性来设置文件列表的样式。</p>
    <demo-block>
      <template v-slot:source>
        <ZhaoPianQiang />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in zhaoPianQiang" :key="index" :type="item.type" :code="item.data" /></template>
    </demo-block>
    <h3 id="wen-jian-suo-lue-tu">文件缩略图</h3>
    <p>使用 <code>scoped-slot</code> 去设置缩略图模版。</p>
    <demo-block>
      <template v-slot:source>
        <WenJianSuoLueTu />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in wenJianSuoLueTu" :key="index" :type="item.type" :code="item.data" /></template>
    </demo-block>
    <h3 id="tu-pian-lie-biao-suo-lue-tu">图片列表缩略图</h3>
    <demo-block>
      <template v-slot:source>
        <TuPianLieBiaoSuoLueTu />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in tuPianLieBiaoSuoLueTu" :key="index" :type="item.type" :code="item.data" /></template>
    </demo-block>
    <h3 id="shang-chuan-wen-jian-lie-biao-kong-zhi">上传文件列表控制</h3>
    <p>通过 <code>on-change</code> 钩子函数来对列表进行控制</p>
    <demo-block>
      <template v-slot:source>
        <ShangChuanWenJianLieBiaoKongZhi />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in shangChuanWenJianLieBiaoKongZhi" :key="index" :type="item.type" :code="item.data" /></template>
    </demo-block>
    <h3 id="tuo-zhuai-shang-chuan">拖拽上传</h3>
    <demo-block>
      <template v-slot:source>
        <TuoZhuaiShangChuan />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in tuoZhuaiShangChuan" :key="index" :type="item.type" :code="item.data" /></template>
    </demo-block>
    <h3 id="shou-dong-shang-chuan">手动上传</h3>
    <demo-block>
      <template v-slot:source>
        <ShouDongShangChuan />
      </template>
      <template v-slot:highlight><code-line v-for="(item, index) in shouDongShangChuan" :key="index" :type="item.type" :code="item.data" /></template>
    </demo-block>
    <h3 id="attribute">Attribute</h3>
    <table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>action</td><td>必选参数，上传的地址</td><td>string</td><td>—</td><td>—</td></tr><tr><td>headers</td><td>设置上传的请求头部</td><td>object</td><td>—</td><td>—</td></tr><tr><td>multiple</td><td>是否支持多选文件</td><td>boolean</td><td>—</td><td>—</td></tr><tr><td>data</td><td>上传时附带的额外参数</td><td>object</td><td>—</td><td>—</td></tr><tr><td>name</td><td>上传的文件字段名</td><td>string</td><td>—</td><td>file</td></tr><tr><td>with-credentials</td><td>支持发送 cookie 凭证信息</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>show-file-list</td><td>是否显示已上传文件列表</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>drag</td><td>是否启用拖拽上传</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>accept</td><td>接受上传的<a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-accept">文件类型</a>（thumbnail-mode 模式下此参数无效）</td><td>string</td><td>—</td><td>—</td></tr><tr><td>on-preview</td><td>点击文件列表中已上传的文件时的钩子</td><td>function(file)</td><td>—</td><td>—</td></tr><tr><td>on-remove</td><td>文件列表移除文件时的钩子</td><td>function(file, fileList)</td><td>—</td><td>—</td></tr><tr><td>on-success</td><td>文件上传成功时的钩子</td><td>function(response, file, fileList)</td><td>—</td><td>—</td></tr><tr><td>on-error</td><td>文件上传失败时的钩子</td><td>function(err, file, fileList)</td><td>—</td><td>—</td></tr><tr><td>on-progress</td><td>文件上传时的钩子</td><td>function(event, file, fileList)</td><td>—</td><td>—</td></tr><tr><td>on-change</td><td>文件状态改变时的钩子，添加文件、上传成功和上传失败时都会被调用</td><td>function(file, fileList)</td><td>—</td><td>—</td></tr><tr><td>before-upload</td><td>上传文件之前的钩子，参数为上传的文件，若返回 false 或者返回 Promise 且被 reject，则停止上传。</td><td>function(file)</td><td>—</td><td>—</td></tr><tr><td>before-remove</td><td>删除文件之前的钩子，参数为上传的文件和文件列表，若返回 false 或者返回 Promise 且被 reject，则停止删除。</td><td>function(file, fileList)</td><td>—</td><td>—</td></tr><tr><td>list-type</td><td>文件列表的类型</td><td>string</td><td>text/picture/picture-card</td><td>text</td></tr><tr><td>auto-upload</td><td>是否在选取文件后立即进行上传</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>file-list</td><td>上传的文件列表, 例如: [{name: 'food.jpg', url: 'https://xxx.cdn.com/xxx.jpg'}]</td><td>array</td><td>—</td><td>[]</td></tr><tr><td>http-request</td><td>覆盖默认的上传行为，可以自定义上传的实现</td><td>function</td><td>—</td><td>—</td></tr><tr><td>disabled</td><td>是否禁用</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>limit</td><td>最大允许上传个数</td><td>number</td><td>—</td><td>—</td></tr><tr><td>on-exceed</td><td>文件超出个数限制时的钩子</td><td>function(files, fileList)</td><td>—</td><td>-</td></tr></tbody></table>
    <h3 id="slot">Slot</h3>
    <table-slot :data="slot" />
    <h3 id="methods">Methods</h3>
    <table-methods :data="methods" />
    <br />
    <br />
    <br />

    <page-navigation target="header">
      <page-navigation-item target="dian-ji-shang-chuan">点击上传</page-navigation-item>
      <page-navigation-item target="yong-hu-tou-xiang-shang-chuan">用户头像上传</page-navigation-item>
      <page-navigation-item target="zhao-pian-qiang">照片墙</page-navigation-item>
      <page-navigation-item target="wen-jian-suo-lue-tu">文件缩略图</page-navigation-item>
      <page-navigation-item target="tu-pian-lie-biao-suo-lue-tu">图片列表缩略图</page-navigation-item>
      <page-navigation-item target="shang-chuan-wen-jian-lie-biao-kong-zhi">上传文件列表控制</page-navigation-item>
      <page-navigation-item target="tuo-zhuai-shang-chuan">拖拽上传</page-navigation-item>
      <page-navigation-item target="shou-dong-shang-chuan">手动上传</page-navigation-item>
      <page-navigation-item target="attribute">Attribute</page-navigation-item>
      <page-navigation-item target="slot">Slot</page-navigation-item>
      <page-navigation-item target="methods">Methods</page-navigation-item>
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
import DianJiShangChuan from './components/upload/DianJiShangChuan.vue'
import YongHuTouXiangShangChuan from './components/upload/YongHuTouXiangShangChuan.vue'
import ZhaoPianQiang from './components/upload/ZhaoPianQiang.vue'
import WenJianSuoLueTu from './components/upload/WenJianSuoLueTu.vue'
import TuPianLieBiaoSuoLueTu from './components/upload/TuPianLieBiaoSuoLueTu.vue'
import ShangChuanWenJianLieBiaoKongZhi from './components/upload/ShangChuanWenJianLieBiaoKongZhi.vue'
import TuoZhuaiShangChuan from './components/upload/TuoZhuaiShangChuan.vue'
import ShouDongShangChuan from './components/upload/ShouDongShangChuan.vue'

@Component({ components: { CodeLine, DemoBlock, TableProps, TableMethods, TableEvents, TableSlot, PageNavigation, PageNavigationItem, DianJiShangChuan, YongHuTouXiangShangChuan, ZhaoPianQiang, WenJianSuoLueTu, TuPianLieBiaoSuoLueTu, ShangChuanWenJianLieBiaoKongZhi, TuoZhuaiShangChuan, ShouDongShangChuan }})
export default class UploadView extends Vue {
  get dianJiShangChuan(): object[] { return require('assets/config/element-ui/upload.config.json').code.dianJiShangChuan }
  get yongHuTouXiangShangChuan(): object[] { return require('assets/config/element-ui/upload.config.json').code.yongHuTouXiangShangChuan }
  get zhaoPianQiang(): object[] { return require('assets/config/element-ui/upload.config.json').code.zhaoPianQiang }
  get wenJianSuoLueTu(): object[] { return require('assets/config/element-ui/upload.config.json').code.wenJianSuoLueTu }
  get tuPianLieBiaoSuoLueTu(): object[] { return require('assets/config/element-ui/upload.config.json').code.tuPianLieBiaoSuoLueTu }
  get shangChuanWenJianLieBiaoKongZhi(): object[] { return require('assets/config/element-ui/upload.config.json').code.shangChuanWenJianLieBiaoKongZhi }
  get tuoZhuaiShangChuan(): object[] { return require('assets/config/element-ui/upload.config.json').code.tuoZhuaiShangChuan }
  get shouDongShangChuan(): object[] { return require('assets/config/element-ui/upload.config.json').code.shouDongShangChuan }
  get slot(): object[] { return require('assets/config/element-ui/upload.config.json').slot }
  get methods(): object[] { return require('assets/config/element-ui/upload.config.json').methods }
}
</script>