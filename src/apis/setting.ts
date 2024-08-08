import request from "./";
import { WeatherType } from "@/enums";
export interface Weather {
  wea: string;
  wea_img?: WeatherType;
  [other: string]: any;
}
export interface Area {
  country_area: number;
  city: string;
}

export function getWeatherArea() {
  return request<Area>({
    url: "https://ipapi.co/json/",
    method: "get",
  });
}

export function getWeather() {
  return request<Weather>({
    url: `http://v1.yiketianqi.com/api`,
    params: {
      appid: 18364957,
      appsecret: "jwwA0cL1",
      version: "v61",
      city: "苏州",
    },
  });
}
