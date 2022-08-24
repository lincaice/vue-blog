<template>
  <v-card class="login-box mx-auto" max-width="450">
    <login-logo />
    <div class="px-14 pt-16 pb-8">
      <v-text-field
        class="pb-2"
        label="邮箱"
        v-model="loginInfo.email"
        :rules="[validateEmail]"
        :validate-on-blur="true"
        single-line
        outlined
        dense
      ></v-text-field>
      <v-text-field
        class="pb-4"
        label="密码"
        :type="showPsw ? 'text' : 'password'"
        v-model="loginInfo.password"
        :append-icon="showPsw ? 'mdi-eye' : 'mdi-eye-off'"
        @click:append="showPsw = !showPsw"
        :rules="[validatePsw]"
        :validate-on-blur="true"
        single-line
        outlined
        dense
      ></v-text-field>
      <v-btn rounded depressed color="primary" block>登录</v-btn>
    </div>
    <v-card-text class="px-14 d-flex justify-center">
      第三方账号登录
      <v-icon class="iconfont weibo-login-icon">icon-weibo-copy</v-icon>
      <v-icon class="iconfont qq-login-icon">icon-qq-copy</v-icon>
    </v-card-text>
    <v-card-actions class="px-12 justify-center">
      <v-btn color="orange" text small dense @click="goReset">找回密码</v-btn>
      <span>|</span>
      <v-btn color="orange" text small dense @click="goRegister">快速注册</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
// 混入LoginLogo组件及相关验证方法
import { loginBase } from "./mixin";
export default {
  mixins: [loginBase],
  data() {
    return {
      // 密码内容显示或隐藏
      showPsw: false,
      // 登录相关信息
      loginInfo: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    goRegister() {
      this.$router.push("/register");
    },
    goReset() {
      this.$router.push("/reset");
    },
  },
};
</script>

<style lang="scss" scoped>
.login-box {
  margin: 50px 0;
}

.v-icon {
  margin-left: 5px;
}

.weibo-login-icon:hover {
  color: rgb(239, 133, 117);
}

.weibo-login-icon {
  color: rgba(239, 133, 117, 0.6);
  cursor: pointer;
}

.qq-login-icon:hover {
  color: rgb(0, 170, 238);
}

.qq-login-icon {
  color: rgba(0, 170, 238, 0.6);
  cursor: pointer;
}
</style>