<template>
  <div class="page-container">
    <h2 id="header">快速上手</h2>
    <p>本节将介绍如何在项目中使用 Element。</p>

    <page-navigation target="header">
      <page-navigation-item target="使用-vue-cli@3"
        >使用 vue-cli@3</page-navigation-item
      >
      <page-navigation-item target="使用-StarterKit"
        >使用 Starter Kit</page-navigation-item
      >
      <page-navigation-item target="引入-Element"
        >引入 Element</page-navigation-item
      >
      <page-navigation-item target="全局配置">全局配置</page-navigation-item>
    </page-navigation>

    <h3 id="使用-vue-cli@3">使用 vue-cli@3</h3>
    <p>
      我们为新版的 vue-cli 准备了相应的
      <a
        href="https://github.com/ElementUI/vue-cli-plugin-element"
        target="_blank"
        >Element 插件</a
      >，你可以用它们快速地搭建一个基于 Element 的项目。
    </p>

    <h3 id="使用-StarterKit">使用 Starter Kit</h3>
    <p>
      我们提供了通用的<a
        href="https://github.com/ElementUI/element-starter"
        target="_blank"
        >项目模板</a
      >，你可以直接使用。对于 Laravel 用户，我们也准备了相应的<a
        href="https://github.com/ElementUI/element-in-laravel-starter"
        target="_blank"
        >模板</a
      >，同样可以直接下载使用。
    </p>
    <p>如果不希望使用我们提供的模板，请继续阅读。</p>

    <h3 id="引入-Element">引入 Element</h3>
    <p>
      你可以引入整个
      Element，或是根据需要仅引入部分组件。我们先介绍如何引入完整的 Element。
    </p>

    <h4>完整引入</h4>
    <p>在 main.js 中写入以下内容：</p>
    <pre>
      <code class="code-bar">import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';

Vue.use(ElementUI);

new Vue({
  el: '#app',
  render: h => h(App)
});</code>
    </pre>
    <p>以上代码便完成了 Element 的引入。需要注意的是，样式文件需要单独引入。</p>
    <h4>按需引入</h4>
    <p>
      借助
      <a
        href="https://github.com/QingWei-Li/babel-plugin-component"
        target="_blank"
        >babel-plugin-component</a
      >，我们可以只引入需要的组件，以达到减小项目体积的目的。
    </p>
    <p>首先，安装 babel-plugin-component：</p>
    <pre>
      <code class="code-bar">npm install babel-plugin-component -D</code>
    </pre>
    <p>然后，将 .babelrc 修改为：</p>
    <pre>
      <code class="code-bar">{
  "presets": [["es2015", { "modules": false }]],
  "plugins": [
    [
      "component",
      {
        "libraryName": "element-ui",
        "styleLibraryName": "theme-chalk"
      }
    ]
  ]
}
</code>
    </pre>
    <p>
      接下来，如果你只希望引入部分组件，比如 Button 和 Select，那么需要在
      main.js 中写入以下内容：
    </p>
    <pre>
      <code class="code-bar">import Vue from 'vue';
import { Button, Select } from 'element-ui';
import App from './App.vue';

Vue.component(Button.name, Button);
Vue.component(Select.name, Select);
/* 或写为
 * Vue.use(Button)
 * Vue.use(Select)
 */

new Vue({
  el: '#app',
  render: h => h(App)
});</code>
    </pre>
    <p>
      完整组件列表和引入方式（完整组件列表以
      <a
        href="https://github.com/ElemeFE/element/blob/master/components.json"
        target="_blank"
        >components.json</a
      >
      为准）
    </p>
    <pre>
      <code class="code-bar">import Vue from 'vue';
import {
  Pagination,
  Dialog,
  Autocomplete,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Menu,
  Submenu,
  MenuItem,
  MenuItemGroup,
  Input,
  InputNumber,
  Radio,
  RadioGroup,
  RadioButton,
  Checkbox,
  CheckboxButton,
  CheckboxGroup,
  Switch,
  Select,
  Option,
  OptionGroup,
  Button,
  ButtonGroup,
  Table,
  TableColumn,
  DatePicker,
  TimeSelect,
  TimePicker,
  Popover,
  Popconfirm,
  Tooltip,
  Breadcrumb,
  BreadcrumbItem,
  Form,
  FormItem,
  Tabs,
  TabPane,
  Tag,
  Tree,
  Alert,
  Slider,
  Icon,
  Row,
  Col,
  Upload,
  Progress,
  Spinner,
  Badge,
  Avatar,
  Skeleton,
  SkeletonItem,
  Empty,
  Descriptions,
  DescriptionsItem,
  Result,
  Statistic,
  Card,
  Rate,
  Steps,
  Step,
  Carousel,
  CarouselItem,
  Collapse,
  CollapseItem,
  Cascader,
  ColorPicker,
  Transfer,
  Container,
  Header,
  Aside,
  Main,
  Footer,
  Timeline,
  TimelineItem,
  Link,
  Divider,
  Image,
  Calendar,
  Backtop,
  InfiniteScroll,
  PageHeader,
  CascaderPanel,
  Loading,
  MessageBox,
  Message,
  Notification,
} from 'element-ui';

