<script lang="ts">
import Home from './tabTest/Home1Component.vue'
import Test from './tabTest/Home2Component.vue'
import About from './tabTest/Home3Component.vue'

export default {
  components: {
    Home,
    Test,
    About,
  },
  data() {
    return {
      currentTab: 'Home',
      tabs: ['Home', 'Test', 'About'],
    }
  },
}
</script>

<template>
  <div class="demo">
    <button
      v-for="tab in tabs"
      :key="tab"
      :class="['tab-button', { active: currentTab === tab }]"
      @click="currentTab = tab"
    >
      {{ tab }}
    </button>
    <component :is="currentTab" class="tab" />
  </div>
</template>

<style>
.demo {
  margin-bottom: 30px;
  border-style: solid;
  border-width: 2px;
  border-radius: 5px;
  min-height: 200px;
}
.tab-button {
  margin-top: 20px;
}
</style>
