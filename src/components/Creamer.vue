<script setup lang="ts">
import { computed } from "vue";
import { useBeverageStore } from "../stores/beverageStore";

const store = useBeverageStore();

const baseHeight = computed(() => store.baseHeight);
const syrupHeight = computed(() => store.syrupHeight);
const creamHeight = computed(() => store.creamHeight);
const currentCreamer = computed(() => store.currentCreamer);
</script>

<template>
  <div
    v-if="creamHeight > 0"
    class="froth"
    :style="{
      backgroundColor: currentCreamer.color,
      height: creamHeight + '%',
      bottom: baseHeight + syrupHeight + '%'
    }"
  >
    <div v-for="n in 5" :key="n" class="foam"></div>
  </div>
</template>

<style scoped>
.froth {
  position: absolute;
  width: 100%;
}
</style>