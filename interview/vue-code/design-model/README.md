- 看透style opacity 用法
    - 提供定制能力
        - 默认配置
            - model/config.ts
        - 本应用全局定制
            - ``
               mian.ts
               app.use(Modal, {
               })
               Object.assign(config.style, options.style)
            ``
         - 组件定制
         - 