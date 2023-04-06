<template>
    <div class="k-input" :class="styleClass">
        <input 
            class="k-input__inner"
            :value="modelValue"
            @input="changeInputVal"
            :disabled="disabled"
        />
    </div>
</template>

<script setup>
import { defineEmits, computed } from 'vue'
const inputProps = defineProps({
    "modelValue": {
        type: String,
        default: ''
    },
    "disabled": {
        type: Boolean,
        default: false
    }
})
const inputEmits = defineEmits(['update:modelValue'])
const changeInputVal = (event) => {
    inputEmits("update:modelValue", event.target.value)
}
const styleClass = computed(() => {
    return {
        "is-disabled": inputProps.disabled,
        // 尺寸
    }
})
</script>

<style lang="stylus" scoped>
.k-input
    font-size 14px
    display inline-block
    position relative 
    .k-input__inner
        background-color #fff
        border-radius 4px
        border 1px solid #dcbfe6
        box-sizing border-box
        color #606266
        display inline-block
        height 40px
        line-height 40px
        outline none
        padding 0 15px
        width 100%
        &::placeholder
            color #c2c3ca
        &:hover
            border 1px solid #c0c4cc
        &:focus
            border 1px solid #409eff
        
.k-input.is-disabled
    .k-input__inner
        background-color #f5f7fa
        border-color #e4e7ed
        color #c0c4cc
        cursor not-allowed
        &::placeholder
            color #c3c4cc

</style>