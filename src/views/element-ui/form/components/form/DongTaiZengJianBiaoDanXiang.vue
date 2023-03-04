<template>
  <div class="model-box">
    <el-form :model="dynamicValidateForm" ref="dynamicValidateForm" label-width="100px" class="demo-dynamic">
      <el-form-item
        prop="email"
        label="邮箱"
        :rules="[
          { required: true, message: '请输入邮箱地址', trigger: 'blur' },
          { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] },
        ]"
      >
        <el-input v-model="dynamicValidateForm.email"></el-input>
      </el-form-item>
      <el-form-item
        v-for="(domain, index) in dynamicValidateForm.domains"
        :label="'域名' + index"
        :key="domain.key"
        :prop="'domains.' + index + '.value'"
        :rules="{
          required: true,
          message: '域名不能为空',
          trigger: 'blur',
        }"
      >
        <el-input v-model="domain.value"></el-input><el-button @click.prevent="removeDomain(domain)">删除</el-button>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('dynamicValidateForm')">提交</el-button>
        <el-button @click="addDomain">新增域名</el-button>
        <el-button @click="resetForm('dynamicValidateForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class DongTaiZengJianBiaoDanXiang extends Vue {
  dynamicValidateForm: any = { domains: [{ value: '' }], email: '' }

  submitForm(formName: any) {
    ; (this.$refs[formName] as any).validate((valid: any) => {
      if (valid) {
        alert('submit!')
      } else {
        console.log('error submit!!')
        return false
      }
    })
  }
  resetForm(formName: any) {
    ; (this.$refs[formName] as any).resetFields()
  }
  removeDomain(item: any) {
    const index = this.dynamicValidateForm.domains.indexOf(item)
    if (index !== -1) {
      this.dynamicValidateForm.domains.splice(index, 1)
    }
  }
  addDomain() {
    this.dynamicValidateForm.domains.push({ value: '', key: Date.now() })
  }
}
</script>

<style lang="scss" scoped>
.el-form-item {
  margin-bottom: 22px;
}
</style>