Vue.use(Pagination);
Vue.use(Dialog);
Vue.use(Autocomplete);
Vue.use(Dropdown);
Vue.use(DropdownMenu);
Vue.use(DropdownItem);
Vue.use(Menu);
Vue.use(Submenu);
Vue.use(MenuItem);
Vue.use(MenuItemGroup);
Vue.use(Input);
Vue.use(InputNumber);
Vue.use(Radio);
Vue.use(RadioGroup);
Vue.use(RadioButton);
Vue.use(Checkbox);
Vue.use(CheckboxButton);
Vue.use(CheckboxGroup);
Vue.use(Switch);
Vue.use(Select);
Vue.use(Option);
Vue.use(OptionGroup);
Vue.use(Button);
Vue.use(ButtonGroup);
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(DatePicker);
Vue.use(TimeSelect);
Vue.use(TimePicker);
Vue.use(Popover);
Vue.use(Popconfirm);
Vue.use(Tooltip);
Vue.use(Breadcrumb);
Vue.use(BreadcrumbItem);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Tabs);
Vue.use(TabPane);
Vue.use(Tag);
Vue.use(Tree);
Vue.use(Alert);
Vue.use(Slider);
Vue.use(Icon);
Vue.use(Row);
Vue.use(Col);
Vue.use(Upload);
Vue.use(Progress);
Vue.use(Spinner);
Vue.use(Badge);
Vue.use(Avatar);
Vue.use(Skeleton);
Vue.use(SkeletonItem);
Vue.use(Empty);
Vue.use(Descriptions);
Vue.use(DescriptionsItem);
Vue.use(Result);
Vue.use(Statistic);
Vue.use(Card);
Vue.use(Rate);
Vue.use(Steps);
Vue.use(Step);
Vue.use(Carousel);
Vue.use(CarouselItem);
Vue.use(Collapse);
Vue.use(CollapseItem);
Vue.use(Cascader);
Vue.use(ColorPicker);
Vue.use(Transfer);
Vue.use(Container);
Vue.use(Header);
Vue.use(Aside);
Vue.use(Main);
Vue.use(Footer);
Vue.use(Timeline);
Vue.use(TimelineItem);
Vue.use(Link);
Vue.use(Divider);
Vue.use(Image);
Vue.use(Calendar);
Vue.use(Backtop);
Vue.use(PageHeader);
Vue.use(CascaderPanel);

Vue.use(Loading.directive);
Vue.use(InfiniteScroll);

Vue.prototype.$loading = Loading.service
Vue.prototype.$msgbox = MessageBox
Vue.prototype.$alert = MessageBox.alert
Vue.prototype.$confirm = MessageBox.confirm
Vue.prototype.$prompt = MessageBox.prompt
Vue.prototype.$notify = Notification
Vue.prototype.$message = Message</code>
    </pre>

    <h3 id="全局配置">全局配置</h3>
    <p>
      在引入 Element 时，可以传入一个全局配置对象。该对象目前支持
      <code>size</code> 与 <code>zIndex</code> 字段。<code>size</code>
      用于改变组件的默认尺寸，<code>zIndex</code> 设置弹框的初始
      z-index（默认值：2000）。按照引入 Element 的方式，具体操作如下：
    </p>
    <p>完整引入 Element：</p>
    <pre>
      <code class="code-bar">import Vue from 'vue';
import Element from 'element-ui';
Vue.use(Element, { size: 'small', zIndex: 3000 });</code>
    </pre>
    <p>按需引入 Element：</p>
    <pre>
      <code class="code-bar">import Vue from 'vue';
import { Button } from 'element-ui';

Vue.prototype.$ELEMENT = { size: 'small', zIndex: 3000 };
Vue.use(Button);</code>
    </pre>
    <p>
      按照以上设置，项目中所有拥有 <code>size</code> 属性的组件的默认尺寸均为
      'small'，弹框的初始 z-index 为 3000。
    </p>

    <h3 id="开始使用">开始使用</h3>
    <p>
      至此，一个基于 Vue 和 Element
      的开发环境已经搭建完毕，现在就可以编写代码了。各个组件的使用方法请参阅它们各自的文档。
    </p>
    <br />
    <br />
    <br />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import PageNavigation from 'components/PageNavigation.vue'
import PageNavigationItem from 'components/PageNavigationItem.vue'

@Component({ components: { PageNavigation, PageNavigationItem } })
export default class GetStartedQuickly extends Vue {}
</script>
