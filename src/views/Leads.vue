<template>
  <MainLayout>
    <header>
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 class="text-3xl font-bold leading-tight text-gray-900">Leads</h1>
      </div>
    </header>
    <main>
      <div class="max-w-7xl mx-auto"><leads-table /></div>
    </main>
  </MainLayout>
</template>

<script>
import MainLayout from '@/layouts/MainLayout';
import LeadsTable from '../components/LeadsTable.vue';

export default {
  name: 'Leads',
  components: {
    MainLayout,
    LeadsTable,
  },
  data() {
    return {};
  },
  created() {},
};
</script>
