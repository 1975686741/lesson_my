<template>
  <div id="app">
      <div>
        <input 
          type="file"
          :disabled="status != Status.wait"
          @change="handleFileChange"
        />
        <el-button @click="handleUpload" :disabled="uploadDsiabled">upload</el-button>
      </div>
  </div>
</template>

<script>
const SIZE = 10 * 1024* 1024
const Status = {
  "wait": "wait",
  // 流量
  "pause": "pause",
  "uploading": "uploading"
}
export default {
  name: 'App',
  data :() => ({
    Status,
    // 文件状态
    status: Status.wait,
    // 文件对象
    container: {
      file: null
    },
    // xhr 列表
    requestList: []
  }),
  computed: {
    // 不是那么简单的 计算属性 
    uploadDsiabled() {
      return (
        !this.container.file || // 未选择上传文件
        [Status.pause, Status.uploading].includes(this.status)
      )
    }
  },  
  methods: {
    handleFileChange(e) {
      const [file] = e.target.files;
      if (!file) return;
      this.resetData();
      this.container.file = file;
    },
    // 做什么？
    // 取消xhr 请求
    resetData() {
      this.requestList.forEach(xhr => xhr?.abort())
      this.requestList = [];
      // if (this.container)
    },
    handleUpload() {
      if (!this.container.file) return

      this.status = Status.uploading;

      const fileChunkList = this.createFileChunk(this.container.file);
      console.log(fileChunkList);


    },
    createFileChunk(file, size = SIZE) {
      const fileChunkList = [];
      let cur = 0;
      while(cur < file.size) {
        fileChunkList.push({file: file.slice(cur, cur + size)});
        cur += size;
      }
      return fileChunkList
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
