<template>
  <div class="ml-3 relative">
    <div>
      <button
        type="button"
        class="
          max-w-xs
          bg-white
          flex
          items-center
          text-sm
          rounded-full
          focus:outline-none
          focus:ring-2
          focus:ring-offset-2
          focus:ring-indigo-500
        "
        id="user-menu-button"
        aria-expanded="false"
        aria-haspopup="true"
        @click="toggleDropdown"
      >
        {{ getUserFullName }}
      </button>
    </div>

    <div
      v-if="showDropdown"
      class="
        origin-top-right
        absolute
        right-0
        mt-2
        w-48
        rounded-md
        shadow-lg
        py-1
        bg-white
        ring-1 ring-black ring-opacity-5
        focus:outline-none
      "
      role="menu"
      aria-orientation="vertical"
      aria-labelledby="user-menu-button"
      tabindex="-1"
    >
      <a
        href="#"
        class="block px-4 py-2 text-sm text-gray-700"
        role="menuitem"
        tabindex="-1"
        id="user-menu-item-2"
        @click="logout"
      >
        Sign out
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProfileDropdown',
  data() {
    return {
      showDropdown: false,
    };
  },
  computed: {
    getUserFullName() {
      return this.$keycloak.fullName;
    },
  },
  methods: {
    toggleDropdown() {
      this.showDropdown = !this.showDropdown;
    },
    logout() {
      console.log(this.$keycloak);
      this.$keycloak.logoutFn();
    },
  },
};
</script>
