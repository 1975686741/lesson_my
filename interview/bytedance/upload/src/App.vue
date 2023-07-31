<script setup>
import { reactive } from 'vue'
const SIZE = 10 * 1024 * 1024  // 10M
const state= reactive({
    file: null,
    data: []
})

// ajax options
const handleFileChange = (e) => {
  // 如何拿到文件对象 
  const [file] = e.target.files  // 第一个文件
  if (!file)  return
  state.file = file
}

const request = ({
  url,
  method = 'post',
  data,
  headers = {},
  // 进度条
  onProgress = e => e,
  // 切片 
  requestList
}) => {
  return new Promise(resolve => {
    const xhr = new XMLHttpRequest();
    // ajax 上传文件负责 上传进度
    xhr.upload.onprogress = onProgress
    xhr.open(method, url)
    Object.keys(headers).forEach(key =>
      xhr.setRequestHeader(key, headers[key])
    )
    xhr.send(data)
    xhr.onload = e => {
      resolve({
        data: e.target.response
      })
    }
  })
}

const handlUpload = async () => {
    if (!state.file) return
    const fileChunkList = createFileChunk(state.file)
    state.data = fileChunkList.map(({file}, index) => {{
        chunk: file
        hash: state.file.name + '-' + index
    }})
}

const createFileChunk = (file, size = SIZE) => {
    // console.log(file);
    const fileChunkList = []
    let cur = 0
    while (cur < file.size) {
        fileChunkList.push({file: file.slice(cur, cur + size)})
        cur += size
    }
    // console.log(fileChunkList);
    return fileChunkList
}

</script>

<template>
  <div>
    <form enctype="multipart/form-data">
      <input type="file" multiple="multiple"  @change="handleFileChange" >
      <el-button @click="handlUpload">upload</el-button>
    </form>
  </div>
</template>

<style>

</style>
