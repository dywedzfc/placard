<template>
  <div class="model-box">
    <template>
      <div class="demo-fit">
        <div class="block" v-for="fit in fits" :key="fit">
          <span class="title">{{ fit }}</span>
          <el-avatar shape="square" :size="100" :fit="fit" :src="url"></el-avatar>
        </div>
      </div>
    </template>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class TuPianRuHeGuaYingRongQiKuang extends Vue {
  fits = ['fill', 'contain', 'cover', 'none', 'scale-down']
  url = 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
}
</script>

<style lang="scss" scoped>
.demo-fit {
  display: flex;
  text-align: center;
  justify-content: space-between;

  .block {
    flex: 1;
    display: flex;
    flex-direction: column;
    flex-grow: 0;
    width: auto;
    padding: 0;
  }
  .title {
    margin-bottom: 10px;
    font-size: 14px;
    color: #8492a6;
  }
}
</style>
