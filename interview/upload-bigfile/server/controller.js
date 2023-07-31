// node 不用class 名字 ·
const multiparty = require('multiparty')
const path = require('path')
const fse = require('fs-extra')

const UPLOAD_DIR = path.resolve(__dirname, "..", "target");

const extractExt = filename =>
    filename.slice(filename.lastIndexOf("."), filename.length);

const resolvePost = req =>
    new Promise(resolve => {
        let chunk = "";
        // 慢慢接收post  body的源码   bodyParser
        req.on("data", data => {
            chunk += data;
        });
        req.on("end", () => {
            resolve(JSON.parse(chunk));
        })
    })

const getChunkDir = fileHash =>
    path.resolve(UPLOAD_DIR, `chunkDir_${fileHash}`);

const createUploadedList = async fileHash =>
    fse.existsSync(getChunkDir(fileHash))    
        ? await fse.readdir(getChunkDir(fileHash))
        : [];

// 写入文件流
const pipeStream = (path, writeStream) =>
    new Promise(resolve => {
        // 继承 
        const readStream = fse.createReadStream(path);
        readStream.on("end", () => {
            fse.unlinkSync(path); // 释放资源 
            resolve();
        })
        readStream.pipe(writeStream)
    })

const mergeFileChunk = async(filePath, fileHash, size) => {
    
}

module.exports = class {
    // 单个切片的上传
    async handleFormData(req, res) {
        console.log('----------------------')
        const multipart = new multipart.Form();
        multipart.parse(req, async(err, fields, files) => {
            // fields 文本字段 =》文件名 md5值
            if (err) {
                console.log(err);
                res.status = 500;
                res.end("process file chunk failed");
                return;
            }
            const [chunk] = files.chunk;
            const [hash] = fields.hash;
            const [fileHash] = fields.fileHash;
            const [filename] = fields.filename;
        })
    }
    // 合并所有切片 
    async  handleMerge(req, res) {
        // 请求体
        const data = await resolvePost(req);
        const {fileHash, filename, size} = data;
        const ext = extractExt(filename);
        const filePath = path.resolve(UPLOAD_DIR, `${fileHash}${ext}`);
        // 封装
        await mergeFileChunk(filePath, fileHash, size);
        res.end(
            JSON.stringify({
                code: 0,
                message: 'file merged success'
            })
        )
    }
    // 上传过了吗
    async handleVerifyUpload() {

    }
    async deleteFiles() {

    }
}