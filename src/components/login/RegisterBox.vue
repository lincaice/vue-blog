<template>
  <!-- 注册盒子 -->
  <v-card class="register-box mx-auto" max-width="450">
    <login-logo />
    <div class="px-14 pt-4 pb-4">
      <v-card-title class="justify-center">注册</v-card-title>
      <v-form ref="registerForm">
        <v-text-field
          class="pb-1"
          ref="emailInput"
          label="邮箱"
          v-model="registerInfo.qqEmail"
          :rules="[validateEmail]"
          :validate-on-blur="true"
          single-line
          outlined
          dense
        ></v-text-field>
        <v-text-field
          class="pb-1"
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
        <v-text-field
          class="pb-1"
          label="确认密码"
          :type="showPsw ? 'text' : 'password'"
          v-model="registerInfo.confirmPassword"
          :append-icon="showPsw ? 'mdi-eye' : 'mdi-eye-off'"
          @click:append="showPsw = !showPsw"
          :rules="[comfirmPswValid]"
          :validate-on-blur="true"
          single-line
          outlined
          dense
        ></v-text-field>
        <v-row>
          <v-col cols="7">
            <v-text-field
              class="pb-1"
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
            <v-btn dense outlined block height="40" @click="sendCode" :disabled='sendCodeDisabled'>发送验证码</v-btn>
          </v-col>
        </v-row>
        <v-btn rounded depressed color="primary" block @click="registerHandle">注册</v-btn>
      </v-form>
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
import { getValidCode, register } from "@/api/user";
export default {
  mixins: [loginBase, testCode],
  data() {
    return {
      // 密码内容显示或隐藏
      showPsw: false,
      // 登录相关信息
      registerInfo: {
        qqEmail: "",
        password: "",
        confirmPassword: "",
        validCode: "",
      },
      sendCodeDisabled: false
    };
  },
  methods: {
    goLogin() {
      this.$router.push("/login");
    },
    comfirmPswValid(str) {
      let isSame =
        this.registerInfo.password === this.registerInfo.confirmPassword;
      if (isSame === true) return this.validatePsw(str);
      return "两次密码不一致";
    },
    async registerHandle() {
      if (this.$refs.registerForm.validate()) {
        const { data: res } = await register(this.registerInfo);
        if (res.code === 200) {
          this.$message({
            type: "success",
            message: "注册成功",
          });
        } else {
          this.$message({
            type: "error",
            message: "注册失败，被人抢先一步",
          });
        }
      } else {
        this.$message({
          type: "warning",
          message: "未成功注册，未发送验证码注册信息未按要求正确填写",
        });
      }
    },
    async sendCode() {
      if (this.$refs.emailInput.valid) {
        const { data: res } = await getValidCode({
          qqEmail: this.registerInfo.qqEmail,
        });
        if (res.code === 200) {
          this.sendCodeDisabled = true;
          this.$message({
            type: "success",
            message: "验证码发送成功",
          });
        } else {
          this.$message({
            type: "error",
            message: "验证码发送失败",
          });
        }
      } else {
        this.$message({
          type: "warning",
          message: "请填入正确的邮箱",
        });
      }
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