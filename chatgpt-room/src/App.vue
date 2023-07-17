<script setup lang="ts">
// import type { ChatMessage } from './types';
import { ref, type Ref} from 'vue'
import { chat } from '@/libs/gpt'
const message :Ref<string> = ref("");
const doChat = async (message :string) => {
  const result = await chat([{
    role: "user",
    content: message
  }], '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');
  console.log(result);
}
</script>

<template>
  <input type="text" v-model="message" placeholder="chatroom"/>
  <button @click="doChat">发送</button>
  <router-view></router-view>
</template>

<style>

</style>
