- CSS rule 
    1. 盒子模型 content + padding+border+margin   快递
    2. 背景颜色调试大法
    3. CSS 布局方式的一种
       - 离他最近的position relative 元素定位
       - 如果没有，就一直往外查找 body 
    4. block 块级元素   盒子能力 占整个一行，设置宽高，把兄弟元素挤下去
       inline 行内元素   没有盒子能力 靠自身内容撑起来的，不能设置宽高
       inline-block    即能设置宽高，又不会把兄弟元素挤下去
    5. display: flex  弹性布局


- 垂直居中
    1. 父子元素
        父元素  relative（不是必须的）
        子元素  absolute
    2. 要不要确定子元素的大小
        transform   rotate | translate | scale
        变基 

- 方法？
  - 定位 + margin赋值
        父元素  一定要得到大小 （不如transform）
  - 定位 + transform
        相对于自身移动
  - calc  将父元素的一半减去子元素的一半  正好对齐
        缺点是性能不好
  - 弹性布局
        优点：不用定位，比较简单方便
        缺点：太新了，兼容性不好