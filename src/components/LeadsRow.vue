<template>
  <tr>
    <th
      class="
        border-t-0
        px-6
        align-middle
        border-l-0 border-r-0
        text-xs
        whitespace-nowrap
        p-4
        text-left
        flex
        items-center
      "
    >
      <img
        :src='image'
        class="h-24 rounded-sm"
        alt="..."
      />
    </th>
    <td
      class="
        border-t-0
        px-6
        align-middle
        border-l-0 border-r-0
        text-xs
        whitespace-nowrap
        p-4
      "
    >
      {{ status }}
    </td>
    <td
      class="
        border-t-0
        px-6
        align-middle
        border-l-0 border-r-0
        text-xs
        whitespace-nowrap
        p-4
      "
    >
      <i class="fas fa-circle text-orange-500 mr-2"></i>{{ animal }}
    </td>
    <td
      class="
        border-t-0
        px-6
        align-middle
        border-l-0 border-r-0
        text-xs
        whitespace-nowrap
        p-4
      "
    >
      <i class="fas fa-circle text-orange-500 mr-2"></i>{{ tags }}
    </td>

    <td
      class="
        border-t-0
        px-6
        align-middle
        border-l-0 border-r-0
        text-xs
        whitespace-nowrap
        p-4
      "
    >
      <div class="flex items-center" :style="cssProps">
        <span class="mr-2">{{ match }} %</span>
        <div class="relative w-full">
          <div class="overflow-hidden h-2 text-xs flex rounded bg-red-200">
            <div
              class="
                match-class
                shadow-none
                flex flex-col
                text-center
                whitespace-nowrap
                text-white
                justify-center
                bg-green-500
              "
            ></div>
          </div>
        </div>
      </div>
    </td>
    <td
      class="
        border-t-0
        px-6
        align-middle
        border-l-0 border-r-0
        text-xs
        whitespace-nowrap
        p-4
        text-right
      "
    ></td>
  </tr>
</template>

<script>
export default {
  name: 'LeadsRow',
  props: {
    image: String,
    status: String,
    animal: String,
    tags: String,
    match: Number,
  },
  computed: {
    cssProps() {
      return {
        '--match-width': this.match + '%',
      };
    },
  },
};
</script>

<style>
.match-class {
  width: var(--match-width);
}
</style>
