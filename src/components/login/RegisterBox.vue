<template>
  <!-- 注册盒子 -->
  <v-card class="register-box mx-auto" max-width="450">
    <login-logo />
    <div class="px-14 pt-6 pb-8">
      <v-card-title class="justify-center">注册</v-card-title>
      <v-text-field
        class="pb-2"
        label="邮箱"
        v-model="registerInfo.email"
        :rules="[validateEmail]"
        :validate-on-blur="true"
        single-line
        outlined
        dense
      ></v-text-field>
      <v-text-field
        class="pb-2"
        label="密码"
        :type="showPsw ? 'text' : 'password'"
        v-model="registerInfo.password"
        :append-icon="showPsw ? 'mdi-eye' : 'mdi-eye-off'"
        @click:append="showPsw = !showPsw"
        :rules="[validatePsw]"
        :validate-on-blur="true"
        single-line
        outlined
        dense
      ></v-text-field>
      <v-row>
        <v-col cols="7">
          <v-text-field
            class="pb-2"
            label="4位邮箱验证码"
            v-model="registerInfo.validCode"
            :rules="[validateCode]"
            :validate-on-blur="true"
            single-line
            outlined
            dense
          ></v-text-field>
        </v-col>
        <v-col cols="5">
          <v-btn dense outlined block height="40">发送验证码</v-btn>
        </v-col>
      </v-row>
      <v-btn rounded depressed color="primary" block>注册</v-btn>
    </div>
    <v-card-actions class="register-footer">
      <span class="text-tips">已有账号,</span>
      <v-btn color="orange" text small dense @click="goLogin">直接登录</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
// 混入LoginLogo组件及相关验证方法
import { loginBase, testCode } from "./mixin";
export default {
  mixins: [loginBase, testCode],
  data() {
    return {
      // 密码内容显示或隐藏
      showPsw: false,
      // 登录相关信息
      registerInfo: {
        email: "",
        password: "",
        validCode: "",
      },
    };
  },
  methods: {
    goLogin() {
      this.$router.push("/login");
    },
  },
};
</script>

<style lang='scss' scoped>
.register-box {
  margin: 50px 0;
}

.register-footer {
  padding: 8px 48px;
  justify-content: center;
  align-items: baseline;
  .text-tips {
    font-size: 12px;
  }
}
</style>