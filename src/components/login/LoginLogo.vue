<template>
  <!-- 登录注册相关盒子顶部logo项 -->
  <div class="img-box">
    <img class="blog-icon" src="../../assets/logo.svg" alt="博客" />
    <p class="blog-text">{{blogName}}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      blogName: "XXXX博客",
    };
  },
};
</script>

<style lang="scss" scoped>
.img-box {
  height: 180px;
  background-color: #201b4f;
  background-image: linear-gradient(180deg, #404040 0, #1e1e1e 100%),
    linear-gradient(126deg, #201b4f 15%, #0b0930 100%);
  box-shadow: 0 2px 7px 0 #211b4f;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .blog-icon {
    width: 110px;
  }

  .blog-text {
    margin-top: 10px;
    font-size: 18px;
    color: #fff;
  }
}
</style>