<template>
  <section class="relative py-16 bg-blueGray-50">
    <div class="w-full mb-12 px-4">
      <div
        class="
          relative
          flex flex-col
          min-w-0
          break-words
          w-full
          mb-6
          shadow-lg
          rounded
          bg-violet-900
          text-white
        "
      >
        <div class="rounded-t mb-0 px-4 py-3 border-0">
          <div class="flex flex-wrap items-center">
            <div class="relative w-full px-4 max-w-full flex-grow flex-1">
              <h3 class="font-semibold text-lg text-white">List of leads</h3>
            </div>
          </div>
        </div>
        <div class="block w-full overflow-x-auto">
          <table class="items-center w-full bg-transparent border-collapse">
            <thead>
              <tr>
                <th
                  class="
                    px-6
                    align-middle
                    border border-solid
                    py-3
                    text-xs
                    uppercase
                    border-l-0 border-r-0
                    whitespace-nowrap
                    font-semibold
                    text-left
                    bg-violet-800
                    text-violet-300
                    border-violet-700
                  "
                >
                  Image
                </th>
                <th
                  class="
                    px-6
                    align-middle
                    border border-solid
                    py-3
                    text-xs
                    uppercase
                    border-l-0 border-r-0
                    whitespace-nowrap
                    font-semibold
                    text-left
                    bg-violet-800
                    text-violet-300
                    border-violet-700
                  "
                >
                  Review status
                </th>
                <th
                  class="
                    px-6
                    align-middle
                    border border-solid
                    py-3
                    text-xs
                    uppercase
                    border-l-0 border-r-0
                    whitespace-nowrap
                    font-semibold
                    text-left
                    bg-violet-800
                    text-violet-300
                    border-violet-700
                  "
                >
                  Animal
                </th>
                <th
                  class="
                    px-6
                    align-middle
                    border border-solid
                    py-3
                    text-xs
                    uppercase
                    border-l-0 border-r-0
                    whitespace-nowrap
                    font-semibold
                    text-left
                    bg-violet-800
                    text-violet-300
                    border-violet-700
                  "
                >
                  Tags
                </th>
                <th
                  class="
                    px-6
                    align-middle
                    border border-solid
                    py-3
                    text-xs
                    uppercase
                    border-l-0 border-r-0
                    whitespace-nowrap
                    font-semibold
                    text-left
                    bg-violet-800
                    text-violet-300
                    border-violet-700
                  "
                >
                  Match
                </th>
                <th
                  class="
                    px-6
                    align-middle
                    border border-solid
                    py-3
                    text-xs
                    uppercase
                    border-l-0 border-r-0
                    whitespace-nowrap
                    font-semibold
                    text-left
                    bg-violet-800
                    text-violet-300
                    border-violet-700
                  "
                ></th>
              </tr>
            </thead>

            <tbody>
              <!-- <leads-row image='' status='progress' animal='tiger' tags='body, bone, teeth' match=70 /> -->
              <leads-row
                v-for="(lead, index) in leads"
                :key="index"
                :image="lead.image"
                :status="lead.status"
                :animal="lead.animal"
                :tags="lead.tags"
                :match="lead.match"
              />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import LeadsRow from './LeadsRow.vue';
export default {
  components: { LeadsRow },
  name: 'LeadsTable',
  data() {
    return {
      leads: [
        {
          image:
            'https://files.worldwildlife.org/wwfcmsprod/images/Tiger_resting_Bandhavgarh_National_Park_India/hero_full/77ic6i4qdj_Medium_WW226365.jpg',
          status: 'in review',
          animal: 'tiger',
          tags: 'body, bone, teeth',
          match: 70,
        },
        {
          image:
            'https://static.dw.com/image/16459750_403.jpg',
          status: 'reviewed',
          animal: 'tiger',
          tags: 'body, bone, head',
          match: 50,
        },
        {
          image:
            'https://static.india.com/wp-content/uploads/2015/10/xgvdggr5555.jpg',
          status: 'reviewed',
          animal: 'tiger',
          tags: 'body, skin',
          match: 90,
        },
        {
          image:
            'https://i0.wp.com/kateonconservation.com/wp-content/uploads/2018/10/VIER-PFOTEN_2018-10-08_012.jpg?ssl=1',
          status: 'in progress',
          animal: 'tiger',
          tags: 'body, bone, skin, teeth',
          match: 60,
        },
        {
          image:
            'https://chinadialogue-production.s3.amazonaws.com/uploads/content_image/content_image/4650/GP0STQXG3_Web_size.jpg',
          status: 'in progress',
          animal: 'tiger',
          tags: 'body, bone, skin, head',
          match: 80,
        },
      ],
    };
  },
};
</script>

<style></style>
