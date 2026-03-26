import { defineStore } from "pinia";

import bases from "../data/bases.json";
import creamers from "../data/creamers.json";
import syrups from "../data/syrups.json";
import temps from "../data/tempretures.json";

export const useBeverageStore = defineStore("beverageStore", {
  state: () => ({
    temps,
    bases,
    creamers,
    syrups,

    beverageName: "",

    currentTemp: temps[1],
    currentBase: bases[0],
    currentCreamer: creamers[0],
    currentSyrup: syrups[0],

    beverages: [] as any[],
  }),

  getters: {
    hasCream(state) {
      return state.currentCreamer.name !== "No Cream";
    },

    hasSyrup(state) {
      return state.currentSyrup.name !== "No Syrup";
    },

    baseHeight() {
      if (!this.hasCream && !this.hasSyrup) return 100;
      if (!this.hasCream && this.hasSyrup) return 80;
      if (this.hasCream && !this.hasSyrup) return 70;
      return 50;
    },

    syrupHeight() {
      return this.hasSyrup ? 20 : 0;
    },

    creamHeight() {
      return this.hasCream ? 30 : 0;
    },
  },

  actions: {
    makeBeverage(name: string) {
      if (!name.trim()) return;

      this.beverages.push({
        name,
        temp: this.currentTemp,
        base: this.currentBase,
        creamer: this.currentCreamer,
        syrup: this.currentSyrup,
      });

      this.beverageName = "";
    },

    showBeverage(beverage: any) {
      this.currentTemp = beverage.temp;
      this.currentBase = beverage.base;
      this.currentCreamer = beverage.creamer;
      this.currentSyrup = beverage.syrup;
    },
  },
});