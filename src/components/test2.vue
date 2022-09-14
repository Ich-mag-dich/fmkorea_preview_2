<script lang="ts">
import Home1 from './tabTest/Home1.vue'
import Home2 from './tabTest/Home2.vue'
import Home3 from './tabTest/Home3.vue'

export default {
  components: {
    Home1,
    Home2,
    Home3,
  },
  data () {
    return {
      currentTab: 'Home1',
      tabs: ['Home1', 'Home2', 'Home3']
		};
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
		<component :is="currentTab" class="tab"></component>
	</div>
</template>
