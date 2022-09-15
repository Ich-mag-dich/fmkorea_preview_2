<script setup lang="ts">
    import {ref} from 'vue'
    defineProps<{ testMessage: string }>()
    const testCount = ref(0)
</script>

<template>
    <div class="testDiv">

        <h1> /// </h1>
        <h1> {{ testMessage }}</h1>
        <div class="testClass">
            <button type="button" @click="testCount++">
                count is {{ testCount }}
            </button>
        </div>
        <h1> /// </h1>
    </div>
</template>


<style scoped>
    .testClass {
        color: red;
    }
    .testDiv {
        border-style: solid;
        border-width: 2px;
        min-width: 300px;
        border-radius: 5px;
    }
</style>