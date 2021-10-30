<template>
  <div class="home">
    <MainLayout>
      <header>
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 class="text-3xl font-bold leading-tight text-gray-900">
            Search Queries
          </h1>
        </div>
      </header>
      <main>
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8"></div>
      </main>
    </MainLayout>
  </div>
</template>

<script>
import MainLayout from '@/layouts/MainLayout';

export default {
  name: 'Home',
  components: {
    MainLayout,
  },
  data() {
    return {};
  },
  created() {},
};
</script>
