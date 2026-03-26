<script setup lang="ts">
import { computed } from "vue";
import { useBeverageStore } from "../stores/beverageStore";

const store = useBeverageStore();

const baseHeight = computed(() => store.baseHeight);
const currentBase = computed(() => store.currentBase);
</script>

<template>
  <div
    class="base"
    :style="{
      backgroundColor: currentBase.color,
      height: baseHeight + '%'
    }"
  ></div>
</template>

<style scoped>
.base {
  position: absolute;
  bottom: 0;
  width: 100%;
}
</style>