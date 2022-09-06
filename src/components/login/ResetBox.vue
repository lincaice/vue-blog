<template>
  <!-- 注册盒子 -->
  <v-card class="register-box mx-auto" max-width="450">
    <login-logo />
    <div class="px-14 pt-6 pb-8">
      <v-card-title class="justify-center">找回密码</v-card-title>
      <v-form ref="resetForm">
      <v-text-field
        class="pb-2"
        label="邮箱"
        v-model="resetInfo.email"
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
        v-model="resetInfo.password"
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
            v-model="resetInfo.validCode"
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
      </v-form>
    </div>
    <v-card-actions class="px-12 justify-center">
      <v-btn color="orange" text small dense @click="goLogin">返回登录</v-btn>
      <span>|</span>
      <v-btn color="orange" text small dense @click="goRegister">快速注册</v-btn>
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
      resetInfo: {
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
    goRegister() {
      this.$router.push("/register");
    },
  },
};
</script>

<style lang='scss' scoped>
.register-box {
  margin: 50px 0;
}
</style>