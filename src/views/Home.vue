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
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div>
            <div class="w-full flex mb-4 mt-4">
              <label for="query" class="sr-only">Add Query</label>
              <input
                v-model="newQueryValue"
                type="text"
                name="query"
                id="query"
                class="
                  shadow-sm
                  focus:ring-indigo-500 focus:border-indigo-500
                  block
                  w-full
                  sm:text-sm
                  border-gray-300
                  rounded-md
                  mr-4
                "
                placeholder="New Query"
              />
              <button
                type="button"
                class="
                  inline-flex
                  items-center
                  px-4
                  py-2
                  border border-transparent
                  text-sm
                  font-medium
                  rounded-md
                  text-indigo-700
                  bg-indigo-100
                  hover:bg-indigo-200
                  focus:outline-none
                  focus:ring-2
                  focus:ring-offset-2
                  focus:ring-indigo-500
                "
                @click="addQuery"
              >
                Add
              </button>
            </div>
          </div>

          <QueryTable
            :active-queries="activeQueries"
            @removeQuery="removeQuery"
          />
        </div>
      </main>
    </MainLayout>
  </div>
</template>

<script>
import MainLayout from '@/layouts/MainLayout';
import QueryTable from '@/components/QueryTable';
import { addQuery, getAllQueries, removeQuery } from '@/api/queries';

export default {
  name: 'Home',
  components: {
    MainLayout,
    QueryTable,
  },
  data() {
    return {
      activeQueries: [],
      newQueryValue: '',
    };
  },
  created() {
    this.updateQueries();
  },
  methods: {
    async addQuery() {
      if (this.newQueryValue.length > 0) {
        console.log('add query');
        await addQuery({ term: this.newQueryValue });

        this.newQueryValue = '';

        this.updateQueries();
      }
    },
    async updateQueries() {
      const { data } = await getAllQueries();
      this.activeQueries = data;
    },
    async removeQuery(target) {
      await removeQuery(target.id);

      this.updateQueries();
    },
  },
};
</script>
