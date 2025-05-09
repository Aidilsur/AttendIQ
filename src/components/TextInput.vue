<script setup lang="ts">
import { computed } from "vue";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

interface Props {
  id: string;
  label: string;
  type?: string;
  modelValue: string;
  placeholder?: string;
  error?: string; // Add error prop for validation
  required?: boolean; // Add required prop
}

const props = withDefaults(defineProps<Props>(), {
  type: "text",
  placeholder: "",
  error: "",
  required: false,
});

const emit = defineEmits<{
  (e: "update:modelValue", value: string): void;
}>();

const model = computed({
  get: () => props.modelValue,
  set: (value: string) => emit("update:modelValue", value),
});
</script>

<template>
  <div class="space-y-2">
    <Label :for="id">
      {{ label }}
      <span v-if="required" class="text-red-500">*</span>
    </Label>
    <Input
      :id="id"
      :type="type"
      :placeholder="placeholder"
      v-model="model"
      :required="required"
    />
    <span v-if="error" class="text-sm text-red-500">{{ error }}</span>
  </div>
</template>
