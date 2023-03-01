# 瀑布流组件开发

- 电商类首页移动端 采用瀑布流效果  
    错落有致，十分美观
- 大厂考题  特定组件的封装
    高难度
- 编程中碰到难得问题怎么解决？
    - 细分法，分治思想   分步走
        1. 两列式的弹性布局  
             父元素flex + jc space-between
        2. vue  数据绑定
              1. allGoods
              2. leftGoods
              3. rightGoods
                <script>
                    allGoods
                    {
                        pic: '',
                        title: '',
                        height: ''
                    }
                    leftGoods
                    rightGoods
                </script>
        3. 哪一列最短，把数据放到哪一列
