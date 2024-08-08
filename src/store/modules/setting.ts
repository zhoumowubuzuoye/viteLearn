import { defineStore } from "pinia";
import moment from "moment";
import { getWeather, Weather } from "@/apis/setting";
export const useSetting = defineStore(
  "setting",
  () => {
    const date = ref("");

    const weather = reactive<Weather>({
      wea: "",
    });

    const appName = ref<string>("哈哈哈");

    const img = ref<string>(
      "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
    );

    const getTodayWeather = () => {
      getWeather().then((res) => {
        Object.assign(weather, res.data);
      });
    };

    const getTime = () => {
      setInterval(() => {
        date.value = moment().format(`YYYY-MM-DD HH:mm:ss`);
      }, 1000);
    };

    return {
      date,
      weather,
      getTodayWeather,
      appName,
      img,
      getTime,
    };
  },
  {
    persist: true,
  }
);
