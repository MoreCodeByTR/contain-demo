<template>
  <back-home />
  <h1>滚动数字</h1>
  <div class="price-cotainer">
    <div class="number-contianer">
      <span ref="number" class="number">0123456789</span>
    </div>
    <div class="number-contianer">
      <span ref="number2" class="number">0123456789</span>
    </div>
    <div class="number-contianer">
      <span ref="number3" class="number">0123456789</span>
    </div>
  </div>

  <el-button type="primary" @click="resetNumber">重置</el-button>
</template>
<script setup>
import BackHome from "@/components/BackHome.vue";
import { ref, onMounted } from "vue";

defineProps({
  msg: String,
});

const number = ref(null);
const number2 = ref(null);
const number3 = ref(null);

const count = ref(0);

onMounted(() => {
  resetNumber();
});

function resetNumber() {
  moveNumber(Math.floor(Math.random() * 10), number);
  moveNumber(Math.floor(Math.random() * 10), number2);
  moveNumber(Math.floor(Math.random() * 10), number3);
}

function moveNumber(end, ref) {
  let rate = 0;
  let timer = setInterval(() => {
    if (rate < end * 10) {
      rate++;
    } else {
      clearInterval(timer);
    }
    ref.value.style = `transform: translateY(${-rate}%)`;
  }, 10);
}
</script>

<style scoped>
.price-cotainer {
  display: flex;
  margin-bottom: 20px;
}

.number-contianer {
  width: 20px;
  height: 40px;
  overflow: hidden;
}
.number {
  writing-mode: vertical-rl;
  text-orientation: upright;
  font-weight: 700;
  font-size: 28px;
  color: rgb(241, 141, 84);
}
</style>
