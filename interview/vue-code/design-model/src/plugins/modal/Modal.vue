<template>
    <Teleport
        to="body"
        :disabled="!isTeleport"
    >
        <div v-if="modelValue" class="modal">
        <!-- 提供配置能力给调用者 -->
            <div 
                class="mask"
                :style="style"
                @click=""
            >
            </div>
        </div>
    </Teleport>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import config from './config';
// name  
export default defineComponent({
    name: 'RModal',
    props: {
        isTeleport: {
            type: Boolean,
            default: true
        },
        modelValue: {
            type: Boolean,
            default: false,
            required: true
        },
        title: {
            type: String,
            default: ''
        },
        content: {
            type: String,
            default: '',
            required: true
        },
        opacity: {
            type: Number,
            default: () => config.style!.opacity
        }
    },
    setup(props, ctx) {
        const style = computed(() => {opacity: props.opacity});
        return {
            style
        }
    }
})
</script>

<style scoped>

</style>