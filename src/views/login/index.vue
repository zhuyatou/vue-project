<template>
  <div class="login">
    <p>朱丫头</p>
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <!-- 姓名 -->
      <el-form-item label="姓名" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <!-- 密码 -->
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="ruleForm.name"></el-input>
      </el-form-item>
      <!-- 登录 -->
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')"
          >登录</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ruleForm: {
        //初始化
        name: "",
        password: "",
      },
      rules: {
        name: [
          { required: true, message: "请输入姓名", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" },
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 6 到 18 个字符", trigger: "blur" },
        ],
      },
    };
  },
  methods: {
    submitForm() {
      this.$router.push("/home"); //页面跳转
    },
  },
};
</script>

<style></style>
