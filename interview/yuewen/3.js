// 给定一些目录路径，聚合成树形结构

const pathList = [
    '/root/dir1/file1.txt',
    '/root/dir1/subdir1/file2.text',
    '/root/dir2/file3.txt',
    '/root.dir2/subdir2/file4.txt',
    '/root.dir2/subdir3/file5.txt'
];
// json树
const tree = {};
for (let path of pathList) {
    const parts= path.split('/').filter((part) => part !== "");
    let currentNode = tree;
    for (let i = 0; i < parts.length - 1; i++) {
          const part = parts[i];
          if (!currentNode) {
                currentNode[part] = {}
          }
          currentNode= currentNode[part]
    }
    const filename = parts[parts.length - 1]
    if (!currentNode.files) {
        currentNode.files = []
    }
    currentNode.files.push(filename)
}
console.log();
