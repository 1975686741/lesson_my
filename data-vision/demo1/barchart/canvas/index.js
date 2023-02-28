const data = [
    { name: "questions", value: 17 },
    { name: "schools", value: 25 },
    { name: "philosophers", value: 35 },
];


// canvas 画布
const chartWidth = 480;  //条形图的宽度
const chartHeight = 300;  //条形图的高度
const margin = 15;   // 条形图的外间距
// cancas 画布的大小
const containerWidth = chartWidth + margin*2;
const containerHeight = chartHeight + margin*2;
// 取出所有的names X坐标
const names = Array.from(data, (d) => d.name );
// 取出所有的values Y坐标
const values = Array.from(data, (d) => d.value );
// 不需要item， 用_ 来占个位 占位符
const indices = Array.from(data, (_, i) => i);
// console.log(names, values, indices);

const step = chartWidth / names.length; // 执行几步
const barWidth = step * 0.8;  // x轴的偏移
const xs = Array.from(indices, (i) => i * step);
// 横坐标每个name绘制的起始值
// console.log(xs);

const y = chartHeight;
const vmax = Math.max(...values);
const barHeights = Array.from(values, (v) => chartHeight * (v / vmax));
// 高度
// console.log(barHeights);

const nameColor = {
    questions: '#5B8FF9',
    philosophers: '#61DDAA',
    schools: '#65789B'
}
// 颜色
const colors = Array.from(names, (name) => nameColor[name])
