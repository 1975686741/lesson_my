# 阿里巴巴双11界面开发

- 设计稿件
    750px 像素    一种尺寸 移动页面
    iphone的小尺寸 375pt  retina 屏幕 设计的标准
- 前端使命
   html+css+js  一像素不差地还原设计稿
   - 交互
   - css视觉效果 css动画
   - 设计稿是静态的， 我们要做的是动态的
   - 兼容性 alley 兼容性达到恐怖的99.99%
  
- css reset
    1. 抹平不同浏览器的预设样式，从0出发， 在所有浏览器上表现一致
    2. 利用css inherit 继承属性 body里 font-size font-family...
        默认字体大小16px

- rem单位
    1. 在移动端为了兼容  少用甚至不用px  因为px在不同的设备上尺寸不一
    2. 先给html标签设置一个font-size
        37.5px 固定？
        等比例 1/10 方便去做栅格系统 布局
        如何在不同的设备上，让1rem = 设备宽度/10
    3. html的font-size要动态设置
        window.innerwidth 拿到设备宽度
        document.documentElement.style.fontSize = + 'px' 