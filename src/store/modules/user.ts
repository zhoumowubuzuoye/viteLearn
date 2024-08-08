import { defineStore } from "pinia";
import { ref } from "vue";

export const useUser = defineStore(
  "user",
  () => {
    const token = ref<string>('');
    const setToken = (t: string) => {
      token.value = t;
    };
    return {
      token,
      setToken,
    };
  },
  {
    persist: true,
  }
);
