import { effect } from "../effect";
import { ref } from "../ref";

describe('ref测试', () => {
    it('ref基本使用', () => {
        const r = ref(0)
        let val
        effect(() => {
            val = r.value
        })
        expect(val).toBe(0)
        r.value++
        expect(val).toBe(1)
    })
    it('ref复杂数据其实也是用了reactive', () => {
        const r = ref({name: '玩转vue3响应式'})
        let val
        effect(() => {
            val = r.value.name
        })

    })
})