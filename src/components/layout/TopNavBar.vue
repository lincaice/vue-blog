<template>
  <v-app-bar app elevate-on-scroll elevation="1" flat height="60" color="#fff">
    <div class="menus-list">
      <div class="menus-left-list">
        <img src="../../assets/logo.svg" alt="logo" style="width:30px;" />
        <span class="blog-name d-md-inline d-none">XXXX博客</span>
      </div>
      <div class="search-blog-item">
        <v-text-field
          label="搜索博客"
          clearable
          solo
          dense
          color="primary"
          append-icon="iconfont icon-guanliyuan"
          hide-details
        ></v-text-field>
      </div>
      <!-- 电脑端 -->
      <div class="menus-right-list d-md-flex d-none">
        <div class="menus-list-item">发现</div>
        <div class="menus-list-item">推荐</div>
        <div class="menus-list-item">娱乐</div>
        <div class="menus-list-item" @click="goLogin">登录</div>
        <v-btn color="primary" depressed v-ripple="false" dark>写博客</v-btn>
      </div>
      <div icon class="d-md-none">
        <i class="iconfont icon-liebiao"></i>
      </div>
    </div>
  </v-app-bar>
</template>

<script>
  export default {
    name: 'TopNavBar',
    data() {
      return {
        
      }
    },
    methods: {
      goLogin() {
        this.$router.push('/login')
      }
    },
  }
</script>
<style lang="scss" scoped>

.menus-list {
  width: 100%;
  box-sizing: border-box;
  font-size: 14px;
  font-weight: 400;
  color: #18191c;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.menus-right-list {
  align-items: center;
  .menus-list-item {
    margin: 0 20px;
  }
}

.menus-left-list {
  display: flex;
  align-items: center;
  .blog-name{
    font-size: 18px;
    margin-left: 10px;
    font-weight: 800;
  }
}

</style>