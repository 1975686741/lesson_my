export interface ChatMessage {
    // openAI 文本AI 
    // 3中角色 system 系统 openai 
    // assistant 助理 假设你是一位情感大师 
    // user   
    // ts 联合类型 类型推导
    role: "user" | "assistant" | "system";
    content: string;
}