<template>
  <div class="home">
    <h1>App</h1>

    <Table
      :columns="[{ id: 'test', name: 'Test' }]"
      :data="[{ test: 'Hola mundo' }]"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Table from '@/components/Table.vue';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

export default defineComponent({
  name: 'HomeView',
  components: {
    Table,
  },
});
</script>
