<template>
  <back-home />
  <h1>contanin paint</h1>
  <div class="page-content">
    <div class="container">
      <div class="contain-child"></div>
    </div>

    <div class="container contain-paint">
      contain-paint
      <div class="contain-child"></div>
    </div>

    <div class="container hidden-overflow">
      overflow: hidden
      <div class="contain-child"></div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import BackHome from "@/components/BackHome.vue";

defineProps({
  msg: String,
});

const childs = ref([]);

const count = ref(0);

function addChild() {
  childs.value.push({
    time: Date.now(),
  });
}
</script>

<style scoped>
.read-the-docs {
  color: #888;
}

.contain-child {
  width: 400px;
  height: 200px;
  background-color: greenyellow;
}

.container {
  width: 300px;
  height: 300px;
  padding: 20px 0;
  border: 1px solid red;
  margin-bottom: 10px;
}

.contain-paint {
  contain: paint;
}

.page-content {
  display: flex;
  width: 100vw;
  justify-content: space-around;
}

.hidden-overflow {
  overflow: hidden;
}
</style>
