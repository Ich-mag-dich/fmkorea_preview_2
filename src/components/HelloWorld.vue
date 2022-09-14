<script setup lang="ts">
    import { ref } from 'vue'
    defineProps<{ msg: string }>()
    const count = ref(0)
    </script>
    
    <template>
      <div class="testDiv">
        <h1> /// </h1>
        <h1>{{ msg }}</h1>
        <div class="card">
          <button type="button" @click="count++">count is {{ count }}</button>
        </div>
        <h1> /// </h1>
      </div>
      
    </template>
    <style scoped>
    .read-the-docs {
      color: #888;
    }
.testDiv {
        border-style: solid;
        border-width: 2px;
    }
    </style>