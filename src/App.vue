<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import Test1 from './components/testComponent1.vue'
import Test2 from './components/testComponent2.vue'
</script>
<template>
  <div>
    <Test2 />
    <Test1 test-message=" is it true? " />
  </div>
</template>

<style scoped></style>
