import { ref, computed, Ref } from "vue";
import type { FormInstance, FormRules } from "element-plus";

export enum LoginStateEnum {
  LOGIN,
  REGISTER,
  RESET_PASSWORD,
  MOBILE,
  QR_CODE,
}

const currentState = ref<LoginStateEnum>(LoginStateEnum.LOGIN);

export function useLoginState() {
  function setLoginState(state: LoginStateEnum) {
    currentState.value = state;
  }
  const getLoginState = computed(() => currentState.value);

  function handleBackLogin() {
    setLoginState(LoginStateEnum.LOGIN);
  }
  return {
    setLoginState,
    getLoginState,
    handleBackLogin,
  };
}

export function useFormValid<T>(formRef: Ref<FormInstance>) {
}
