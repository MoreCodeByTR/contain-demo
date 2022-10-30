<script setup>
import { Back } from '@element-plus/icons-vue'
import { useRouter } from 'vue-router'

const router = useRouter()

function jumpToHomePage(){
    router.replace('/')
}
</script>

<template>
  <el-button type="plain" :icon="Back"  @click="jumpToHomePage">返回</el-button>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
