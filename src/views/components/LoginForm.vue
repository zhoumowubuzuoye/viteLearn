<template>
  <div class="background">
    <el-form
      :model="form"
      label-width="auto"
      style="width: 500px"
      :rules="rules"
      ref="ruleFormRef"
    >
      <el-form-item label="账号" prop="username">
        <el-input v-model="form.username" v-time />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="form.password" type="password" />
      </el-form-item>
      <el-form-item>
        <div class="buttons">
          <el-button type="primary" @click="login">登录</el-button>
          <el-button>取消</el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>
<script lang="ts" setup>
import { reactive } from "vue";
import { FormInstance, FormRules } from "element-plus";
import { useUser } from "@/store";
import { useRouter } from "vue-router";

const ruleFormRef = ref<FormInstance>();
interface RuleForm {
  username: string;
  password: string;
}

const router = useRouter()

const user = useUser();

const form = reactive<RuleForm>({
  username: "",
  password: "",
});

const rules = reactive<FormRules<typeof form>>({
  password: [{ required: true, message: "请输入密码" }],
  username: [{ required: true, message: "请输入账号" }],
});

const login = () => {
  ruleFormRef.value?.validate((validate) => {
    if (validate) {
      user.setToken(form.username + form.password);
      router.push('/')
    } else {
    }
  });
  //   if (!formEL) return;
  //   formEL.validate((validate, fields) => {
  //     if (validate) {
  //       console.log("submit!");
  //     } else {
  //       console.log("err", fields);
  //     }
  //   });
};
</script>
<style scoped lang="scss">
.background {
  background: url("@/assets/formBackground.jpeg") no-repeat;
  background-size: 100% 100%;
  width: 40%;
  position: absolute;
  top: 43vh;
  right: 0;
  display: flex;
  flex-direction: row-reverse;
  padding: 20px;
}
.buttons {
  margin: 0 auto;
}
:deep(.el-form-item__label) {
  color: #fff;
}
</style>
