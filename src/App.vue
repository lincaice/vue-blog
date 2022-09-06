<template>
  <v-app>
    <top-nav-bar></top-nav-bar>
    <v-main>
      <router-view></router-view>
    </v-main>
    <bottom-bar></bottom-bar>
  </v-app>
</template>

<script>
import TopNavBar from "@/components/layout/TopNavBar";
import BottomBar from "@/components/layout/BottomBar";
export default {
  name: "App",
  components: {
    TopNavBar,
    BottomBar,
  },
};
</script>
