<template>
  <div>
    <h2>导航栏</h2>
    <div class="child-page" v-for="(item, index) in childPage" :key="item.path">
      <router-link :to="item.path"
        >{{ index + 1 }}、{{ item.name }}</router-link
      >
    </div>
  </div>
</template>
<script setup>
import { routes } from "@/router/index";
import { ref } from "vue";

const childPage = ref([]);
childPage.value = routes.filter((item) => item.path !== "/");
</script>
<style scoped>
.child-page {
  width: 100vw;
  background-color: rgb(121, 241, 199);
  padding: 2vw;
}

.child-page:not(:last-child) {
  border-bottom: 1px black dashed;
}
</style>
