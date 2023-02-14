# css 必考题 BFC
- Block Formating Context  块级格式上下文
        Block 占据一行
- Flex Formating Context 
        row  不会换行不会离开文档流

- 我们看到的页面  是由那些规则决定的？
    - 文档流
        - 正常文档流
        - 脱离文档流
            - none
            - position  不为static
            - float 离开文档流
            - 父元素拿不到子元素的高度
            <!-- - 父元素 定死高度 -->
            弹性布局  子元素在一行显示，float在一行

- 在正常的文档流中
    - float 会让元素，离开文档流
        - 父元素不能知晓子元素的大小了
        - 更严重的问题是  文档流会出问题，下面的盒子会盖到float元素
        - 一定要让父元素拿到 高度
    - 在正常文档流中，可以开启新的BFC   css魔法开始！
    - HTML 是最大的BFC 由浏览器自动创建给予
    - 在 BFC 环境中，父元素会将浮动元素参与计算

- 创建BFC 的方法
    - overflow: hidden
    - display: inline-block
    - position: absolute  fixer
    - 浮动
    - flex
    - display: table

- 在同一个BFC里，垂直方向的距离，由margin决定
    - 相邻margin会重叠