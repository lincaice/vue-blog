import LoginLogo from '@/components/login/LoginLogo'
const loginBase = {
  components: { LoginLogo },
  methods: {
    validatePsw(str) {
      return /^[\w]{6,16}$/.test(str)
        ? true
        : "密码为6到16位字母，数字，下划线。";
    },
    validateEmail(str) {
      return /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/.test(
        str
      )
        ? true
        : "请输入正确的邮箱。";
    }
  },
}

const testCode = {
  methods: {
    validateCode(str) {
      return /^[\w]{4}$/.test(str)
        ? true
        : "请输入4位验证码。";
    }
  }
}

export { loginBase, testCode }