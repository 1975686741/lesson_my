<template>
    <div>
     {{msg1}}
     msg2 {{msg2}}
    </div>
 </template>
 <script setup>
 import { defineProps, useAttrs } from "vue"
 const props = defineProps({
         msg1: String
 })
 
 const attrs = useAttrs()
 console.log(attrs)
 </script>
 
 