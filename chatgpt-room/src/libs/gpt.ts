// libs chatgpt 库放这
import type { ChatMessage } from '@/types';

// openai 上下文的呢？ 把聊天的内容包括assistant 返回都再次发送chatgpt 
// tokens 消费  上限的， 怎么办？ 
// 动态调整的messageList 数组  最近的几个问题和回复
export async function chat(messageList: ChatMessage[], apiKey: string) {
    try {
        const result = await fetch("https://api.openai.com/v1/chat/completions", {
            method: 'post',
            headers: {
                "Content-Type": "application/json",
                // axios 请求拦截中的
                "Authorization": `Bearer ${apiKey}`,
            },
            body: JSON.stringify({
                model: "gpt-3.5-turbo",
                stream: true,
                messages: messageList
            })
        })
        return result
    } catch(error) {
        throw error
    }
}
