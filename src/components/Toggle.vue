<template>
  <div class="toggle-wrapper">
    <button class="btn toggleBtn" @click="handleToggle">
      <b-icon
        class="toggle"
        v-if="this.$store.state.mode === 'light'"
        icon="moon"
        aria-hidden="true"
      ></b-icon>
      <b-icon
        class="toggle"
        v-else
        icon="brightness-high"
        aria-hidden="true"
      ></b-icon>
    </button>
  </div>
</template>

<script>
export default {
  name: "Toggle",
  methods: {
    handleToggle() {
      this.$store.commit("toggle");
    },
  },
};
</script>

<style>
.toggleBtn {
  position: absolute;
  right: 0px;
  top: 0;
  border: none;
}
.dark .toggle {
  color: #fff;
  height: 50px;
  width: 50px;
  transition: background 0.3s ease-in-out;
}
.light .toggle {
  color: #181a1b;
  height: 50px;
  width: 50px;
  transition: background 0.3s ease-in-out;
}
</style>
