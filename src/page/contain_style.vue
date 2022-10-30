<template>
  <back-home />
  <h1>contanin size</h1>
  <el-button type="primary" @click="addChild">新增</el-button>
  <div class="page-content">
    <div class="container contain-layout">
         <div class="contain-child" v-for="item in childs" :key="item">
        {{ item.time }}
      </div>
    </div>
    <div>
      other div
    </div>
  </div>
</template>
<script setup>
import BackHome from "@/components/BackHome.vue";
import { ref } from "vue";

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
  border: 1px solid green;
}

.container {
  width: 300px;
  padding: 20px 0;
  border: 1px solid red;
  margin-bottom: 10px;
}

.contain-layout {
  contain: layout;
}

.page-content {
  /* display: flex;
  width: 100vw;
  justify-content: space-around; */
}
</style>
