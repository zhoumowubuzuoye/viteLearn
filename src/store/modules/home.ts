import { defineStore } from "pinia";
import {ref} from 'vue'

export const useMain = defineStore(
  "main",
  () => {
    const counter = ref(0);

    const increment = () => {
      counter.value++;
    };

    return {
      counter,
      increment,
    };
  },
  {
    persist: true,
  }
);
