<template>
  <back-home />
  <h1>contanin size</h1>
  <el-button type="primary" @click="switchLayout">{{
    needLayout ? "关" : "开"
  }}</el-button>
  <article :class="{ 'contain-layout': needLayout }">
    <h2>This is blog one.</h2>
    <p>I am the content of blog 1.</p>
    <img
      src="https://avatars.githubusercontent.com/u/51108500?s=40&v=4"
      alt="Hello I am a wooden box"
    />
  </article>

  <article :class="{ 'contain-layout': needLayout }">
    <h2>This is blog two.</h2>
    <img
      src="https://avatars.githubusercontent.com/u/51108500?s=40&v=4"
      alt="Hello I am also a wooden box"
    />
    <p>I am the content of blog 2.</p>
  </article>
</template>
<script setup>
import BackHome from "@/components/BackHome.vue";
import { ref } from "vue";

defineProps({
  msg: String,
});

const childs = ref([]);

const needLayout = ref(false);

function switchLayout() {
  needLayout.value = !needLayout.value;
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

img {
  float: left;
}
article {
  border: 1px solid black;
}

.mask-area {
  position: absolute;
  top: 200px;
  background-color: aqua;
}
</style>
