<template>
  <div class="login">
    <LoginForm></LoginForm>
    <div class="login-header">
      <span>{{ appName }}</span>
      <Weather :weather="weather"></Weather>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { LoginType } from "@/constant/index";
import LoginForm from "./components/LoginForm.vue";
import { useSetting } from "@/store";
import Weather from "@/components/Weather.vue";
const loginType = ref<LoginType>();
loginType.value = LoginType.PASSWORD;
const { getTodayWeather, weather, appName } = useSetting();
getTodayWeather();
</script>
<style scoped lang="scss">
.login {
  background: url("@/assets/background.jpeg") no-repeat;
  background-size: 100% 100%;
  height: 100%;
  position: relative;
}
.login-header {
  display: grid;
  grid-template-columns: 1fr auto;
  color: var(--el-color-primary);
  align-items: center;
  padding: 0 20px;
}
</style>
