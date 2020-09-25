<template>
  <div class="toggle-wrapper">
    <!-- <label class="toggle">
      <input
        type="checkbox"
        :checked="mode === 'dark' ? 'checked' : false"
        @change="$emit('toggle')"/>
      <span class="toggler round"></span
    ></label> -->
    <button class="btn toggleBtn" @click="$emit('toggle')">
      <b-icon
        class="toggle"
        v-if="mode === 'light'"
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
  props: ["mode"],
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
