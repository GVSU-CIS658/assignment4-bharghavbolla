<template>
  <div>
    <Beverage :isIced="beverageStore.currentTemp === 'Cold'" />

    <ul>
      <li>
        <template v-for="temp in beverageStore.temps" :key="temp">
          <label>
            <input
              type="radio"
              name="temperature"
              :value="temp"
              v-model="beverageStore.currentTemp"
            />
            {{ temp }}
          </label>
        </template>
      </li>

      <li>
        <template v-for="b in beverageStore.bases" :key="b.id">
          <label>
            <input
              type="radio"
              name="base"
              :value="b"
              v-model="beverageStore.currentBase"
            />
            {{ b.name }}
          </label>
        </template>
      </li>

      <li>
        <template v-for="c in beverageStore.creamers" :key="c.id">
          <label>
            <input
              type="radio"
              name="creamer"
              :value="c"
              v-model="beverageStore.currentCreamer"
            />
            {{ c.name }}
          </label>
        </template>
      </li>

      <li>
        <template v-for="s in beverageStore.syrups" :key="s.id">
          <label>
            <input
              type="radio"
              name="syrup"
              :value="s"
              v-model="beverageStore.currentSyrup"
            />
            {{ s.name }}
          </label>
        </template>
      </li>
    </ul>

    <input
      type="text"
      placeholder="Beverage Name"
      v-model="beverageStore.beverageName"
    />

    <button @click="beverageStore.makeBeverage(beverageStore.beverageName)">
      🍺 Make Beverage
    </button>

    <div id="beverage-container">
      <template v-for="drink in beverageStore.beverages" :key="drink.name">
        <label class="saved-drink">
          <input
            type="radio"
            name="savedDrink"
            @change="beverageStore.showBeverage(drink)"
          />
          {{ drink.name }}
        </label>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import Beverage from "./components/Beverage.vue";
import { useBeverageStore } from "./stores/beverageStore";

const beverageStore = useBeverageStore();
</script>

<style scoped>
input[type="text"] {
  margin-top: 1rem;
  margin-right: 0.5rem;
  padding: 0.35rem 0.5rem;
}

button {
  padding: 0.35rem 0.75rem;
  cursor: pointer;
}

#beverage-container {
  margin-top: 1rem;
}

.saved-drink {
  display: inline-block;
  margin-right: 1rem;
  margin-top: 0.5rem;
}
</style>