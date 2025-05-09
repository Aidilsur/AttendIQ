<script setup lang="ts">
import { reactive, ref } from "vue";
import { z } from "zod";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import TextInput from "@/components/TextInput.vue";

const loginSchema = z.object({
  email: z.string().email("Invalid email address").min(1, "Email is required"),
  password: z.string().min(1, "Password is required"),
});

type LoginForm = z.infer<typeof loginSchema>;

const form = reactive<LoginForm>({
  email: "",
  password: "",
});
const loading = ref(false);

const errors = ref<Partial<Record<keyof LoginForm, string>>>({});

const validateForm = () => {
  try {
    loginSchema.parse(form);
    errors.value = {};
    return true;
  } catch (err) {
    if (err instanceof z.ZodError) {
      errors.value = err.errors.reduce((acc, error) => {
        const path = error.path[0] as keyof LoginForm;
        acc[path] = error.message;
        return acc;
      }, {} as Partial<Record<keyof LoginForm, string>>);
    }
    return false;
  }
};

const handleLogin = async () => {
  if (!validateForm()) return;

  loading.value = true;
  try {
    // fake async login
    await new Promise((res) => setTimeout(res, 1000));
    console.log("Login success", form);
  } catch (e) {
    console.error("Login failed", e);
  } finally {
    loading.value = false;
  }
};
</script>

<template>
  <div class="min-h-screen flex items-center justify-center">
    <Card class="w-[350px]">
      <CardHeader>
        <CardTitle>Login</CardTitle>
      </CardHeader>
      <CardContent>
        <form @submit.prevent="handleLogin" class="space-y-4">
          <TextInput
            id="email"
            label="Email"
            type="email"
            v-model="form.email"
            placeholder="Enter your email"
            :error="errors.email"
            required
          />
          <TextInput
            id="password"
            label="Password"
            type="password"
            v-model="form.password"
            placeholder="Enter your password"
            :error="errors.password"
            required
          />
        </form>
      </CardContent>
      <CardFooter>
        <Button :disabled="loading" class="w-full" @click="handleLogin">{{
          loading ? "Logging in..." : "Login"
        }}</Button>
      </CardFooter>
    </Card>
  </div>
</template>

<style scoped></style>
