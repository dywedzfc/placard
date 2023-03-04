<template>
  <div class="page-container">
    <h2>安装</h2>
    <h3>npm 安装</h3>
    <p>
      推荐使用 npm 的方式安装，它能更好地和
      <a href="https://webpack.js.org/" target="_blank">webpack</a> 打包工具配合使用。
    </p>
    <pre>
      <code class="code-bar">npm i element-ui -S</code>
    </pre>
    <h3>CDN</h3>
    <p>
      目前可以通过
      <a href="https://unpkg.com/element-ui/" target="_blank">unpkg.com/element-ui</a>
      获取到最新版本的资源，在页面上引入 js 和 css 文件即可开始使用。
    </p>
    <pre>
      <code class="code-bar">&lt;!-- 引入样式 --&gt;
&lt;link rel="stylesheet" href="https://unpkg.com/element-ui/lib/theme-chalk/index.css" /&gt;
&lt;!-- 引入组件库 --&gt;
&lt;script src="https://unpkg.com/element-ui/lib/index.js"&gt;&lt;/script&gt;</code>
    </pre>
    <div class="tip">
      <p>
        我们建议使用 CDN 引入 Element 的用户在链接地址上锁定版本，以免将来 Element
        升级时受到非兼容性更新的影响。锁定版本的方法请查看 <a href="https://unpkg.com/" target="_blank">unpkg.com</a>。
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Installation extends Vue {}
</script>
