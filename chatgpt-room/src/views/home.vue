<template>
    <div class="flex flex-col h-screen">
        <div class="flex flex-nowrap fixed w-full items-baseline top-0 px-6 py-4 bg-gray-100">
            <div class="text-2xl font-bold">ChatGPT</div>
            <div class="ml-4 text-sm text-gray-500">
                基于OpenAI的ChatGPT自然语言模型人工智能对话
            </div>
            <div
                @click="clickConfig()" 
                class="ml-auto px-3 py-2 text-sm cursor-pointer hover:bg-white rounded-md">
                设置
            </div>
        </div>
        <div class="flex-1 mx-2 mt-20 mb-2" ref="chatListDom">
            <div 
            v-for="item of messageList.filter(v => v.role !== 'system')"
            class="group flex flex-col px-4 py-3 hover:bg-slate-100 rounded-lg">
                
                <div class="flex justify-between items-center mb-2">
                    <div class="font-bold">{{roleAlias[item.role]}}</div>
                    <Copy class="invisible group-hover:visible" 
                    :content="item.content"/>
                </div>
                <div>
                    <div 
                    v-if="item.content"
                    v-html="md.render(item.content)"
                    class="prose text-sm text-slate-600 leading-relaxed">

                    </div>
                    <Loading v-else />
                </div>
            </div>
        </div>
        <div class="sticky bottom-0 w-full p-6 pb-8 bg-gray-100">
            <div 
            class="-mt-2 mb-2 text-sm text-gray-500" 
            v-if="isConfig">
                请输入API Key:
            </div>
            <div class="flex">
                <input 
                    :type="isConfig?'password':'text'" 
                    class="input"
                    :placeholder="isConfig?'sk-xxxxxxxxxx':'请输入'"
                    v-model="messageContent"
                    @keydown.enter="isTalking || sendOrSave()"
                />
                <button class="btn" :disabled="isTalking" @click="sendOrSave()">
                {{isConfig?"保存":"发送"}}
                </button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { chat } from '@/libs/gpt';
import { ref, onMounted } from 'vue';
import { ChatMessage } from '../types/index';
import Copy from '../components/Copy.vue';
import { md } from '@/libs/markdown';
import Loading from '@/components/Loading.vue';
import cryptoJS from "crypto-js";
let apiKey = "";
let isConfig = ref(true);
let isTalking = ref(false);
let messageContent = ref("");
const getSecretKey = () => "lvmeng";
const roleAlias = { user: "Me", assistant: "ChatGPT", system: "System"};
const clickConfig = () => {

}

const chatListDom = ref<HTMLDivElement>();
const messageList = ref<ChatMessage[]>([
    {
        role: 'system',
        content: `你是ChatGPT, OpenAI 训练的大模型语言模型， 尽可能简洁回答。
        1. 翻译：我可以把中文翻译成英文，英文翻译成中文，还有其他一些语言翻译，比如法语、日语、西班牙语等。

        2. 咨询服务：如果你有任何问题需要咨询，例如健康、法律、投资等方面，我可以尽可能为你提供帮助。

        3. 闲聊：如果你感到寂寞或无聊，我们可以聊一些有趣的话题，以减轻你的压力。

        请告诉我你需要哪方面的帮助，我会根据你的需求给你提供相应的信息和建议。
        `
    },
    {
        role: 'user',
        content: "蔡总适合吃软饭吗"
    }

])

const sendOrSave = () => {
    if (!messageContent.value.length) return;
    if (isConfig.value) {
        if (saveAPIKey(messageContent.value.trim())) {
            switchConfigStatus();
        }
        clearMessgeContent();
    } else {
        sendChatMessage();
    }
}

const saveAPIKey = (apiKey: string) => {
    if (apiKey.slice(0, 3) !== 'sk-' || apiKey.length !== 51) {
        alert('API KEY错误, 请检查后重新输入！');
        return false;
    }
    const aesApiKey = cryptoJS.AES.encrypt(apiKey, getSecretKey()).toString();
    localStorage.setItem("apiKey", aesApiKey);
    return true
}

const switchConfigStatus = () => (isConfig.value = !isConfig.value)
const clearMessgeContent = () => (messageContent.value = "")

const getAPIKey = () => {
    if (apiKey) return apiKey;
    const aesApiKey = localStorage.getItem('apiKey')??"";
    // 取出来后解密
    apiKey = cryptoJS.AES.decrypt(aesApiKey, getSecretKey()).toString(
        cryptoJS.enc.Utf8
    );
    return apiKey;
}

onMounted(() => {
    if (getAPIKey()) {
        switchConfigStatus();
        // console.log(apiKey);
    }
})

const sendChatMessage = async (content: string = messageContent.value) => {
    try {
        isTalking.value = true;
        if (messageList.value.length === 3) {
            messageList.value.shift();
        }
        messageList.value.push({ role: "user", content});
        clearMessgeContent();
        // 页面响应式 ＣＨＡＴＧＰＴ
        messageList.value.push({role: "assistant", content: ""});
        const { body, status } = await chat(messageList.value, getAPIKey());
    }
}

</script>

<style scoped>
pre {
  font-family: -apple-system, "Noto Sans", "Helvetica Neue", Helvetica,
    "Nimbus Sans L", Arial, "Liberation Sans", "PingFang SC", "Hiragino Sans GB",
    "Noto Sans CJK SC", "Source Han Sans SC", "Source Han Sans CN",
    "Microsoft YaHei", "Wenquanyi Micro Hei", "WenQuanYi Zen Hei", "ST Heiti",
    SimHei, "WenQuanYi Zen Hei Sharp", sans-serif;
}
</style>