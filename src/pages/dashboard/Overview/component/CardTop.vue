<script setup lang="ts">
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Star } from "lucide-vue-next";

// Example top performers data
const topPerformers = [
  {
    name: "Alice Johnson",
    id: 1,
    avatar: "https://randomuser.me/api/portraits/women/1.jpg",
    salary: 4500000,
    role: "Software Engineer",
  },
  {
    name: "Bob Smith",
    id: 2,
    avatar: "https://randomuser.me/api/portraits/men/2.jpg",
    salary: 4200000,
    role: "Product Manager",
  },
  {
    name: "Charlie Lee",
    id: 3,
    avatar: "https://randomuser.me/api/portraits/men/3.jpg",
    salary: 3900000,
    role: "QA Analyst",
  },
  {
    name: "Diana Prince",
    id: 4,
    avatar: "https://randomuser.me/api/portraits/women/4.jpg",
    salary: 5000000,
    role: "Team Lead",
  },
  {
    name: "Evan Wright",
    id: 5,
    avatar: "https://randomuser.me/api/portraits/men/5.jpg",
    salary: 4000000,
    role: "UI/UX Designer",
  },
];

const minSalary = 4000000;

function formatRupiah(amount: number) {
  return "Rp" + amount.toLocaleString("id-ID");
}

function salaryColor(salary: number) {
  if (salary === minSalary) return "text-yellow-500";
  if (salary > minSalary) return "text-green-600";
  return "text-red-500";
}
</script>

<template>
  <div class="flex flex-col md:flex-row gap-4">
    <Card class="w-full shadow-md p-0 overflow-hidden gap-0">
      <CardHeader class="p-4 mb-0">
        <div class="flex items-center gap-3">
          <Star class="text-yellow-400" :size="24" />
          <span class="font-medium text-base">Performer of the Month</span>
        </div>
      </CardHeader>
      <CardContent class="px-6 py-6 rounded-xl shadow-lg">
        <div class="text-white">
          <ul class="space-y-2">
            <li
              v-for="person in topPerformers"
              :key="person.id"
              class="flex items-center gap-3 p-2 rounded-lg"
            >
              <Avatar class="h-9 w-9 ring-2 ring-primary/30">
                <AvatarImage :src="person.avatar" />
                <AvatarFallback>{{ person.name.charAt(0) }}</AvatarFallback>
              </Avatar>
              <div class="flex-1">
                <span class="block text-sm text-black font-semibold">{{
                  person.name
                }}</span>
                <span class="block text-xs text-muted-foreground">{{
                  person.role
                }}</span>
                <span
                  class="block text-xs font-medium"
                  :class="salaryColor(person.salary)"
                >
                  Salary: {{ formatRupiah(person.salary) }}
                </span>
              </div>
              <Star class="text-yellow-400" />
            </li>
          </ul>
        </div>
      </CardContent>
    </Card>

    <!-- You can add more cards with different colors here, like Performance or Absent -->
  </div>
</template>
